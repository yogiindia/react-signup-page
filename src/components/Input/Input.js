import React, { useState, useRef } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import PasswordChecker from 'pw-checker';

import TooltipContent from './TooltipContent';

import './style.css';

function Input({ isSecure = false, ...props }) {
    const [isVisible, setVisible] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false);
    const [haveNumber, setHaveNumber] = useState(false);
    const [haveUpperCase, sethaveUpperCase] = useState(false);
    const [haveLowerCase, sethaveLowerCase] = useState(false);
    const [haveMinLength, sethaveMinLength] = useState(false);
    const [strength, setStrength] = useState(0);

    const inputEl = useRef(null);

    const type = isSecure ? 'password' : 'text';

    const checkMinLength = string => {
        return string.length >= 8;
    };

    const checkLowerCase = string => {
        var regex = /^(?=.*[a-z]).+$/;

        if (regex.test(string)) {
            return true;
        }

        return false;
    };

    const checkUpperCase = string => {
        let regex = /^(?=.*[A-Z]).+$/;

        if (regex.test(string)) {
            return true;
        }

        return false;
    };

    const checkNumber = string => {
        let regex = /\d/;

        if (regex.test(string)) {
            return true;
        }

        return false;
    };

    const toggler = () => {
        setVisible(!isVisible);
        inputEl.current.type =
            inputEl.current.type === 'text' ? 'password' : 'text';
    };

    const onFocusHandler = e => {
        if (e.target.type === 'password') {
            setShowTooltip(true);
        }
    };

    const onBlurHandler = e => {
        setShowTooltip(false);
    };

    const onChangeHandler = async e => {
        const value = e.target.value;

        if (e.target.type === 'password') {
            if (!value) {
                sethaveUpperCase(false);
                sethaveMinLength(false);
                setHaveNumber(false);
                sethaveLowerCase(false);
                setStrength(0);
                return;
            }

            const strength = await PasswordChecker.check(value);
            setStrength((strength + 1) * 20);

            if (checkMinLength(value)) {
                sethaveMinLength(true);
            } else {
                sethaveMinLength(false);
            }

            if (checkNumber(value)) {
                setHaveNumber(true);
            } else {
                setHaveNumber(false);
            }

            if (checkLowerCase(value)) {
                sethaveLowerCase(true);
            } else {
                sethaveLowerCase(false);
            }

            if (checkUpperCase(value)) {
                sethaveUpperCase(true);
            } else {
                sethaveUpperCase(false);
            }
        }
    };

    return (
        <div className="input__group">
            <label className="input__label">{props.label}</label>

            <div className="input__container">
                <Tooltip
                    html={
                        <TooltipContent
                            haveLowerCase={haveLowerCase}
                            haveMinLength={haveMinLength}
                            haveNumber={haveNumber}
                            haveUpperCase={haveUpperCase}
                            strength={strength}
                        />
                    }
                    open={showTooltip}
                    trigger="manual"
                    position="left"
                    disabled={!isSecure}
                    arrow={true}
                    title="Your Password must contain:"
                    distance="20"
                >
                    <input
                        ref={inputEl}
                        type={type}
                        className="input__element"
                        onChange={onChangeHandler}
                        onFocus={onFocusHandler}
                        onBlur={onBlurHandler}
                    />
                </Tooltip>
                {isSecure && (
                    <div className="toggler" onClick={toggler}>
                        {isVisible && (
                            <IoMdEye
                                size={44}
                                style={{ verticalAlign: 'middle' }}
                            />
                        )}
                        {!isVisible && (
                            <IoMdEyeOff
                                size={44}
                                style={{ verticalAlign: 'middle' }}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Input;
