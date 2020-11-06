import React from 'react'

function PokemonDisplay(props) {
    let pokeMonData = props.pokemon
    return (
        <div>
            <span>Name: {pokeMonData.name}</span><br/>
            <span>Height: {pokeMonData.height}</span><br/>
            <span>Weight: {pokeMonData.weight}</span><br/>
            <span>ID: {pokeMonData.id}</span><br/>            
        </div>
        
    );
}
//<span>TYPE: {pokeMonData.types}</span><br/>
export default PokemonDisplay