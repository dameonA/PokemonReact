import React from 'react'

function SearchPokemon(props) {
    return (
        <div>
            <input type="text" onChange={props.onSearchBoxChange} value={props.searchBoxValue} />
            <button type="button" onClick={props.onSearchItem}>Search</button>
        </div>
        
    );
}

export default SearchPokemon