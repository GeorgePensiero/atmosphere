import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
    window.signup = SessionUtil.signup;
    window.login = SessionUtil.login;
    window.logout = SessionUtil.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store}/>, root);
})