import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import { ButtonDisabledContext, TaskListContext } from '../context';

const Column = function (props) {
    // eslint-disable-next-line react/prop-types
    const { id, name, limit, className } = props;
    const { tasks, deleteTask, moveRight, moveLeft } = useContext(TaskListContext);
    const columnRef = useRef(null);

    const { isDisabled } = useContext(ButtonDisabledContext);
    const filteredTasks = tasks.filter((t) => id === t.idColumn);
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(columnRef.current.children.length, limit);
        if (columnRef.current.children.length >= limit) {
            // eslint-disable-next-line no-console
            console.log('limit exceed');
        }
    }, [tasks]);

    const renderTasks = filteredTasks.map((t) => (
        <Task
            deleteTask={() => deleteTask(t.id)}
            moveRight={() => moveRight(t.id)}
            moveLeft={() => moveLeft(t.id)}
            taskName={t.taskName}
            author={t.author}
            description={t.description}
            key={t.id}
            disabledLeft={isDisabled}
            disabledRight={isDisabled}
        />
    ));

    return (
        <div className={`col ${className}`}>
            <header>
                <h3>{name}</h3>
                <p>{limit}</p>
            </header>
            <div key={id} className="kanban__column">
                {/* Renderować pod warunkiem: columnRef.current.children.length >= limit */}
                <ul className="tasks__list" ref={columnRef}>
                    {renderTasks}
                </ul>
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
