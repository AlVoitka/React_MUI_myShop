import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import './index.css';
import App from './components/App';


const myTheme = createTheme({
    palette: {
        primary: {
            main: '#df13ff'
        },
        secondary: {
            main: '#00ff00'
        },
        warning: {
            main: '#ff0042'
        },
        success: {
            main: '#9d29ff'
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={myTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
