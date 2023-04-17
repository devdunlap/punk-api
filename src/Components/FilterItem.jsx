import React from 'react';
import './FilterItem.css';
const FilterItem = (props) => {
  const {res, range, search} = props;

  const filteredRes = res
    .filter(beer => range === 'classic' ? beer.abv>6 : true)
    .filter(beer => range === 'special' ? beer.abv<4.5 : true)
    .filter(beer => range === 'acidic' ? beer.ph<4.5 : true)
    .filter(beer => beer.name.includes(search))
  
    return filteredRes.map(res => <div className ="filter-item">
      <div className="card grey darken-4">
        <div className="card-image">
          <img style={{aspectRatio: 1, objectFit: 'cover'}} src={res.image_url} alt={res.name} />
          <span className="card-title">{res.name}</span>
        </div>
        <div className="card-content">
          <p className="white-text">{res.description}</p>
        </div>
      </div>
    </div>);
}

export default FilterItem