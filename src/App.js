import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from 'antd';

class App extends Component {
  render() {
    return (
        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
    );
  }
}

export default App;
