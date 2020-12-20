import { combineReducers } from "redux";
import filters from "./filters";
import pizzas from "./pizzas";
import drinks from "./drinks";
import cart from "./cart";

const rootReducer = combineReducers({
    filters,
    pizzas,
    drinks,
    cart
});

export default rootReducer;