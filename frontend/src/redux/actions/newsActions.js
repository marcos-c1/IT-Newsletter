import * as actionTypes from '../constants/newsConstants';
import axios from 'axios';
require("dotenv").config();

// CRUD requisitando ao servidor
export const getNews = () => async(dispatch, getState) => {

    try {
        const { data } = await axios.get('http://localhost:5000/api/news');
        dispatch({
            type: actionTypes.FETCH_ALL_NEWS,
            payload: data
        })

    } catch (error) {
        console.log(error.message)
    }
}

export const postNews = (news) => async(dispatch, getState) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/news', news);
        dispatch({ type: actionTypes.POST_NEWS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}