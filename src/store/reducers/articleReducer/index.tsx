import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postShareReducer from './postShareReducer';
import postReducer from './postReducer';
import userLikedPostsReducer from './postsLikedByUserReducer';


const articleReducer = combineReducers({
    sharePost: postShareReducer,
    allPosts: postsReducer,
    post: postReducer,
    userLikedPosts: userLikedPostsReducer
});

export default articleReducer;