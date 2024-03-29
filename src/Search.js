import React, { useState } from 'react';
import { postalCode } from './Api.js';

const Search = () => {
  const [query, setQuery] = React.useState('10033');
  const [fiterData, setFilterData] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
    let newArr;
    if (query.length > 2) {
      newArr = postalCode.filter(i => i.includes(query));
      setFilterData(newArr);
    }
  };

  return (
    <div>
      <label>Postalcode</label>
      <input
        type="number"
        placeholder="Search Postalcode"
        value={query}
        onChange={handleChange}
      />
      <li>suggestion </li>
      {fiterData.map(cuurVal => {
        return <li>{cuurVal}</li>;
      })}
    </div>
  );
};
export default Search;
