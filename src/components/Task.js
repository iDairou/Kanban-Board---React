import React from 'react';

import PropTypes from 'prop-types';

const Task = function (props) {
    const { taskName, author, description } = props;
    return (
        <li className="task">
            <header>{taskName}</header>
            <p>{description}</p>
            <p>{author}</p>
            <div className="task__button--panel">
                <button type="button">Left</button>
                <button type="button">Right</button>
                <button type="button">Delete</button>
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