import React from 'react'
import './SearchBox.css'
const punkApi = 'https://api.punkapi.com/v2/beers'




const SearchBox = () => {
    const SearchBeer = async() => {
        const res = await fetch(punkApi)
        const data = await res.json()
        console.log(data)
    }
    SearchBeer()
  return (
    <div className="Search"><button onClick={SearchBeer}
    ></button>SearchBox</div>
  )
}

export default SearchBox






