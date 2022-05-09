import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

import axios from 'axios';

function SingleBeer({ beers }) {
    const [beer, setBeer] = useState({});
    const { beerId } = useParams();

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
            .then(({ data }) => {
                console.log("data :", data);
                console.log("Beer before setBeer(data):", beer);
                setBeer(data);
            })
            .catch((e) => console.log(e));
        // eslint-disable-next-line
    }, [beerId]);
    return (
        <>
            <Header />
            <div key={`${beerId}`} id='single-beer-container' className='single-beer-container'>
                <section id='single-beer-image-container' className='single-beer-image-container'>
                    <img src={beer.image_url} alt={beer.name} />
                </section>
                <section id='single-beer-infos'>
                    <section id='name-and-attenuation-level' >
                        <h2>{beer.name}</h2>
                        <span>{beer.attenuation_level}</span>
                    </section>
                    <section id='tagline-and-first-brewed' >
                        <h3>{beer.tagline}</h3>
                        <span>{beer.first_brewed}</span>
                    </section>
                    <section id='single-beer-description'>
                        <p>{beer.description}</p>
                    </section>
                </section>
            </div>
        </>
    );
}

export default SingleBeer;
