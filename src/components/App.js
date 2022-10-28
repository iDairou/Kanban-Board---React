import React, { useState } from 'react';
import Board from './Board';
import Form from './Form';
import columns from './columnSettings';


// eslint-disable-next-line import/no-named-as-default
import TaskListContext from '../context';

const App = function () {
    // eslint-disable-next-line no-undef
    const initTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(initTasks);

    // Button disable logic

    // const [isDisabled, setDisabled] = useState(false);
    // // eslint-disable-next-line no-unused-vars
    // const getTasksInFirstColumn = () => {
    //     const tasksFirstCol = tasks.filter((t) => t.idColumn === 1);
    //     return tasksFirstCol;
    // };
    // // eslint-disable-next-line no-unused-vars
    // const getTasksInLastColumn = () => {
    //     const tasksLastCol = tasks.filter((t) => t.idColumn === columns.length);
    //     return tasksLastCol;
    // };

    const getColumnLimit = (idColumn) => {
        const column = columns.find((c) => c.id === idColumn);
        return column.limit;
    };
    const getTaskNumberInColumn = (idColumn) => {
        const columnTasks = tasks.filter((t) => t.idColumn === idColumn);
        return columnTasks.length;
    };
    const addTask = (task) => {
        if (getColumnLimit(1) > getTaskNumberInColumn(1)) {
            setTasks([...tasks, task]);
            // eslint-disable-next-line no-undef
            localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
        } else {
            // eslint-disable-next-line no-alert, no-undef
            alert('Limit of tasks exceed');
        }
    };
    // eslint-disable-next-line no-unused-vars

    const deleteTask = (id) => {
        const currTasks = tasks.filter((t) => t.id !== id);
        // eslint-disable-next-line no-restricted-globals, no-alert, no-undef
        if (confirm('Are you sure you want to delete this task?')) {
            setTasks(currTasks);
            // eslint-disable-next-line no-undef
            localStorage.setItem('tasks', JSON.stringify(currTasks));
        }
    };

    const moveRight = (id) => {
        const currTasks = tasks.map((t) => {
            if (id === t.id) {
                if (t.idColumn >= columns.length) {
                    return t;
                }
                const idColumnNext = t.idColumn + 1;
                if (getColumnLimit(idColumnNext) > getTaskNumberInColumn(idColumnNext)) {
                    return { ...t, idColumn: idColumnNext };
                }
            }
            return t;
        });
        // eslint-disable-next-line no-undef
        localStorage.setItem('tasks', JSON.stringify(currTasks));
        setTasks(currTasks);
    };

    const moveLeft = (id) => {
        const currTasks = tasks.map((t) => {
            if (id === t.id) {
                if (t.idColumn <= 1) {
                    return t;
                }
                return { ...t, idColumn: t.idColumn - 1 };
            }
            return t;
        });
        setTasks(currTasks);
        // eslint-disable-next-line no-undef
        localStorage.setItem('tasks', JSON.stringify(currTasks));
    };
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <TaskListContext.Provider value={{ tasks, addTask, deleteTask, moveRight, moveLeft, getTaskNumberInColumn }}>
            {/* <ButtonDisabledContext.Provider value={(isDisabled, setDisabled)}> */}
            <div className="kanban">
                <h1 className="kanban__header">Kanban Board</h1>
                <Form />
                <Board />
            </div>
            {/* </ButtonDisabledContext.Provider> */}
        </TaskListContext.Provider>
    );
};;

export default App;
