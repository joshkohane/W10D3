import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { receiveTodo } from './actions/todo_actions';
import { receiveStep } from './actions/step_actions';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store
    window.receiveTodo = receiveTodo;
    window.receiveStep = receiveStep;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}>Todos App</Root>, root);
});