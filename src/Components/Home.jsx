import React from 'react';
import beersImg from './../assets/beers.png';
import newBeerImg from './../assets/new-beer.png';
import randomBeerImg from './../assets/random-beer.png';
import { NavLink, Link } from "react-router-dom";

function Home() {
    return (
        <div className='Home'>
            <nav>
                <NavLink to="/beers">All Beers</NavLink>
                <NavLink to="/random-beer">Random Beer</NavLink>
                <NavLink to="/new-beer">New Beer</NavLink>
            </nav>
            <section className='home-main'>
                <Link to="/beers">
                    <article>
                        <img src={beersImg} alt="beers" />
                        <h2>All Beers</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum rhoncus diam quis varius. Pellentesque interdum mauris in dapibus euismod. Nam ac euismod libero. Maecenas molestie scelerisque dui, pretium volutpat odio pulvinar quis. Etiam vitae tristique purus. Fusce non magna at augue cursus scelerisque nec sit amet tortor. Fusce laoreet varius bibendum.
                        </p>
                    </article>
                </Link>
                <Link to="/random-beer">
                    <article>
                        <img src={newBeerImg} alt="new beer" />
                        <h2>Random Beer</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum rhoncus diam quis varius. Pellentesque interdum mauris in dapibus euismod. Nam ac euismod libero. Maecenas molestie scelerisque dui, pretium volutpat odio pulvinar quis. Etiam vitae tristique purus. Fusce non magna at augue cursus scelerisque nec sit amet tortor. Fusce laoreet varius bibendum.
                        </p>
                    </article>
                </Link>
                <Link to="/new-beer">
                    <article>
                        <img src={randomBeerImg} alt="random beer" />
                        <h2>New Beer</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum rhoncus diam quis varius. Pellentesque interdum mauris in dapibus euismod. Nam ac euismod libero. Maecenas molestie scelerisque dui, pretium volutpat odio pulvinar quis. Etiam vitae tristique purus. Fusce non magna at augue cursus scelerisque nec sit amet tortor. Fusce laoreet varius bibendum.
                        </p>
                    </article>
                </Link>
            </section>
        </div>);
}

export default Home;
