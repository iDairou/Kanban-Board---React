import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-named-as-default

const Task = function (props) {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { taskName, author, description, deleteTask, moveRight, moveLeft } = props;

    return (
        <li className="task">
            <header>{taskName}</header>
            <p>{description}</p>
            <p>{author}</p>
            <div className="task__button--panel">
                <button onClick={moveLeft} type="button">
                    Left
                </button>
                <button onClick={moveRight} type="button">
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
