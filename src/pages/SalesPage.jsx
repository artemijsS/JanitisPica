import React from 'react';
import {Categories, Footer, Header, SortPopUp} from "../components";
import { Helmet } from 'react-helmet';


function SalesPage () {

    return (
        <div>
            <Helmet>
                <title>Akcijas</title>
            </Helmet>
            <Header activeIndex={2} />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories
                            items={['Komplekti', 'Dāvanas']}
                        />
                        <SortPopUp items={['popularitātes', 'cenas', 'alfabēta']}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SalesPage;