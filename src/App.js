import React from 'react';
import { IoIosAperture } from 'react-icons/io';
import Input from './components/Input';
import Button from './components/Button';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="app__container">
                <form>
                    <div className="logo__container">
                        <IoIosAperture size={96} color="#2C3A47" />
                    </div>
                    <h1 className="form__header">
                        Let's get your account set up
                    </h1>
                    <Input label="Work Email" />
                    <Input label="Password" isSecure={true} />
                    <Button>Signup</Button>
                </form>
            </div>
        </div>
    );
}

export default App;
