import React from 'react';

import Input from './components/Input';

import './App.css';

function App() {
    return (
        <div className="App">
            <Input label="Work Email" />
            <Input label="Password" isSecure={true} />
        </div>
    );
}

export default App;
