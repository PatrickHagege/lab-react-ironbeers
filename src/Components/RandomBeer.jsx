import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Header';

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState({});
    
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(({ data }) => {
            console.log(data);
            setRandomBeer(data)
        })
        .catch(error => console.log(error));
    }
        // eslint-disable-next-line
        , [])

    return (
        <div>
            <Header />
            <div id='single-beer-container' className='single-beer-container'>
                <section id='single-beer-image-container' className='single-beer-image-container'>
                    <img src={randomBeer.image_url} alt={randomBeer.name} />
                </section>
                <section id='single-beer-infos'>
                    <section id='name-and-attenuation-level' >
                        <h2>{randomBeer.name}</h2>
                        <span>{randomBeer.attenuation_level}</span>
                    </section>
                    <section id='tagline-and-first-brewed' >
                        <h3>{randomBeer.tagline}</h3>
                        <span>{randomBeer.first_brewed}</span>
                    </section>
                    <section id='single-beer-description'>
                        <p>{randomBeer.description}</p>
                    </section>
                    <section id='contributed_by'>{randomBeer.contributed_by}</section>
                </section>
            </div>
        </div>);
}

export default RandomBeer;
