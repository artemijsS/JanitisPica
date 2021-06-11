import React, {useState, useEffect} from 'react';
import {Footer, Header, LoadingMap} from "../components";
import { Helmet } from 'react-helmet';


function Contacts () {

    const [mapLoading, setMapLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    //TODO Сделать форму "Связаться с нами"
    return (
        <div>
            <Helmet>
                <title>Kontakti | Jānātīs pica</title>
            </Helmet>
            <Header activeIndex={2} />
            <div className="content">
                <div className="container">
                    <div className="contacts">
                        <div className="content__top">
                            <div className="darba-laiki">
                                P. - <span>slēgts</span><br/>
                                O. - 10:00-19:00<br/>
                                T. - 10:00-19:00<br/>
                                C. - 10:00-19:00<br/>
                                P. - 10:00-19:00<br/>
                                S. - 10:00-19:00<br/>
                                Sv. - <span>slēgts</span><br/>
                            </div>
                            <div className="info">
                                <span>Telefons:</span> <a href="tel:+37125961042">+371 25961042</a><br/>
                                E-mail: <a href="mailto:picajanitis@gmail.com">picajanitis@gmail.com</a><br/>
                            </div>

                        </div>
                    </div>
                    { mapLoading &&
                        <LoadingMap/>
                    }
                    <iframe
                        onLoad={() => setMapLoading(false)}
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.2250330127795!2d24.250729813895113!3d56.941448350926215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecdbece9b5aa7%3A0x613be1ff3b76c4c0!2zSsSBbsSrdGlz!5e0!3m2!1slv!2slv!4v1611760484756!5m2!1slv!2slv"
                        frameBorder="0" style={{borderRadius: `10px`, width: `100%`, height: `400px`, marginBottom: `30px`}} allowFullScreen=""
                        aria-hidden="false" tabIndex="0">
                    </iframe>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts;