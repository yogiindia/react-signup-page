import React from 'react';
import Progress from 'react-progressbar';
import ValidateTooltip from './ValidateTooltip';
import './style.css';

function TooltipContent({
    haveNumber = false,
    haveUpperCase = false,
    haveMinLength = false,
    haveLowerCase = false
}) {
    return (
        <div className="container">
            <header className="tooltip__header">
                Your password must contain:
            </header>
            <ul className="tooltip__list">
                <li>
                    <ValidateTooltip isValid={haveMinLength} />8 or more
                    characters
                </li>
                <li>
                    <ValidateTooltip isValid={haveNumber} />a number
                </li>
                <li>
                    <ValidateTooltip isValid={haveUpperCase} />
                    an upercase letter
                </li>
                <li>
                    <ValidateTooltip isValid={haveLowerCase} />a lowercase
                    letter
                </li>
            </ul>
            <div className="strength__meter">
                <Progress completed={100} />
                <span className="strength__string">Excellent</span>
            </div>
        </div>
    );
}

export default TooltipContent;
