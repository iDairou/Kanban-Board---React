import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line import/no-named-as-default

const Task = function (props) {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { taskName, author, description, deleteTask, moveRight, moveLeft, disabledLeft, disabledRight } = props;
    return (
        <li className="tasks__list--task">
            <p className="task__author">
                {' '}
                <FontAwesomeIcon icon={faUser} /> {author}
            </p>
            <h3 className="task__title">{taskName}</h3>
            <p className="task__description">D: {description}</p>

            <div className="task__button--panel">
                <button className="button__left button" disabled={disabledLeft} onClick={moveLeft} type="button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="button__right button" disabled={disabledRight} onClick={moveRight} type="button">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button className="button__delete button" onClick={deleteTask} type="button">
                    <FontAwesomeIcon icon={faTrash} />
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
