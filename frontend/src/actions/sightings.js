import axios from 'axios';
import {
    GET_SIGHTING_ITEMS_SUCCESS
,GET_SIGHTING_ITEMS_FAIL 
, ADD_SIGHTING_ITEM_SUCCESS
,ADD_SIGHTING_ITEM_FAIL
,REMOVE_SIGHTING_ITEM_SUCCESS
,REMOVE_SIGHTING_ITEM_FAIL
,CLEAR_SIGHTING,
LOAD_SIGHTING_ITEMS_SUCCESS,
LOAD_SIGHTING_ITEMS_FAIL
} from './types';

export const get_sightings = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sightings/?page=${page}`, config);

            if (res.status === 200) {
                console.log(res.data)
                dispatch({
                    type: GET_SIGHTING_ITEMS_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_SIGHTING_ITEMS_FAIL
                });
            }
    } catch (err) {
        dispatch({
            type: GET_SIGHTING_ITEMS_FAIL
        });
    }
};


export const get_more_sightings = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sightings/?page=${page}`, config);

            if (res.status === 200) {
                console.log(res.data)
                dispatch({
                    type: LOAD_SIGHTING_ITEMS_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: LOAD_SIGHTING_ITEMS_FAIL
                });
            }
    } catch (err) {
        dispatch({
            type: LOAD_SIGHTING_ITEMS_FAIL
        });
    }
}


// export const get_products_by_arrival = () => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/get-products?sortBy=date_created&order=desc&limit=3`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_PRODUCTS_BY_ARRIVAL_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_PRODUCTS_BY_ARRIVAL_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_PRODUCTS_BY_ARRIVAL_FAIL
//         });
//     }
// };

// export const get_products_by_sold = () => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/get-products?sortBy=sold&order=desc&limit=3`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_PRODUCTS_BY_SOLD_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_PRODUCTS_BY_SOLD_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_PRODUCTS_BY_SOLD_FAIL
//         });
//     }
// };

// export const get_product = (productId) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/product/${productId}`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_PRODUCT_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_PRODUCT_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_PRODUCT_FAIL
//         });
//     }
// };

// export const get_related_products = (productId) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/related/${productId}`, config);

//         if (res.status === 200 && !res.data.error) {
//             dispatch({
//                 type: RELATED_PRODUCTS_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: RELATED_PRODUCTS_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: RELATED_PRODUCTS_FAIL
//         });
//     }
// };

// export const get_filtered_products = (category_id, price_range, sort_by, order) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({
//         category_id,
//         price_range,
//         sort_by,
//         order
//     });

//     try {
//         const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/products/by/search`, body, config);

//         if (res.status === 200 && !res.data.error) {
//             dispatch({
//                 type: FILTER_PRODUCTS_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: FILTER_PRODUCTS_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: FILTER_PRODUCTS_FAIL
//         });
//     }
// };

// export const get_search_products = (search, category_id) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({
//         search,
//         category_id
//     });

//     try {
//         const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/products/search`, body, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: SEARCH_PRODUCTS_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: SEARCH_PRODUCTS_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: SEARCH_PRODUCTS_FAIL
//         });
//     }
// };
