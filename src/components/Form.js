import React, { useContext, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskListContext } from '../context';
import fields from './formFields';
import checkValidation from './validation';

const Form = function () {
    const init = {
        taskName: '',
        author: '',
        description: '',
        idColumn: 1,
    };
    const reducer = (state, { name, value }) => ({ ...state, [name]: value });
    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState('');
    // eslint-disable-next-line no-unused-vars
    const { addTask } = useContext(TaskListContext);
    console.log(errors);

    const handleSubmit = (e) => {
        e.preventDefault();
        const wrongValues = checkValidation(state);
        setErrors(wrongValues);
        if (wrongValues.length === 0) {
            setErrors(...wrongValues);
            addTask({ ...state, id: uuidv4(), isDisabledLeft: false, isDisabledRight: false });
        }
    };

    return (
        <form className="kanban__form" onSubmit={handleSubmit}>
            {fields.map(({ label, name, type }) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label className="kanban__form--label" key={name}>
                    <input
                        placeholder={label}
                        className="kanban__form--input"
                        onChange={(e) => dispatch(e.target)}
                        name={name}
                        value={state[name]}
                        type={type}
                    />
                </label>
            ))}
            <div className="kanban__form--errors">{errors}</div>
            <input className="kanban__form--button button" type="submit" value="Add task" />
        </form>
    );
};
export default Form;
