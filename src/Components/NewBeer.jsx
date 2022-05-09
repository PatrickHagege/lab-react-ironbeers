import React from 'react';
import Header from './Header';

// import { useState } from 'react';
// import axios from 'axios';

function NewBeer({body}) {
    /*
    const [beer, setBeer] = ({newBeer});
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributor] = useState("");

    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = body;
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            newBeer
        })
            .then((function (apiResponse) {
                console.log(name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by);
                setBeer(beer)
                console.log(apiResponse);
            }))
            .catch(err => console.log(err));
    };
    */

    return <div>
        <Header />
        {/* <form action="https://ih-beers-api2.herokuapp.com/beers/new" onSubmit={handleSubmit}> */}
        <form action="https://ih-beers-api2.herokuapp.com/beers/new">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            {/* <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)} /> */}

            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" id="tagline" />
            {/* <input type="text" name="tagline" id="tagline" onChange={(event) => setTagline(event.target.value)} /> */}

            <label htmlFor="attenuation_level">Attenuation level</label>
            <input type="number" name="attenuation_level" id="attenuation_level" />
            {/* <input type="number" name="attenuation_level" id="attenuation_level" onChange={(event) => setAttenuationLevel(event.target.value)} /> */}

            <label htmlFor="first_brewed">Fist brewed</label>
            <input type="text" name="first_brewed" id="first_brewed"/>
            {/* <input type="text" name="first_brewed" id="first_brewed" onChange={(event) => setFirstBrewed(event.target.value)}/> */}

            <label htmlFor="brewers_tips">Brewer's tips</label>
            <input type="text" name="brewers_tips" id="brewers_tips" />
            {/* <input type="text" name="brewers_tips" id="brewers_tips" onChange={(event) => setBrewersTips(event.target.value)} /> */}

            <label htmlFor="contributed_by">Contributed by</label>
            <input type="text" name="contributed_by" id="contributed_by" />
            {/* <input type="text" name="contributed_by" id="contributed_by" onChange={(event) => setContributor(event.target.value)} /> */}

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
            {/* <input type="text" name="description" id="description" onChange={(event) => setDescription(event.target.value)}/> */}

            <button>
                Add a new beer
            </button>
        </form>
    </div>;
}

export default NewBeer;
