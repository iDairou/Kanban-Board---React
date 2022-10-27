import React from 'react';
import Column from './Column';

import columns from './columnSettings';

const Board = function () {
    const renderColumns = columns.map((column) => (
        <Column className={column.class} key={column.name} id={column.id} name={column.name} limit={column.limit} />
    ));

    return <div className="kanban__board">{renderColumns}</div>;
};
export default Board;
