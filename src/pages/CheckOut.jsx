import React, {useEffect, useState} from 'react';
import {Footer, Header} from "../components";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {clearCart} from "../redux/actions/cart";
import axios from "axios";


function CheckOut () {

    const dispatch = useDispatch();

    const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart)

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [checkOut, setCheckOut] = useState(false);

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
                // console.log(items[id][param])
                finalCart.items.push(items[id][param]);
            })
        })
        // console.log(finalCart)
    }

    useEffect(() => {
        toCheckOut();
    })

    const submitForm = async event => {
        event.preventDefault();
        setCheckOut(true);
        console.log(name, surname, telephone)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'pk_6764153_4995V2GZLEFID52PTAQNR48E4P9XNPA9',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": "from react",
                "content": "New Task Content",
                "assignees": [
                    6764153
                ],
                "due_date": "1611577799000",
                "priority": 1,
                "description": "iahfkjbasldla asdlkasdlkasm das"
            })
        };
        fetch('https://api.clickup.com/api/v1/list/44542033/task', requestOptions)
            .then(response => response.json());

        const json = JSON.stringify({
            "name": "from react",
            "content": "New Task Content",
            "assignees": [
                6764153
            ],
            "due_date": "1611577799000",
            "priority": 1,
            "description": "iahfkjbasldla asdlkasdlkasm das"
        });
        const res = await axios.post('https://api.clickup.com/api/v1/list/44542033/task', json, {
            headers: {
                'Authorization': 'pk_6764153_4995V2GZLEFID52PTAQNR48E4P9XNPA9',
                'Content-Type': 'application/json'
            }
        })
    }

    const onClearCart = () => {
        dispatch(clearCart());
    }

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div>
            <Helmet>
                <title>Grozs | Jānātīs pica</title>
            </Helmet>
            <Header activeIndex={null}/>
            {checkOut &&
                <div className="bg-overlay">
                    <div className="content">
                        <div className="container container--cart">
                            <div className="pop-up-order">
                                <div className="order-card">
                                    <div className="thank-you">Paldies!</div>
                                    <div className="order-info">
                                        Pasutījums ir saņemts, <span>mēs sazināsimies ar Jums tuvakajā laikā</span>,
                                        lai apstiprināt pasutījumu
                                    </div>
                                    <div className="cart__bottom-buttons">
                                        <Link to="/" onClick={onClearCart} className="button button--outline button--add go-back-btn">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span>Uz sākumu</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="content">
                <div className="container container--cart">
                    <div className="cart">
                        <div className="cart__top">
                            <h2 className="content__title">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                        stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                        stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                        stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                                Pasutījumu noformēšana
                            </h2>
                        </div>
                        <form id="form-checkOut" onSubmit={submitForm}>
                            <div className="form">
                                <input placeholder="Vārds" type="text" id="name" onChange={e => {setName(e.target.value)}} required/>
                                <input placeholder="Uzvārds" type="text" id="surname" onChange={e => {setSurname(e.target.value)}} required/>
                                <input placeholder="Tālrunis" pattern="[0-9]*" type="tel" id="phone" onChange={e => {setTelephone(e.target.value)}} required/>
                            </div>
                        </form>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> Kopā: <b>{totalCount} gab.</b> </span>
                                <span> Summa: <b>{totalPrice} €</b> </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <Link to="/cart" className="button button--outline button--add go-back-btn">
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Atpakaļ</span>
                                </Link>
                                <button type="submit" form="form-checkOut" value="Submit" className="button pay-btn">
                                    <span>Pasūtīt</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CheckOut;