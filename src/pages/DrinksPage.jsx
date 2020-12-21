import React, {useCallback, useEffect} from 'react';
import {Categories, DrinkBlock, Footer, Header, LoadingDrinkBlock,SortPopUp} from "../components";
import { Helmet } from 'react-helmet';

import {useDispatch, useSelector} from "react-redux";
import {fetchDrinks} from "../redux/actions/drinks";
import {addItemToCart} from "../redux/actions/cart";
import {setCategory, setSortBy} from "../redux/actions/filters";

const categoryNames = ['Bezalkohola', 'Alkohola'];

const sortItems = [
    { name: 'popularitātes', type: 'rating', order: 'desc' },
    { name: 'cenas', type: 'price[0]', order: 'asc' },
    { name: 'alfabēta', type: 'name', order: 'asc' },
];

function DrinksPage () {

    const dispatch = useDispatch();
    const drinks = useSelector(({ drinks }) => drinks.items);
    const cart = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ drinks }) => drinks.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);


    if (category > categoryNames.length - 1) {
        dispatch(setCategory(null));
    }


    useEffect(() => {
        dispatch(fetchDrinks(category,sortBy))
    }, [category, sortBy, dispatch]);


    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index));
    }, [dispatch]);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, [dispatch]);

    const clickedOnAddDrink = (obj) => {
        dispatch(addItemToCart(obj));
    }

    return (
        <div>
            <Helmet>
                <title>Dzērieni | Jānātīs pica</title>
            </Helmet>
            <Header activeIndex={1} />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories
                            activeCategory={category}
                            onClickItem={onSelectCategory}
                            items={categoryNames}
                        />
                        <SortPopUp
                            activeSort={sortBy.type}
                            onClickItem={onSelectSortType}
                            items={sortItems}
                        />
                    </div>
                    <h2 className="content__title">Visi dzērieni</h2>
                    <div className="content__items">
                        {isLoaded
                            ? drinks.map((drink, i) => (
                                    <DrinkBlock
                                        key={`${drink.name}_${i}`}
                                        onClickAddDrink={clickedOnAddDrink}
                                        addedCart={cart[drink.id] && cart[drink.id].totalItemCount}
                                        {...drink}
                                    />
                            ))
                            :Array(4)
                                .fill(0)
                                .map((_, index) => <LoadingDrinkBlock key={index} />)}
                        {!drinks[0] &&
                            <div className="no_product">Atvainojiet, bet tādas preces uz doto brīdi nav</div>
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DrinksPage;