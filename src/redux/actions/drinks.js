import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_DRINKS_LOADED',
    payload,
});

export const fetchDrinks = (category, sortBy) => (dispatch) => {
    dispatch({
        type: 'SET_DRINKS_LOADED',
        payload: false,
    });


    // axios.get(`/drinks?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`,)
    //     .then(({ data }) => {
    //         dispatch(setDrinks(data));
    //     });

    axios.get(`http://95.68.95.244:1337/products?type_of_product.name=drinks&${category !== null ? `categories.name=${category}` : ''}&_sort=${sortBy.type}:${sortBy.order}`)
        .then(({ data }) => {
            dispatch(setDrinks(data));
        });
}

export const setDrinks = (items) => ({
    type: 'SET_DRINKS',
    payload: items
});