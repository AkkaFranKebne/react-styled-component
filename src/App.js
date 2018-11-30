import React, { Component } from 'react';
import Button from './components/common/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Basic Button</Button>
        <Button danger>Danger Button</Button>
      </div>
    );
  }
}

export default App;
