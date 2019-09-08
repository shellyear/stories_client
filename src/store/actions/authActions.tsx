import axios from 'axios'; 
import { setAuthorizationToken } from '../../utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';
import { 
    POST_LOGIN_SUCCESS,
    POST_LOGIN_REQUEST,
    POST_LOGIN_FAILURE,
    CLEAR_LOGIN_ERROR,
    POST_LOG_OUT
} from '../../constants/actionTypes';



export const postLoginRequest = () => {
    return {
        type: POST_LOGIN_REQUEST
    }
};

export const postLoginSuccess = (token: string) => {
    localStorage.setItem('user', token);
    const user = jwt_decode(token);
    return {
        type: POST_LOGIN_SUCCESS,
        payload: user
    }
};

export const postLoginFailure = (error: string | object) => {
    return {
        type: POST_LOGIN_FAILURE,
        payload: error
    }
};

export const clearLoginError = () => {
    return {
        type: CLEAR_LOGIN_ERROR
    }
};

export const postLogin = (credentials: any) => {
    return (dispatch: any) => {
        dispatch(postLoginRequest());

        const request = axios.post('http://localhost:3000/login', credentials);

        request.then(
            (res) => {
                const { data } = res;

                if(data.logged) {
                    setAuthorizationToken(data.token);
                    return dispatch(postLoginSuccess(data.token));
                }
                return dispatch(postLoginFailure(data.error));  
            }
        )
    }
};

export const postLogOut = () => {
    return (dispatch: any) => {
        localStorage.removeItem('user');
        setAuthorizationToken(null);
        dispatch({ type: POST_LOG_OUT });
    }
};

export const postSignup = (newUser: any) => {
    return (dispatch: any) => {
        dispatch(postLoginRequest());
        const request = axios.post('http://localhost:3000/signup', newUser)

        request.then(
            (res) => {
                const { data } = res;

                if(!data.signup) {
                    const { error } = data;
                    console.log(error);
                    return dispatch(postLoginFailure(error));
                } /// POPRAVIT SO STATUS KODOM KAK V USER ACtiONS
                            
                const { userInfo: { token } } = data;
                setAuthorizationToken(token);

                return dispatch(postLoginSuccess(token));
            },
            (err: Error) => {
                console.log(err);
            }
        );
    }
};
