import React, { useState, useEffect } from 'react';
import './FilterItem.css';
const FilterItem = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    (async () => {
      const url = 'https://api.punkapi.com/v2/beers'
      const res = await fetch(url)
      const data = await res.json()
      setResults(data);
    })();
  }, []);
    return results.map(result => <div className ="filter-item">
      <div className="card grey darken-4">
        <div className="card-image">
          <img style={{aspectRatio: 1, objectFit: 'cover'}} src={result.image_url} alt={result.name} />
          <span className="card-title">{result.name}</span>
        </div>
        <div className="card-content">
          <p className="white-text">{result.description}</p>
        </div>
      </div>
    </div>);
}

export default FilterItem