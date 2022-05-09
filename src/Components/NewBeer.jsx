import React from 'react';
import Header from './Header';

import { useState } from 'react';
import axios from 'axios';

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
        console.log(newBeer);
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', 
            newBeer
        )
            .then((function (apiResponse) {
                console.log(name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by);
                console.log(apiResponse);
            }))
            .catch(err => console.log(err));
    };

    return (<div>
        <Header />
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)} />

            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" id="tagline" onChange={(event) => setTagline(event.target.value)} />

            <label htmlFor="attenuationLevel">Attenuation level</label>
            <input type="number" name="attenuationLevel" id="attenuationLevel" onChange={(event) => {
                const castedAttenuationLevel = Number(event.target.value);
                setAttenuationLevel(castedAttenuationLevel)}
             } />

            <label htmlFor="first_brewed">First brewed</label>
            <input type="text" name="first_brewed" id="first_brewed" onChange={(event) => setFirstBrewed(event.target.value)} />

            <label htmlFor="brewers_tips">Brewer's tips</label>
            <input type="text" name="brewers_tips" id="brewers_tips" onChange={(event) => setBrewersTips(event.target.value)} />

            <label htmlFor="contributory">Contributed by</label>
            <input type="text" name="contributor" id="contributor" onChange={(event) => setContributor(event.target.value)} />

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={(event) => setDescription(event.target.value)} />

            <button>
                Add a new beer
            </button>
        </form>
    </div>);
}

export default NewBeer;
