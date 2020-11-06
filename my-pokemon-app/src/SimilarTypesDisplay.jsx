import React from 'react'

function SimilarTypesDisplay(props) {
    let similarPokemon = props.pokemonSimilar
    let list = similarPokemon.name;
    // if(similarPokemon.pokemon[0] !== null) {
    //     list = similarPokemon.pokemon[0].pokemon.name
    // }
    return (
        <div>
            <span>{list}</span>
        </div>
        
    );
}

export default SimilarTypesDisplay