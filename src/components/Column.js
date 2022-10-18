import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import TasksContext from '../context';

const Column = function (props) {
    const { id, name, limit } = props;
    // eslint-disable-next-line no-unused-vars
    const { tasks, addTask } = useContext(TasksContext);
    // eslint-disable-next-line no-console
    const filteredTasks = tasks.filter((t) => id === t.idColumn);
    const renderTasks = filteredTasks.map((t) => (
        <Task taskName={t.taskName} author={t.author} description={t.description} />
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
