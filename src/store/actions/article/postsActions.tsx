import axios from 'axios';
import { IPost } from '../../../components/article/Post';
import { recievePageData } from '../paginatorActions';
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    UPDATE_POST_WITH_LIKE
} from '../../../constants/actionTypes';


export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST
});

export const getPostsSuccess = (posts: []) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})

export const getPostsFailure = (err: Error) => ({
  type: GET_POSTS_FAILURE,
  payload: err,
})

export const getPosts = (perPage = 5, page = 1) => {
  return (dispatch: any) => {
    dispatch(getPostsRequest());
    const request = axios.get(`http://localhost:3000/posts/all?perPage=${perPage}&page=${page}`);

    return request.then(
      res => { 
        if (res.status === 200) {
          const { data: { posts, totalAmount } } = res;
          dispatch(recievePageData('mainPosts', page, totalAmount, perPage));
          return dispatch(getPostsSuccess(posts))
        }
      },
      (err) => {
        const { error } = err.response;
        dispatch(getPostsFailure(error));
      }
    );
  };
};

export const updatePost = (post: IPost) => ({
  type: UPDATE_POST_WITH_LIKE,
  payload: post,
})


export const likePostAct = (type: string, id: string) => {
  return (dispatch: any) => {
    const request = axios.put(`http://localhost:3000/post/like/${id}?type=${type}`);

    request.then(
        res => {
            if (res.status === 200) {
                const { data: { post } } = res;
                return dispatch(updatePost(post)); // dispatches to allPosts.postsReducer
            }
        },
        err => {
            console.log('LIKEPOSTERR', err);
        }
    );
  };
};






