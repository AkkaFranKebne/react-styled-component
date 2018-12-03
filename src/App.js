import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/common/Button';
import PasswordInput from './components/common/PasswordInput';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';
import './App.css';

class App extends Component {
  state = {
    theme: LightTheme
  };
  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === 'light' ? DarkTheme : LightTheme
    });
  };
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={LightTheme}>
          <Button danger>Danger Button</Button>
        </ThemeProvider>
        <ThemeProvider theme={LightTheme}>
          <Button>light theme</Button>
        </ThemeProvider>
        <ThemeProvider theme={DarkTheme}>
          <Button>dark theme</Button>
        </ThemeProvider>
        <ThemeProvider theme={this.state.theme}>
          <Button onClick={this.handleToggleTheme}>toggle theme</Button>
        </ThemeProvider>
        <PasswordInput />
      </div>
    );
  }
}

export default App;
