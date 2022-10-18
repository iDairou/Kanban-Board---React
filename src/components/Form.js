import React, { useReducer, useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const wrongValues = checkValidation(state);
        setErrors(wrongValues);
        if (wrongValues.length === 0) {
            setErrors(...wrongValues);
            // eslint-disable-next-line no-console
            console.log('task added', state);
        }
        // eslint-disable-next-line no-console
        console.log(state);
    };
    return (
        <form onSubmit={handleSubmit} className="kanban__form">
            {fields.map(({ name, type, label }) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label key={name}>
                    {label}
                    <input onChange={(e) => dispatch(e.target)} name={name} type={type} />
                </label>
            ))}
            <div>{errors}</div>
            <input type="submit" value="Add task" />
        </form>
    );
};
export default Form;
