import axios from 'axios';
import { IPost } from '../../../components/article/Post';
import {
    GET_POST_SUCCESS,
    GET_POST_FAILURE
} from '../../../constants/actionTypes';


export const getPostSuccess = (post: IPost) => ({
  type: GET_POST_SUCCESS,
  payload: post
});

export const getPostFailure = (err: Error) => ({
  type: GET_POST_FAILURE
});   

export const getPostById = (id: string) => {
  return (dispatch: any) => {
    const request = axios.get(`http://localhost:3000/post/${id}`);

    return request.then(
        res => {
            if (res.status === 200) {
                const { data: { post } } = res;
                return dispatch(getPostSuccess(post))
            }
        },
        (err) => {
            console.log(err);
            const { response: { data: { error } } } = err;
            return dispatch(getPostFailure(error));
        }
    );
  };
};





