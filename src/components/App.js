import React from 'react';
import useLocalStorage from '../hooks';
import Board from './Board';
import Form from './Form';
import columns from './columnSettings';

// eslint-disable-next-line import/no-named-as-default
import TaskListContext from '../context';

const App = function () {
    // eslint-disable-next-line no-undef
    const [tasks, setTasks] = useLocalStorage('tasks', []);

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
        setTasks(currTasks);
    };

    const moveLeft = (id) => {
        const currTasks = tasks.map((t) => {
            if (id === t.id) {
                if (t.idColumn <= 1) {
                    return t;
                }
                const idPrevColumn = t.idColumn - 1;
                if (getColumnLimit(idPrevColumn) > getTaskNumberInColumn(idPrevColumn)) {
                    return { ...t, idColumn: idPrevColumn };
                }
            }
            return t;
        });
        setTasks(currTasks);
    };
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <TaskListContext.Provider value={{ tasks, addTask, deleteTask, moveRight, moveLeft, getTaskNumberInColumn }}>
            <div className="kanban">
                <h1 className="kanban__header">Kanban Board</h1>
                <Form />
                <Board />
            </div>
        </TaskListContext.Provider>
    );
};

export default App;
