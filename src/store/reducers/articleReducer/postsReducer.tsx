import { IPost } from '../../../components/article/Post';
import {
    GET_POSTS_REQUEST,
    GET_POSTS_FAILURE,
    GET_POSTS_SUCCESS,
    UPDATE_POST_WITH_LIKE
} from '../../../constants/actionTypes';


interface IState {
    posts: IPost[],
    isLoading: boolean,
    postsErr: string
}

const initialState: IState = {
    posts: [],
    isLoading: false, 
    postsErr: ""
};

const postsReducer =  (state = initialState, action: any) => {
    switch(action.type) {

        case GET_POSTS_REQUEST:
            return { ...state, isLoading: true }

        case GET_POSTS_SUCCESS:
            return { ...state, isLoading: false, posts: action.payload }
        
        case GET_POSTS_FAILURE: 
            return { ...state, isLoading: false, postsErr: action.payload }

        case UPDATE_POST_WITH_LIKE:
            const updatedPost = action.payload;
            const updated = state.posts.map((post) => {
                return post._id === updatedPost._id 
                ? { ...post, likes: updatedPost.likes }
                : post;   
            }); 
            return { ...state, posts: updated }
        
        default: 
            return state;
    }
}

export default postsReducer;