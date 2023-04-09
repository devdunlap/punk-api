import React from 'react'


// const SearchBox = () => {
//   return (
//     <div>SearchBox</div>
//   )
const SearchBox = (props) => {
    const {search, setSearch} = props
    const handleChange = (e) => {
        setSearch(e.target.value)
    }


  
  
    return (
    <div>SearchBox</div>
  )
}

export default SearchBox