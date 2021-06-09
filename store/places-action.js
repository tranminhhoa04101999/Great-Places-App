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
            const result = await fetchData();
            const data = [];
            console.log('result row ', result.rows.item(0));
            for (let i = 0; i < result.rows.length; i++) {
                let item = result.rows.item(i);
                data.push(item);
            }

            dispatch({
                type: SET_PLACE, places: data
            });
        } catch (error) {
            throw error;
        }
    };
};