import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import axios from "axios";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let pizzasCat = [];
axios.get(`http://95.68.95.244:1337/categories?type_of_products.name=pizzas`)
    .then(({ data }) => {
        data.map(obj => pizzasCat.push(obj.name))
        // console.log(tmp)
    });

let drinksCat = [];
axios.get(`http://95.68.95.244:1337/categories?type_of_products.name=drinks`)
    .then(({ data }) => {
        data.map(obj => drinksCat.push(obj.name))
        // console.log(tmp)
    });

const initialState = {
    filters: {
        category: null,
        sortBy: {
            type: 'rating',
            order: 'desc',
        },
        pizzasCategories: pizzasCat,
        drinksCategories: drinksCat
    }
}

const store = createStore(rootReducer, initialState,composeEnhancer(applyMiddleware(thunk)));

store.subscribe(()=>{
    localStorage.setItem('redux-store', JSON.stringify(store.getState()))
})



export default store;

