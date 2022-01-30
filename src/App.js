import './App.css';

import Home from './Components/Home'
import Beers from './Components/Beers'
import SingleBeer from './Components/SingleBeer'
import NewBeer from './Components/NewBeer'
import RandomBeer from './Components/RandomBeer'

import { useEffect, useState } from 'react';
import axios from 'axios';

import { Route, Routes } from 'react-router-dom';


function App() {
  const [beers, setBeers] = useState([]);

  const addBeer = (beer) => {
		setBeers([...beers, beer]);
	};

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => {
                //console.log(response.data);
                setBeers(data);
            })
            .catch((e) => console.log(e));
    }, []);
    //console.log(beers)
  return (
    <div className="App">
      <Routes>
				<Route path="/" element={<Home />} />
        <Route path="/beers/:beerId" element={<SingleBeer beers={beers} />} />
				<Route path="/beers" element={<Beers beers={beers} />} />
				<Route path="/random-beer" element={<RandomBeer beers={beers} />} />
        {/* <Route path="/new-beer" element={<NewBeer beers={beers} addBeer={addBeer}/>} /> */}
			</Routes>
    </div>
  );
}

export default App;
