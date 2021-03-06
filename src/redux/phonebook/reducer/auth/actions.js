import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const currentUserRequest = createAction('auth/currentUserRequest');
const currentUserSuccess = createAction('auth/currentUserSuccess');
const currentUserError = createAction('auth/currentUserError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const actions = {
    registerRequest,
    registerSuccess,
    registerError,
    currentUserRequest,
    currentUserSuccess,
    currentUserError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError
};

export default actions;

