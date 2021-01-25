import React, {useState, useEffect} from "react";


export const UpButton = () => {

    const [activeStyle, setStyle] = useState(null);

    const executeScroll = () => window.scrollTo(0,0);

    // if (window.scrollY > 300)
    //     setStyle({display: "block"})
    // else
    //     setStyle({display: "none"})

    useEffect(() => {
        const scrollF = () => {
            if (window.scrollY > 300) {
                setStyle({display: "block"})
            }
            else {
                setStyle({display: "none"})
            }
        }

        window.addEventListener('scroll', scrollF)
        return () => window.removeEventListener('scroll', scrollF)
    });

    return (
        <div style={activeStyle} onClick={executeScroll} className="up-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="m 50 30 m -30 30 l 30 -30 l 30 30" fill="white"/>
            </svg>
        </div>
    )
}

export default UpButton;