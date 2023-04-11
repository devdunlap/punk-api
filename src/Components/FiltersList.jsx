import React from 'react'
import FilterItem from './FilterItem'

const FiltersList = () => {
//create a function that will filter main.js and return the filtered list
//create a function that will filter main.js and return the filtered list

         

  return (
    <div style ={{ flex: 4}}>
        {Array(6).fill(0).map(() => <FilterItem/>)}
    </div>
   
  )
}

export default FiltersList