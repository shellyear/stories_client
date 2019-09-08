import { 
    SHARE_POST_ERROR,
    CLEAR_SHARE_POST_ERROR,
    SHARE_POST_MESSAGE,
    CLEAR_SHARE_POST_MESSAGE
} from '../../../constants/actionTypes';

const initialState = {
    err: '',
    msg: ''
};

const sharePostReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHARE_POST_ERROR:
            return { ...state, err: action.payload }

        case CLEAR_SHARE_POST_ERROR: 
            return { ...state, err: '' }
        
        case SHARE_POST_MESSAGE: 
            return { ...state, msg: action.payload }

        case CLEAR_SHARE_POST_MESSAGE: 
            return { ...state, msg: '' }
    
        default:
            return state;
    }
}

export default sharePostReducer;