import React from 'react'
import SearchBox from './SearchBox'
import './Navbar.css'


const NavBox = () => {
 
 
 
    return (
    
    <div className="navbar" style= {{flex: 1}}>
    <SearchBox/>
    <div>Classic Range</div>
    <div>Special Range</div>
    <div>Acidic/ph</div>
    <div>
        <p>test</p>
    </div>
    </div>
    );
}


export default NavBox