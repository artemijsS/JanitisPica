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
            // console.log(data)
            dispatch(setPizzas(data));
        });
    // axios.get(`http://localhost:1337/categories?name=Bezalkohola`,)
    //     .then(({ data }) => {
    //         // console.log(data[]);
    //         data.map(obj => console.log(obj.products))
    //     });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});