import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ handleSearch, placeholder}) => (
    <input
        className= "search"
        type= "search"
        placeholder = {placeholder}
        onChange = {handleSearch}
    />
)

export default SearchBox