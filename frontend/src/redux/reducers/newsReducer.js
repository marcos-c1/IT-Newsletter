import * as actionTypes from '../constants/newsConstants';

export const newsReducer = (news = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_NEWS:
            return action.payload
        case actionTypes.POST_NEWS:
            return [...news, action.payload]
        default:
            return news;
    }
}

export default newsReducer;