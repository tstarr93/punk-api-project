import React, { useEffect, useState } from 'react';
import './App.modules.scss';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';

function App() {
  const [beers, setBeers] = useState([]);
  const [highABV, setHighABV] = useState([]);
  // const [classicRange, setClassicRange] = useState([]);
  const [acidity, setAcidity] = useState([]);

  const getHighABV = () => {
    fetch('https://api.punkapi.com/v2/beers?abv_gt=6')
      .then((response) => response.json())
      .then((data) => setHighABV(data));
    console.log("got high ABV beers");
  };

  // const getClassicRange = () => {
  //   fetch('')
  // }

  const getBeer = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }

  useEffect(() => {
    getHighABV();
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <Filter />
      {highABV && (
        <>
          <h2>Beers with an ABV greater than 6.0%:</h2>
          <p>{highABV.name}</p>
          <p>{highABV.abv}</p>
        </>
      )}
    </div>
  );
}

export default App;
