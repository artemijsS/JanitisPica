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


    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`,)
        .then(({ data }) => {
            console.log(data)
            dispatch(setPizzas(data));
        });
    // console.log(category)
    // axios.get(`http://localhost:1337/products?type_of_product.name=pizzas&categories.name=${category}`,)
    //     .then(({ data }) => {
    //         console.log(data);
    //         dispatch(setPizzas(data));
    //         // data.map(obj => console.log(obj.products))
    //     });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});