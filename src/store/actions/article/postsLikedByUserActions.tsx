import axios from 'axios';
import { POSTS_LIKED_SUCCESS } from '../../../constants/actionTypes';
import { IPost } from '../../../components/article/Post';

const postsLikedSuccess = (posts: IPost[]) => {
    return {
        type: POSTS_LIKED_SUCCESS,
        payload: posts
    }
}

export const getUsersLikedPosts = () => {
    return (dispatch: any) => {
        const request = axios.get(`http://localhost:3000/posts/user/liked`);

        request.then(
            res => {
                if (res.status === 200) {
                    const { data: { posts } } = res;
                    return dispatch(postsLikedSuccess(posts))
                }
            },
            err => {
                return console.log('LIKEPOSTERR', err);
            }
        );
    }
}