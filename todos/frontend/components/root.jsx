import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import TodoRedux from '../todo_redux';

const Root = (props) => {
    return (
        <Provider store={props.store}><App /></Provider>
    )
}

export default Root;