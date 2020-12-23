import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });


    // axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`,)
    //     .then(({ data }) => {
    //         console.log(data)
    //         dispatch(setPizzas(data));
    //     });
    // console.log(category)
    console.log(sortBy)
    axios.get(`http://localhost:1337/products?type_of_product.name=pizzas&${category !== null ? `categories.name=${category}` : ''}&_sort=${sortBy.type}:${sortBy.order}`)
        .then(({ data }) => {
            dispatch(setPizzas(data));
        });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});