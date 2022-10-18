import fields from './formFields';

const checkValidation = (state) => {
    // eslint-disable-next-line prefer-const
    let wrongValues = [];
    // eslint-disable-next-line object-curly-newline
    fields.forEach(({ name, isRequired, pattern, error }) => {
        const value = state[name];
        if (isRequired) {
            if (!pattern.test(value)) {
                wrongValues.push(error);
            }
        }
    });
    return wrongValues;
};
export default checkValidation;
