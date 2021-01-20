import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {HomePage, CartPage, DrinksPage, Contacts} from './pages/index';
//TODO сделать страницу
export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/home" exact>
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
                    <a id="test" href="https://young-ridge-27848.herokuapp.com/admin" style={{margin:"auto"}}>test</a>
                }
            </Route>

            <Redirect to="/home"/>
        </Switch>
        )
}
