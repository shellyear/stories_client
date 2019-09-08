import {
    RECIEVE_PAGE_DATA
} from '../../constants/actionTypes';

export const recievePageData = (meta: string, currentPage: number, totalAmount?: number, perPage = 5) => {
    return {
        type: RECIEVE_PAGE_DATA,
        meta,
        payload: {
             currentPage,
             totalAmount,
             perPage
        }
    }
}

