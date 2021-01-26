import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {HomePage, CartPage, DrinksPage, Contacts, CheckOut} from './pages/index';
import {useSelector} from "react-redux";

export const useRoutes = () => {

    const { totalCount } = useSelector(({ cart }) => cart)

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
            <Route path="/admin" exact>
                {
                    <a id="test" href="https://janitis-pica-back-end.herokuapp.com/admin" style={{margin:"auto"}}>test</a>
                }
            </Route>
            {
                totalCount &&
                    <Route path="/checkout" exact>
                        <CheckOut/>
                    </Route>
            }

            <Redirect to="/pizzas"/>
        </Switch>
        )
}
