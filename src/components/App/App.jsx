import React, { Component } from 'react';

import { StyledApp } from './App.styled';
import Searchbar from 'components/Searchbar';
export default class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </StyledApp>
    );
  }
}
