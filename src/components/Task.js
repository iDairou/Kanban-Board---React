import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-named-as-default

const Task = function (props) {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { taskName, author, description, deleteTask, moveRight, moveLeft, disabledLeft, disabledRight } = props;
    return (
        <li className="tasks__list--task">
            <header>Title: {taskName}</header>
            <p>Description: {description}</p>
            <p>Author: {author}</p>
            <div className="task__button--panel">
                <button disabled={disabledLeft} onClick={moveLeft} type="button">
                    Left
                </button>
                <button disabled={disabledRight} onClick={moveRight} type="button">
                    Right
                </button>
                <button onClick={deleteTask} type="button">
                    Delete
                </button>
            </div>
        </li>
    );
};
Task.propTypes = {
    taskName: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
};
Task.defaultProps = {
    taskName: 'No tasks',
    author: 'No author',
    description: 'No desc',
};
export default Task;
