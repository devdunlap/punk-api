import React from 'react'
import FilterItem from './FilterItem'

const FiltersList = (props) => {
  const {res} = props;


         

  return (
    <div style ={{ flex: 4}}>
        {Array(6).fill(0).map(() => <FilterItem res ={res}/>)}
    </div>
   
  )
}

export default FiltersList