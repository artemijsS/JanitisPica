import React from 'react';
import PropTypes from "prop-types";
import {Button} from "../index";

const DrinkBlock = ({id, name, img, price, onClickAddDrink, addedCart}) => {

    const onAddDrink = () => {
        let finalPrice = price[0];
        onClickAddDrink({id, name, finalPrice, img});
    }

    return (
        <div className="pizza-block">
            <img className="drink-block__image"
                 src={img}
                 alt="Drink"/>
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price} €</div>
                <Button
                    className="button button--outline button--add"
                    onClick={onAddDrink}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"/>
                    </svg>
                    <span>Pievienot</span>
                    {addedCart && <i>{addedCart}</i>}
                </Button>
            </div>
        </div>
    );
};

DrinkBlock.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired
}

DrinkBlock.defaultProps = {
    name: "error",
    img: "https://icon2.cleanpng.com/20180425/gdq/kisspng-computer-icons-error-red-tag-5ae0e37dbe05a1.9717384915246877417783.jpg",
    price: 9999
}

export default DrinkBlock;