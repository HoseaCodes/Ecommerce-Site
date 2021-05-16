import React, { useState } from "react";

import Savvy from '../../Images/Savvy.png';
import Savvy2 from '../../Images/Savvy2.png';
import Savvy3 from '../../Images/Savvy3.png';
import './HomeSlider.css';

// Home page slider for content and images
const HomeSilder = () => {
    const [autoplay, setAutoplay] = useState(true);

    const quoteInfo = [
        { name: 'Don Miguel Ruiz', content: "There's the object of perception, which is the truth, and there's our interpretation of the truth, which is just a point of view." },
        { name: 'Carrie Bradshaw', content: "The most exciting, challenging, and significant relationship of all is the one you have with yourself. And if you find someone to love the you you love, well that's just fabulous." },
        { name: 'Maya Angelou', content: "Bringing the gifts that my ancestors gave, I am the dream and the hope of the slave. I rise, I rise, I rise." },
        { name: 'Beyonce', content: "The more successful I become, the more I need a man." },
    ]
    const quotes = quoteInfo.map((quote) =>
        <div key={quote.id}>
            <br />
            <q>{quote.content}</q>
            <address> - {quote.name}</address>
        </div>
    );

    return (
        <>

            <div onMouseOver={() => setAutoplay(false)}>
                <div className="homepage-slider" autoplay={autoplay}>
                    <img className="homepage-slider-image" src={Savvy} width="450px" height="500px" />
                    <img className="homepage-slider-image" src={Savvy2} width="450px" height="500px" />
                    <img className="homepage-slider-image" src={Savvy3} width="450px" height="500px" />
                </div>
                <div className="homepage-slider-quote">
                    {quotes}
                </div>
            </div>

            <div className="autoplay-buttons">
                Autplay is {autoplay ? 'on' : 'off'}
            </div>
            <div className="autoplay-buttons">
                <button type="button" onClick={() => setAutoplay(false)}>Pause</button>
                <button type="button" onClick={() => setAutoplay(true)}>Play</button>
            </div>
        </>
    );
}

export default HomeSilder;


