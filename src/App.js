import React from 'react'
import Navbar from './Components/Navbar'
import FiltersList from './Components/FiltersList'
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    (async () => {
      const url = 'https://api.punkapi.com/v2/beers'
      const res = await fetch(url)
      const data = await res.json()
      setRes(data);
    })();
  }, []);
  return (
    <div className="app" style={{display: 'flex', flexDirection: 'row'}}>
    <Navbar />
    <FiltersList res={res}/>
    </div>
  )
}

export default App
