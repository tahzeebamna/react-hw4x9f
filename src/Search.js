import React, { useState } from 'react';
import { postalCode } from './Api.js';

const Search = () => {
  const [query, setQuery] = React.useState('10033');
  const [fiterData, setFilterData] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
    let newArr;
    if (query.length > 4) {
      newArr = postalCode.filter(i => i.includes(query));
      setFilterData(newArr);
    }
  };

  return (
    <div>
      <input
        placeholder="Search Postalcode"
        value={query}
        onChange={handleChange}
      />
      {console.log(fiterData)}
    </div>
  );
};
export default Search;
