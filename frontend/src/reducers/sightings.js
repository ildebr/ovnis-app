import {
    GET_SIGHTING_ITEMS_SUCCESS,
    GET_SIGHTING_ITEMS_FAIL,
    ADD_SIGHTING_ITEM_SUCCESS,
    ADD_SIGHTING_ITEM_FAIL,
    REMOVE_SIGHTING_ITEM_SUCCESS,
    REMOVE_SIGHTING_ITEM_FAIL,
    CLEAR_SIGHTING,
    UPDATE_SIGHTINGS_ITEMS_SUCCESS,
    LOAD_SIGHTING_ITEMS_SUCCESS
} from '../actions/types';

const initialState = {
    items: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_SIGHTING_ITEMS_SUCCESS:
            console.log(payload)
            console.log(state)
            // console.log(payload.payload)
            console.log({
                ...state,
                [1]:{
                    ...payload,
                    docs: ['a','b','c']
                }
            })
            return {
                ...state,
                [1]:{
                    ...payload
                },
            }
        case GET_SIGHTING_ITEMS_FAIL:
            return {
                ...state,
            }
        case LOAD_SIGHTING_ITEMS_SUCCESS:
            const page = payload.page
            const newState = {...state}
            // if(newState[page]){
            //     new
            // }
            newState[page] = payload
            return newState
        case ADD_SIGHTING_ITEM_SUCCESS:
            return {
                ...state,
                items: payload.sighting
            }
        case ADD_SIGHTING_ITEM_FAIL:
            return {
                ...state,
            }
        case REMOVE_SIGHTING_ITEM_SUCCESS:
            return {
                ...state,
                items: payload.sighting
            }
        case REMOVE_SIGHTING_ITEM_FAIL:
            return {
                ...state
            }
        case CLEAR_SIGHTING:
            return {
                ...state,
                items: [],
                total_items: 0
            }
        default:
            return state
    }
};
