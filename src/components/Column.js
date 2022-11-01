import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import { TaskListContext } from '../context';
import columns from './columnSettings';

const Column = function (props) {
    // eslint-disable-next-line react/prop-types
    const { id, name, limit, className } = props;
    const { tasks, deleteTask, moveRight, moveLeft } = useContext(TaskListContext);

    const filteredTasks = tasks.filter((t) => id === t.idColumn);

    const renderTasks = filteredTasks.map((t) => (
        <Task
            deleteTask={() => deleteTask(t.id)}
            moveRight={() => moveRight(t.id)}
            moveLeft={() => moveLeft(t.id)}
            taskName={t.taskName}
            author={t.author}
            description={t.description}
            key={t.id}
            disabledLeft={t.idColumn === columns[0].id ? true : null}
            disabledRight={t.idColumn === columns[columns.length - 1].id ? true : null}
        />
    ));

    return (
        <div className={`col ${className}`}>
            <header>
                <h3>{name}</h3>
                <p>Max: {limit}</p>
            </header>
            <div key={id} className="kanban__column">
                <ul className="tasks__list">{renderTasks}</ul>
            </div>
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
