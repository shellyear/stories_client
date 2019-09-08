import {
    POST_LOGIN_REQUEST,
    POST_LOGIN_FAILURE,
    POST_LOGIN_SUCCESS,
    CLEAR_LOGIN_ERROR,
    POST_LOG_OUT
} from '../../constants/actionTypes';
import { string } from 'prop-types';


const initialState = {
    logged: false,
    user: {
        _id: string,
        email: string,
        username: string
    },
    isLoading: false,
    loginErr: ''
};


const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case POST_LOGIN_REQUEST: 
            return { ...state, isLoading: true }
        
        case POST_LOGIN_SUCCESS: 
            return {
                ...state,
                logged: true,
                user: action.payload,
                isLoading: false
            }
        
        case POST_LOGIN_FAILURE: 
            return {
                ...state,
                logged: false,
                isLoading: false,
                loginErr: action.payload
            }
        
        case CLEAR_LOGIN_ERROR: {
            return { ...state, loginErr: '' }
        }
        
        case POST_LOG_OUT: {
            return { ...state, user: {}, logged: false }
        }
        
        default: return state;
    }
}

export default authReducer;

