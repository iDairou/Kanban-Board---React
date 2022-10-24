import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import { TaskListContext } from '../context';

const Column = function (props) {
    const { id, name, limit } = props;
    const { tasks, deleteTask, moveRight, moveLeft } = useContext(TaskListContext);

    const filteredTasks = tasks.filter((t) => id === t.idColumn);
    const renderTasks = filteredTasks.map((t) => (
        <Task
            deleteTask={() => deleteTask(t.taskName)}
            moveRight={() => moveRight(t.idColumn)}
            moveLeft={() => moveLeft(t.idColumn)}
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
            <ul>{renderTasks}</ul>
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
