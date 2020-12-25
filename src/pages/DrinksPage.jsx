import React, {useCallback, useEffect, useState} from 'react';
import {Categories, DrinkBlock, Footer, Header, LoadingDrinkBlock,SortPopUp} from "../components";
import { Helmet } from 'react-helmet';

import {useDispatch, useSelector} from "react-redux";
import {fetchDrinks} from "../redux/actions/drinks";
import {addItemToCart} from "../redux/actions/cart";
import {setCategory, setSortBy} from "../redux/actions/filters";


const sortItems = [
    { name: 'popularitātes', type: 'rating', order: 'desc' },
    { name: 'cenas (no augšas)', type: 'price_main', order: 'desc' },
    { name: 'cenas (no lejas)', type: 'price_main', order: 'asc' },
    { name: 'alfabēta', type: 'name', order: 'asc' },
];

function DrinksPage () {

    const dispatch = useDispatch();
    const drinks = useSelector(({ drinks }) => drinks.items);
    const cart = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ drinks }) => drinks.isLoaded);
    const { category, sortBy, drinksCategories } = useSelector(({ filters }) => filters);

    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        if (!drinksCategories.includes(category)) {
            dispatch(setCategory(null));
            setActiveCategory(null);
        }
    }, [category, dispatch, drinksCategories])


    useEffect(() => {
        dispatch(fetchDrinks(category,sortBy))
    }, [category, sortBy, dispatch]);


    const onSelectCategory = useCallback(name => {
        dispatch(setCategory(name));
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
                            activeCategory={activeCategory}
                            onClickItem={onSelectCategory}
                            items={drinksCategories}
                        />
                        <SortPopUp
                            activeSort={sortBy}
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
                        {!drinks[0] && isLoaded &&
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