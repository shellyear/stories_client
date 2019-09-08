import {
    GET_POST_SUCCESS,
    GET_POST_FAILURE
} from '../../../constants/actionTypes';

interface IState {
    post: {},
    isLoading: boolean,
    err: string
}

const initialState: IState = {
    post: {},
    isLoading: false, 
    err: ""
};

const postsReducer =  (state = initialState, action: any) => {
    switch(action.type) {

        case GET_POST_SUCCESS: 
            return { ...state, post: action.payload }
        
        case GET_POST_FAILURE: 
            return { ...state, err: action.payload }
        
        default: 
            return state;

    }
}

export default postsReducer;