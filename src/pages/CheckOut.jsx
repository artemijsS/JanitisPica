import React, {useEffect} from 'react';
import {Footer, Header} from "../components";
import {Helmet} from "react-helmet";
// import { Link } from "react-router-dom";
import {useSelector} from "react-redux";


function CheckOut () {

    const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart)

    const toCheckOut = () => {
        let finalCart = {
            items: [],
            totalPrice: totalPrice,
            totalCount: totalCount
        }

        // eslint-disable-next-line array-callback-return
        Object.keys(items).map((id) => {
            let itemsID = Object.keys(items[id]);
            itemsID.pop();
            // eslint-disable-next-line array-callback-return
            itemsID.map((param) => {
                console.log(items[id][param])
                finalCart.items.push(items[id][param]);
            })
        })
        console.log(finalCart)
    }

    useEffect(() => {
        toCheckOut();
    })

    return (
        <div>
            <Helmet>
                <title>Grozs | Jānātīs pica</title>
            </Helmet>
            <Header activeIndex={null}/>
            <div className="content">
                <form id="form-checkOut">
                    <div className="form">
                        <div className="vards">
                            {/*<label for="name">Vārds</label>*/}
                            <input placeholder="Vārds" type="text" id="name" required/>
                            {/*<label for="surname">Uzvārds</label>*/}
                            <input placeholder="Uzvārds" type="text" id="surname" required/>
                        </div>
                        <div className="talrunis">
                            {/*<label for="phone">Tālrunis</label>*/}
                            <input placeholder="Tālrunis" type="tel" id="phone" required/>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default CheckOut;