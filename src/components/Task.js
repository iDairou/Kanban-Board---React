import React from 'react';

const Task = function () {
    return (
        <li className="task">
            <header>Task name</header>
            <p>Description</p>
            <p>User</p>
            <div className="task__button--panel">
                <button type="button">Left</button>
                <button type="button">Right</button>
                <button type="button">Delete</button>
            </div>
        </li>
    );
};
export default Task;
