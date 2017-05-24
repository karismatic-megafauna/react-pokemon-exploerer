import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';

class Tile extends React.Component {
  render() {
    return (
      <Card
        bodyStyle={{
          display: 'flex',
          justifyContent: 'center'
        }}
        title={this.props.name}
        style={{...this.props.style, width: 300 }}
      >
        <img src={this.props.image} alt={`thumbnail of ${this.props.name}`}/>
      </Card>
    );
  }
}

Tile.propTypes = {
  name:  PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
}

Tile.defaultProps = {
  name:  'eevee',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png',
}

export default Tile;
