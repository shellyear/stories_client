import { POSTS_LIKED_SUCCESS } from "../../../constants/actionTypes";

const initialState = {
    posts: [],
    err: ''
}

const postsLikedByUserReducer =  (state = initialState, action: any) => {
    switch(action.type) {
        
        case POSTS_LIKED_SUCCESS: 
            return {
                ...state,
                posts: action.payload
            }

        default: 
            return state;
    }
}

export default postsLikedByUserReducer;