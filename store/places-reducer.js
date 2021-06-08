import Place from '../models/place';
import {ADD_PLACE, SET_PLACE} from '../store/places-action';


const initialPlaces = {
    places: []
};

export default (state = initialPlaces, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const addPla = new Place(new Date().toString(),action.placeData.title,action.placeData.image);
            return {
                places: state.places.concat(addPla)
            };
        case SET_PLACE:

            return {
                //places: action.places.map(pl => new Place(pl.id.toString(), pl.title,pl.imageUri))
            };
        default:
            return state;
    }
};