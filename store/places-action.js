export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACE = "SET_PLACE";
import { insertPlace, fetchData } from '../helper/db';


export const addPlace = (title, img) => {
    return async dispatch => {
        const dbRs = await insertPlace(title, 'img', 'duong 104', 15.6, 12.3);
        console.log('insert action ', dbRs);
        dispatch({
            type: ADD_PLACE, placeData: { title: title, image: img }
        });
    }
};

export const setPlace = () => {
    return async dispatch => {
        try {
            const result = fetchData();
            dispatch({
                type: SET_PLACE, places: result.rows._array
            });
        } catch (error) {
            throw error;
        }
    };
};