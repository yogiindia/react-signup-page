import React from './node_modules/react';
import './style.css';

function Header(props) {
    return (
        <div>
            <h1 className="form__header">{props.children}</h1>
        </div>
    );
}

export default Header;
