import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {HomePage, CartPage, DrinksPage, SalesPage} from './pages/index';

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
            <Route path="/akcijas" exact>
                <SalesPage/>
            </Route>
            <Route path="/admin" exact>
                {
                    <a id="test" href="http://localhost:1337/admin" style={{margin:"auto"}}>test</a>
                }
            </Route>

            <Redirect to="/home"/>
        </Switch>
        )
}
