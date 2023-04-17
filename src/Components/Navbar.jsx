import React from 'react'
import SearchBox from './SearchBox'
import './Navbar.css'
import  FilterItems from './FilterItem'

// const ClassicRange = (props) => {FilterItems.filter 




const NavBox = ({ setRange, search, setSearch }) => {
 
 
 
    return (
    
    <div className="navbar" style= {{flex: 1}}>
    <SearchBox search={search} setSearch={setSearch} />
    <div onClick={() => setRange('classic')}>Classic Range</div>
    <div onClick={() => setRange('special')}>Special Range</div>
    <div onClick={() => setRange('acidic')}>Acidic</div>
    <div>
        {/* <p>test</p> */}
    </div>
    </div>
    );
}


export default NavBox