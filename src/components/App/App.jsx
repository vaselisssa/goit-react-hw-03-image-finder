import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledApp } from './App.styled';
import SearchBar from 'components/SearchBar';
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
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          theme="colored"
        />
      </StyledApp>
    );
  }
}
