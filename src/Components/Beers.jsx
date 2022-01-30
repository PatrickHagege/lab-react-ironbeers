import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


function Beers(props) {
    const { beers } = props;
    //console.log("beers", beers);
    return (
        <>
            <Header />
            <div id="beerlist-container" className="beerlist-container">
                {beers.map((beer) => {
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

                })}
            </div>
        </>);
}

export default Beers;
