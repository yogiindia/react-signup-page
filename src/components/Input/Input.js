import React, { useState, useRef } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import './style.css';

function Input({ isSecure = false, ...props }) {
    const [isVisible, setVisible] = useState(true);

    const inputEl = useRef(null);

    const type = isSecure ? 'password' : 'text';

    const toggler = () => {
        setVisible(!isVisible);
        inputEl.current.type =
            inputEl.current.type === 'text' ? 'password' : 'text';
    };

    return (
        <div className="input__group">
            <label className="input__label">{props.label}</label>
            <div className="input__container">
                <input ref={inputEl} type={type} className="input__element" />
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
