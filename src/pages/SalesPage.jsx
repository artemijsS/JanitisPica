import React from 'react';
import { Footer, Header } from "../components";
import { Helmet } from 'react-helmet';


function SalesPage () {

    return (
        <div>
            <Helmet>
                <title>Akcijas | Jānātīs pica</title>
            </Helmet>
            <Header activeIndex={2} />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        test
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SalesPage;