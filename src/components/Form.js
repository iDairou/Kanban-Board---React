import React, { useContext, useReducer, useState } from 'react';
import { TaskListContext } from '../context';
import fields from './formFields';
// import SendEmail from './SendEmail';
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
    const { tasks, addTask } = useContext(TaskListContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const wrongValues = checkValidation(state);
        setErrors(wrongValues);
        if (wrongValues.length === 0) {
            setErrors(...wrongValues);
            tasks.push(state);
            addTask(tasks);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(({ label, name, type }) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label key={name}>
                    {label}
                    <input onChange={(e) => dispatch(e.target)} name={name} value={state[name]} type={type} />
                </label>
            ))}
            <div>{errors}</div>
            <input type="submit" value="Add" />
        </form>
    );
};
export default Form;
