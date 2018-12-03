import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ButtonStyled from './components/common/Button';
import PrimaryBootstrapButton from './components/common/PrimaryBootstrapButton';
import PasswordInput from './components/common/PasswordInput';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  state = {
    theme: LightTheme,
    showPassword: false
  };
  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === 'light' ? DarkTheme : LightTheme
    });
  };
  handleToggleShowPass = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={LightTheme}>
          <ButtonStyled danger>Danger Button</ButtonStyled>
        </ThemeProvider>
        <ThemeProvider theme={LightTheme}>
          <ButtonStyled>light theme</ButtonStyled>
        </ThemeProvider>
        <ThemeProvider theme={DarkTheme}>
          <ButtonStyled>dark theme</ButtonStyled>
        </ThemeProvider>
        <ThemeProvider theme={this.state.theme}>
          <section>
            <ButtonStyled onClick={this.handleToggleTheme}>toggle theme</ButtonStyled>
            <PasswordInput showPassword={this.state.showPassword} />
            <ButtonStyled onClick={this.handleToggleShowPass}>{this.state.showPassword ? 'hide pass' : 'show pass'}</ButtonStyled>
            <Button color="primary">Primary Bootstrap Button</Button>
            <PrimaryBootstrapButton>Primary Bootstrap Button Modified</PrimaryBootstrapButton>
          </section>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
