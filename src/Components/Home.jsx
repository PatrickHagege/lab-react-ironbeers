import React from 'react';
import { NavLink } from "react-router-dom";

function Home() {
    return (<div>
        <nav>
            <NavLink to="/beers">See all beers </NavLink>
            <NavLink to="/random-beer">View a random beer </NavLink>
            <NavLink to="/new-beer">New beer </NavLink>
        </nav>
    </div>);
}

export default Home;
