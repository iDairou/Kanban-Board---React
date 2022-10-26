import React, { useState } from 'react';
import Board from './Board';
import Form from './Form';
import columns from './columnSettings';

// eslint-disable-next-line import/no-named-as-default
import TaskListContext from '../context';

const App = function () {
    const initTasks = [
        { taskName: 'Task', author: 'Author1', description: 'Desc1', idColumn: 1 },
        { taskName: 'Task2', author: 'Author2', description: 'Desc2', idColumn: 1 },
        { taskName: 'Task3', author: 'Author3', description: 'Desc3', idColumn: 3 },
    ];
    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useState(initTasks);
    // eslint-disable-next-line no-unused-vars
    const addTask = (task) => {
        setTasks([...task]);
    };

    const deleteTask = (taskName) => {
        setTasks(tasks.filter((t) => t.taskName !== taskName));
    };
    const moveRight = (name) => {
        const currTasks = tasks.map((t) => {
            if (name === t.taskName) {
                if (t.idColumn >= columns.length) {
                    return t;
                }
                return { ...t, idColumn: t.idColumn + 1 };
            }
            return t;
        });
        setTasks(currTasks);
    };

    const moveLeft = (name) => {
        const currTasks = tasks.map((t) => {
            if (name === t.taskName) {
                if (t.idColumn <= 1) {
                    return t;
                }
                return { ...t, idColumn: t.idColumn - 1 };
            }
            return t;
        });
        setTasks(currTasks);
    };
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <TaskListContext.Provider value={{ tasks, addTask, deleteTask, moveRight, moveLeft }}>
            <Form />
            <Board />
        </TaskListContext.Provider>
    );
};;;

export default App;
