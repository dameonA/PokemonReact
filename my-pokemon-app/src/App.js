//import logo from './logo.svg';
import './App.css';
import React from 'react'
import SearchPokemon from './SearchPokemon'
import PokemonDisplay from './PokemonDisplay'
import ViewAll from './ViewAll'
import ViewAllList from './ViewAllList'
import ViewSimilarTypes from './ViewSimilarTypes'
import SimilarTypesDisplay from './SimilarTypesDisplay'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonAll: [],
      pokemon: {},
      searchBoxInput: "",
      pokemonSimilar: {},
    }
  }

  handleSearchBoxChange = (event) => {
    this.setState({searchBoxInput: event.target.value});
  }

  handleViewAll = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
    const json = await response.json()
    this.setState({pokemonAll: json.results})
  }

  handleImageClick = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const json = await response.json()
    this.setState({pokemon: json})
  }

  handleViewSimilar = async () => {
    this.componentDidMount();

    let pokemon = this.state.pokemon
    let pokemonTypeUrl = pokemon.types[0].type.url;

    const response = await fetch(pokemonTypeUrl)
    const json = await response.json()
    this.setState({pokemonSimilar: json.results})
  }

  componentDidMount = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchBoxInput}`)
    const json = await response.json()
    this.setState({pokemon: json})
  
}



  render() {
    return (
      <div>
        <h2>Pokemon App</h2>
        <SearchPokemon 
          onSearchBoxChange={this.handleSearchBoxChange}
          onSearchItem={this.componentDidMount}               
          />
            <ViewSimilarTypes
          // pokemon = {this.state.pokemon}
          // pokemonList={this.state.pokemonAll}
          onViewSimilar = {this.handleViewSimilar}
          />

          <PokemonDisplay
          pokemon = {this.state.pokemon}
          /><br/>
          <SimilarTypesDisplay
          pokemonSimilar = {this.state.pokemonSimilar}
          
          />
        
          <ViewAll
          onViewAll={this.handleViewAll}
          />
          <ViewAllList 
          pokemon = {this.state.pokemon}
          pokemonList={this.state.pokemonAll}
          onImageClick = {this.handleImageClick}
          />
          
      </div>
    
    );
  }
  
}

export default App;



// poke_input = poke_input.replace(/(\r)/gm, '')
// let poke_input_arr = poke_input.split('\n')
// poke_input_arr = poke_input_arr.map(entry => entry.toLowerCase());
// async function read_pokemon_data(name){
// await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     .then(data => data.json())
//     .then(data => {
//         console.log(name[0].toUpperCase() + name.substring(1) + ':' + data.types.map(element => element.type.name).join(', '))
//          })
//          .catch(err => console.log(err))
//         }
//         poke_input_arr.forEach(entry => read_pokemon_data(entry))

//https://pokeapi.co/api/v2/type/{/