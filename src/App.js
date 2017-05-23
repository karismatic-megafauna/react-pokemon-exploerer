import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from 'antd';
import { generation } from './pokemon';
import Tile from './Tile';

class App extends React.Component {
  render() {
    return (
      <Tile name="bulbasaur" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
    );
  }
}

export default App;
