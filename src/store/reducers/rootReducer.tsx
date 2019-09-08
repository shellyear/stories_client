import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articleReducer from './articleReducer/index';
import paginatorReducer from './paginatorReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    article: articleReducer,
    paginator: paginatorReducer 
})

export default rootReducer;