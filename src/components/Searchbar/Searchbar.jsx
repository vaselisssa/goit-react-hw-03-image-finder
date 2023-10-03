import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  StyledSearchbar,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      alert('Enter your query!');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <StyledSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <ImSearch size="2em" />
            <SearchBtnLabel />
          </SearchBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </StyledSearchbar>
    );
  }
}
