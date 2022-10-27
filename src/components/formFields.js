const fields = [
    {
        label: 'Task name',
        name: 'taskName',
        type: 'text',
        isRequired: true,
        pattern: /^[A-Za-z0-9. ]{5,30}$/,
        error: 'Wrong task name',
    },
    {
        label: 'Author',
        name: 'author',
        type: 'text',
        isRequired: true,
        pattern: /^[A-Za-z0-9. ]{5,20}$/,
        error: 'Wrong author',
    },
    {
        label: 'Description',
        name: 'description',
        type: 'text',
        isRequired: true,
        pattern: /^[A-Za-z0-9. ]{5,100}$/,
        error: 'Wrong description',
    },
];

export default fields;
