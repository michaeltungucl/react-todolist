// external imports
import React from 'react';

// internal imports
import Button from './Button';

const Header = ({ onAdd, name, showAdd }) => {

    return (
        <header className="header" >
            <h1>{name}</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />
        </header>
    )
};

export default Header;