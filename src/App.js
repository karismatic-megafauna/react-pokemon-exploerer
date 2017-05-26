import React from 'react';
import { getSprite } from 'pokemon-images';
import './App.css';
import { generation } from './pokemon';
import Tile from './Tile';
import { Input } from 'antd';
const Search = Input.Search;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
    }
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
    return (
      <div>
        <Search
          placeholder={this.state.searchTerm}
          style={{ width: 200 }}
          onSearch={value => this.setState({searchTerm: value})}
        />
        <div style={pokeCards}>
          {
            generation.pokemon_species
            .filter((pokemon) => {return pokemon.name.includes(this.state.searchTerm)})
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
