import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import { TaskListContext } from '../context';

const Column = function (props) {
    const { id, name, limit } = props;
    const { tasks, deleteTask, moveRight, moveLeft } = useContext(TaskListContext);
    const columnRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    // const [tasksInOneColumn, setTasks] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(columnRef.current.children.length, limit);

        if (columnRef.current.children.length >= limit) {
            // eslint-disable-next-line no-console
            console.log('limit exceed');
        }
    });

    const filteredTasks = tasks.filter((t) => id === t.idColumn);

    // eslint-disable-next-line no-unused-vars
    const checkTasks = () => {
        if (columnRef.current.children.length >= limit) {
            // eslint-disable-next-line no-console
            console.log('limit exceed');
        }
    };

    const renderTasks = filteredTasks.map((t) => (
        <Task
            deleteTask={() => deleteTask(t.taskName)}
            moveRight={() => moveRight(t.taskName)}
            moveLeft={() => moveLeft(t.taskName)}
            taskName={t.taskName}
            author={t.author}
            description={t.description}
            key={t.id}
        />
    ));

    return (
        <div key={id} className="kanban__column">
            <header>
                <h3>{name}</h3>
                <p>{limit}</p>
            </header>
            {/* Renderować pod warunkiem: columnRef.current.children.length >= limit */}
            <ul ref={columnRef}>{renderTasks}</ul>
        </div>
    );
};

Column.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    limit: PropTypes.number,
};
Column.defaultProps = {
    name: 'default',
    id: 0,
    limit: 0,
};

export default Column;
