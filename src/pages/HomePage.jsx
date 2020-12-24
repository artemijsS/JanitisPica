import React, {useCallback, useEffect, useState} from 'react';
import {Categories, Footer, Header, LoadingPizzaBlock, PizzaBlock, SortPopUp} from "../components";
import {Helmet} from "react-helmet";

import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from "../redux/actions/pizzas";
import {addItemToCart} from "../redux/actions/cart";


const sortItems = [
    { name: 'popularitātes', type: 'rating', order: 'desc' },
    { name: 'cenas (no augšas)', type: 'price_main', order: 'desc' },
    { name: 'cenas (no lejas)', type: 'price_main', order: 'asc' },
    { name: 'alfabēta', type: 'name', order: 'asc' },
];

function HomePage () {
    const dispatch = useDispatch();
    const pizzas = useSelector(({ pizzas }) => pizzas.items);
    const cart = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy, pizzasCategories } = useSelector(({ filters }) => filters);

    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        if (!pizzasCategories.includes(category)) {
            dispatch(setCategory(null));
            setActiveCategory(null);
        }
    }, [category, dispatch])

    useEffect(() => {
        dispatch(fetchPizzas(category,sortBy))
    }, [category, sortBy, dispatch]);


    const onSelectCategory = useCallback(name => {
        dispatch(setCategory(name));
    }, [dispatch]);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, [dispatch]);

    const clickedOnAddPizza = (obj) => {
        dispatch(addItemToCart(obj));
    }
    // console.log(pizzas[0] ? pizzas[0].sizes.sizes : 'not')

    return (
        <div>
            <Helmet>
                <title>Picas | Jānātīs pica</title>
            </Helmet>
            <Header activeIndex={0} />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories
                            activeCategory={activeCategory}
                            onClickItem={onSelectCategory}
                            items={pizzasCategories}
                        />
                        <SortPopUp
                            activeSort={sortBy}
                            onClickItem={onSelectSortType}
                            items={sortItems}
                        />
                    </div>
                    <h2 className="content__title">Visas picas</h2>
                    <div className="content__items">
                        {isLoaded
                            ? pizzas.map((pizza) => (
                                    <PizzaBlock
                                        onClickAddPizza={clickedOnAddPizza}
                                        key={pizza.id}
                                        addedCart={cart[pizza.id] && cart[pizza.id].totalItemCount}
                                        {...pizza}
                                    />
                                 ))
                            :
                            Array(4)
                                .fill(0)
                                .map((_, index) => <LoadingPizzaBlock key={index} />)}
                        {!pizzas[0] && isLoaded &&
                            <div className="no_product">Atvainojiet, bet tādas preces uz doto brīdi nav</div>
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;