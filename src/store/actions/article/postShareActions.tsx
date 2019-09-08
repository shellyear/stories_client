import axios from 'axios';
import { 
    SHARE_POST_ERROR, 
    SHARE_POST_MESSAGE,
    CLEAR_SHARE_POST_ERROR,
    CLEAR_SHARE_POST_MESSAGE
} from '../../../constants/actionTypes';

export const sharePostError = (msg: string) => {
    return {
        type: SHARE_POST_ERROR,
        payload: msg
    }
};

export const clearSharePostError = () => {
    return {
        type: CLEAR_SHARE_POST_ERROR
    }
}

export const sharePostMessage = (msg: string) => {
    return {
        type: SHARE_POST_MESSAGE,
        payload: msg
    }
}

export const clearSharePostMessage = () => {
    return {
        type: CLEAR_SHARE_POST_MESSAGE
    }
}

export const sharePost = (story: string) => {
    return (dispatch: any) => {       
        const request = axios.post('http://localhost:3000/posts/create', story);

        request.then(
            (res) => {
                dispatch(clearSharePostError());

                if (res.status === 201) {
                    const { data: { message }} = res;
                    return dispatch(sharePostMessage(message))
                }
            },
            (err) => {
                const { response: { data: { error } } } = err;

                dispatch(clearSharePostMessage());
                return dispatch(sharePostError(error));
            }
        );
    };
};