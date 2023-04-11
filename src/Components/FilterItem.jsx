import React from 'react';
import './FilterItem.css';
const FilterItem = (props) => {
  const {res} = props;
  
    return res.map(res => <div className ="filter-item">
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