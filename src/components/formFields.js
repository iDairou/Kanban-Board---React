import React from 'react';

const fields = [
    {
        label: 'Author',
        name: 'author',
        type: 'text',
        isRequired: true,
        pattern: /^[A-Za-z0-9. ]{5,20}$/,
        error: <p>Wrong author (5-20 characters)</p>,
    },
    {
        label: 'Task name',
        name: 'taskName',
        type: 'text',
        isRequired: true,
        pattern: /^[A-Za-z0-9. ]{5,30}$/,
        error: <p>Wrong task name (5-30 characters)</p>,
    },

    {
        label: 'Description',
        name: 'description',
        type: 'text',
        isRequired: true,
        pattern: /^[A-Za-z0-9. ]{5,100}$/,
        error: <p>Wrong description (5-100 characters)</p>,
    },
];

export default fields;
