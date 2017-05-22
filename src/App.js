import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from 'antd';
import { generation } from './pokemon';

class App extends React.Component {
  render() {
    return (
      // <Tile/>
        <Card title={generation.pokemon_species[120].name} extra={<a href="#">1</a>} style={{ width: 300 }}>
          <pre><code>{JSON.stringify(generation,null,2)}</code></pre>
        </Card>
    );
  }
}

export default App;
