import React, { useState } from 'react';
import Board from './Board';
import Form from './Form';

import TasksContext from '../context';

const App = function () {
    const intTasks = [
        { taskName: 'Task', author: 'Author1', description: 'Desc1', idColumn: 1 },
        { taskName: 'Task2', author: 'Author2', description: 'Desc2', idColumn: 1 },
    ];
    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useState(intTasks);
    const addTask = () => {
        // eslint-disable-next-line no-console
        console.log('new task');
    };

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <TasksContext.Provider value={{ tasks, addTask }}>
            <Form />
            <Board />
        </TasksContext.Provider>
    );
};

export default App;
