import React from 'react';
import CheckMark from './CheckMark';
import CloseMark from './CloseMark';

function ValidateTooltip({ isValid = false }) {
    if (isValid) {
        return <CheckMark />;
    } else {
        return <CloseMark />;
    }
}

export default ValidateTooltip;
