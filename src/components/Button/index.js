import React from 'react';

import './style.css';

function Button(props) {
    return (
        <div>
            <button>{props.children}</button>
        </div>
    );
}

export default Button;
