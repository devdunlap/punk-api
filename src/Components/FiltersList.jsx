import React from 'react'
import FilterItem from './FilterItem'

const FiltersList = (props) => {
  const {res, range, search} = props;


         

  return (
    <div style ={{ flex: 4}}>
      <FilterItem res ={res} range={range} search={search} />
    </div>
   
  )
}

export default FiltersList