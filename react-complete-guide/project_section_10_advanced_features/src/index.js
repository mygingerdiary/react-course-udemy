import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {AuthContextPrivider} from "./store/auth-context";

ReactDOM.render(
    <AuthContextPrivider>
        <App />
    </AuthContextPrivider>,
    document.getElementById('root'));
