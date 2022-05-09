import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Beers(props) {
    const { beers } = props;
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
        .then(({ data }) => {
            console.log(data)
            setSearchResults(data)
        })
        .catch(error => console.log(error))
    },[search, setSearchResults])

    return (
        <>
            <Header />
            <input
                type="search"
                name="searchBeers"
                id="searchBeers"
                placeholder='search for beers...'
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
            />
            <div id="beerlist-container" className="beerlist-container">
            {search && searchResults && (searchResults.map((result) => {
                    //console.log(result)
                    return (
                        <Link to={`/beers/${result._id}`} key={result._id}>
                        <article  id="beer-list-article" className="beer-list-article">
                            
                                <div id="beer-list-article-image-container">
                                    <img src={`${result.image_url}`} alt={`${result.name}`} />
                                </div>
                                <section id="beer-list-infos" className="beer-list-infos">
                                    <h2>{result.name}</h2>
                                    <h3>{result.tagline}</h3>
                                    <p><span>Contributed by : </span>{result.contributed_by}</p>
                                </section>
                            
                        </article>
                        </Link>
                        )

                }))}
                {!search && (beers.map((beer) => {
                    //console.log(beer)
                    return (
                        <Link to={`/beers/${beer._id}`} key={beer._id}>
                        <article  id="beer-list-article" className="beer-list-article">
                            
                                <div id="beer-list-article-image-container">
                                    <img src={`${beer.image_url}`} alt={`${beer.name}`} />
                                </div>
                                <section id="beer-list-infos" className="beer-list-infos">
                                    <h2>{beer.name}</h2>
                                    <h3>{beer.tagline}</h3>
                                    <p><span>Contributed by : </span>{beer.contributed_by}</p>
                                </section>
                            
                        </article>
                        </Link>
                        )

                }))}
            </div>
        </>);
}

export default Beers;
