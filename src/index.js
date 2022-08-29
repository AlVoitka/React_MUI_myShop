import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import './index.css';
import App from './components/App';


const myTheme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#00ff00'
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
