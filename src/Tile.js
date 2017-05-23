import React from 'react';
import PropTypes from 'prop-types';

class Tile extends React.Component {
  render() {
    return (
      // <Card title={generation.pokemon_species[120].name} extra={<a href="#">1</a>} style={{ width: 300 }}>
      //   <pre><code>{JSON.stringify(generation,null,2)}</code></pre>
      // </Card>

      <div>
        {this.props.name}
        <img src={this.props.image} alt={`thumbnail of ${this.props.name}`}/>
      </div>
    );
  }
}

Tile.propTypes = {
  name:  PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Tile.defaultProps = {
  name:  'eevee',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png',
}

export default Tile;
