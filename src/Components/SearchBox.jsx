import React from 'react'

const punkApi = 'https://api.punkapi.com/v2/beers'




const SearchBox = () => {
    const SearchBeer = async() => {
        const res = await fetch(punkApi)
        const data = await res.json()
        console.log(data)
    }
    SearchBeer()
  return (
    <div>SearchBox</div>
  )
}

export default SearchBox






