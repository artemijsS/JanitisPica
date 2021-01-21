import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {HomePage, CartPage, DrinksPage, Contacts, CheckOut} from './pages/index';

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/pizzas" exact>
                <HomePage/>
            </Route>
            <Route path="/cart" exact>
                <CartPage/>
            </Route>
            <Route path="/dzerieni" exact>
                <DrinksPage/>
            </Route>
            <Route path="/kontakti" exact>
                <Contacts/>
            </Route>
            <Route path="/checkout" exact>
                <CheckOut/>
            </Route>
            <Route path="/admin" exact>
                {
                    <a id="test" href="https://young-ridge-27848.herokuapp.com/admin" style={{margin:"auto"}}>test</a>
                }
            </Route>

            <Redirect to="/pizzas"/>
        </Switch>
        )
}
