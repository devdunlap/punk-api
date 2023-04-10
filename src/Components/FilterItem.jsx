import React from 'react'

const FilterItem = () => {
    const FilterBeer = async() => {
        const url = 'https://api.punkapi.com/v2/beers'
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.results[0]);
    }
    return (
    <div>FilterItem</div>
  )
}

export default FilterItem