import React from 'react';
import Column from './Column';

import columns from './columnSettings';

const Board = function () {
    const tempStyles = {
        display: 'flex',
    };

    const renderColumns = columns.map((column) => (
        <Column key={column.name} id={column.id} name={column.name} limit={column.limit} />
    ));

    return (
        <div style={tempStyles} className="kanban">
            {renderColumns}
        </div>
    );
};
export default Board;
