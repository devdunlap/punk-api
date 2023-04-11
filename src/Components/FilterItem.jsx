import React, { useState, useEffect } from 'react';
import './FilterItem.css';
const FilterItem = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    (async () => {
      const url = 'https://api.punkapi.com/v2/beers'
      const res = await fetch(url)
      const data = await res.json()
      setRes(data);
    })();
  }, []);
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