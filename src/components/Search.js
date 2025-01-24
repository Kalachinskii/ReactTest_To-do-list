import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [value, setValue] = useState();
    return (
        <input
            onChange={(e) => {
                setValue(e.target.value);
                // value - запоздалое и необходим для контроля
                onSearch(e.target.value);
            }}
            // делаем контролируемым
            value={value}
            type="text"
            placeholder="Type to Search"
            className="form-control search-input"
        />
    );
};

export default Search;
