import React from 'react';
import { getSprite } from 'pokemon-images';
import './App.css';
import { generation } from './pokemon';
import Tile from './Tile';

class App extends React.Component {
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
      <div style={pokeCards}>
        {
          generation.pokemon_species.map((pokemon, i) => {
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
    );
  }
}

export default App;
