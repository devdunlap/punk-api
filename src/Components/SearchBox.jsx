import React from 'react'
import './SearchBox.css'
const punkApi = 'https://api.punkapi.com/v2/beers'




const SearchBox = ({ search, setSearch }) => {
    const SearchBeer = async() => {
        const res = await fetch(punkApi)
        const data = await res.json()
        console.log(data)
    }
    SearchBeer()
  return (
    <div className="Search">
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <button onClick={SearchBeer} >SearchBox</button>
      </div>
   
  )
}

export default SearchBox






