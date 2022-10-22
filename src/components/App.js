import React, { useState } from 'react';
import Board from './Board';
import Form from './Form';

// eslint-disable-next-line import/no-named-as-default
import TaskListContext from '../context';

const App = function () {
    const initTasks = [
        { taskName: 'Task', author: 'Author1', description: 'Desc1', idColumn: 1 },
        { taskName: 'Task2', author: 'Author2', description: 'Desc2', idColumn: 1 },
        { taskName: 'Task3', author: 'Author3', description: 'Desc3', idColumn: 1 },
    ];
    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useState(initTasks);

    // eslint-disable-next-line no-unused-vars
    const addTask = (task) => {
        setTasks([...task]);
        // eslint-disable-next-line no-console
        console.log(task);
    };
    const deleteTask = (id) => {
        // eslint-disable-next-line no-console
        console.log(id);
        setTasks(tasks.filter((t) => t.id !== id));
    };
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <TaskListContext.Provider value={{ tasks, addTask, deleteTask }}>
            <Form />
            <Board />
        </TaskListContext.Provider>
    );
};

export default App;
