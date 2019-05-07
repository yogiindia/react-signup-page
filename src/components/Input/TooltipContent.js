import React from 'react';
import Progress from 'react-progressbar';
import ValidateTooltip from './ValidateTooltip';
import './style.css';

function TooltipContent({
    haveNumber = false,
    haveUpperCase = false,
    haveMinLength = false,
    haveLowerCase = false,
    strength = 0
}) {
    const strengthString = {
        0: '',
        20: 'weak',
        40: 'average',
        60: 'fair',
        80: 'good',
        100: 'excellent'
    };

    const strengthColor = {
        0: '',
        20: '#F44336',
        40: '#d35400',
        60: '#8BC34A',
        80: '#27ae60',
        100: '#009432'
    };

    console.log(strength);

    const strengthClass = `strength__string ${strengthString[strength]}`;

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
                <div className="progress__container">
                    <Progress
                        completed={strength}
                        color={strengthColor[strength]}
                    />
                </div>

                <span className={strengthClass}>
                    {strengthString[strength]}
                </span>
            </div>
        </div>
    );
}

export default TooltipContent;
