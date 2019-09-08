import {
    RECIEVE_PAGE_DATA
} from '../../constants/actionTypes';

const paginatorState = {
    mainPosts: {
        currentPage: 1,
        totalAmount: 0,
        perPage: 5
    },
    userPosts: {
        currentPage: 1,
        totalAmount: 0,
        perPage: 5
    }
}

const paginatorReducer = (state = paginatorState, action: any) => {
    switch (action.type) {
        case RECIEVE_PAGE_DATA:
            return {
                ...state,
                [action.meta]: action.payload
            }
    
        default:
            return state;
    }
}

export default paginatorReducer;