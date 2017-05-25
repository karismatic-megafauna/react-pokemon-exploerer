import React from 'react';
import { getSprite } from 'pokemon-images';
import './App.css';
import { generation } from './pokemon';
import Tile from './Tile';
import { Input } from 'antd';
const Search = Input.Search;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonSpecies: generation.pokemon_species,
      searchTerm: '',
    };
  }
  render() {
    const pokeCards = {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '10px',
    }
    const tileStyle = {
      margin: '10px',
    }
    // const filteredPokemonSpecies = this.state.pokemonSpecies
    return (
      <div>
        <Search
          placeholder={this.state.searchTerm}
          style={{ width: 200, margin: '10px' }}
          onSearch={value => this.setState({searchTerm: value})}
          onBlur={ ({target}) => {
            this.setState({searchTerm: target.value})
          }}
        />
        <div>
          {this.state.searchTerm}
        </div>
        <div style={pokeCards}>
          {
            this.state.pokemonSpecies
            .filter((pokemon) => {
              return pokemon.name.includes(this.state.searchTerm)
            })
            .map((pokemon, i) => {
              return (
                <Tile
                  style={tileStyle}
                  name={pokemon.name}
                  image={getSprite(pokemon.name)}
                  />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
