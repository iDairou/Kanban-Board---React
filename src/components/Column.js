import React from 'react';
import PropTypes from 'prop-types';

const Column = function (props) {
    const { id, name, limit } = props;
    return (
        <div key={id} className="kanban__column">
            <header>
                <h3>{name}</h3>
                <p>{limit}</p>
            </header>
            <ul>TASKS TO RENDER</ul>
        </div>
    );
};
Column.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    limit: PropTypes.number,
};
Column.defaultProps = {
    name: 'default',
    id: 0,
    limit: 0,
};

export default Column;
