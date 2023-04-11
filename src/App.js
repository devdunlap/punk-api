import React from 'react'
import Navbar from './Components/Navbar'
import FiltersList from './Components/FiltersList'
import './App.css';

const App = () => {
  return (
    <div className="app" style={{display: 'flex', flexDirection: 'row'}}>
    <Navbar />
    <FiltersList/>
    </div>
  )
}

export default App
