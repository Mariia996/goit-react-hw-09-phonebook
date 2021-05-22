import axios from 'axios';

import actions from './actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

export const registerUser = (body) => async dispatch => {
    dispatch(actions.registerRequest());

    try {
        const { data } = await axios.post('/users/signup', body);

        token.set(data.token);
        dispatch(actions.registerSuccess(data));
    }
    catch (error) {
        dispatch(actions.registerError(error));
    }
};

export const loginUser = (body) => async dispatch => {
    dispatch(actions.loginRequest());

    try {
        const { data } = await axios.post('/users/login', body);

        token.set(data.token);
        dispatch(actions.loginSuccess(data));
    } catch (error) {
        dispatch(actions.loginError(error));
    }
};

export const getCurrentUser = () => async (dispatch, getState) => {
    const { auth: { token: pesistedToken } } = getState();

    if (!pesistedToken) {
        return;
    }

    token.set(pesistedToken);

    dispatch(actions.currentUserRequest());

    try {
        const { data } = await axios.get('/users/current');
        dispatch(actions.currentUserSuccess(data));
    } catch (error) {
        dispatch(actions.currentUserError(error));
    }
};

export const logoutUser = () => async dispatch => {
    dispatch(actions.logoutRequest());

    try {
        await axios.post('/users/logout');

        token.unset();
        dispatch(actions.logoutSuccess());
    }
    catch (error) {
        dispatch(actions.logoutError(error));
    }
};


