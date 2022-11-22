import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './bootstrap.min.css';
import './index.css';
import App from './App';

const root = document.getElementById('root');
render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);
