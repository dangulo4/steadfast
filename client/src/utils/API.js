import React, { Component } from 'react';
import axios from 'axios';

const APIKey = 'a93bc93acd1ba3cc69a1814f7ee909396256fca3';
const API_URL = 'https://api.hunter.io/v2/domain-search?domain=';

class Search extends Component {
  state = {
    query: '',
    results: [],
  };

  getInfo = () => {
    axios
      .get(`${API_URL}&{this.state.query}&api_key=${APIKey}`)
      .then(({ data }) => {
        this.setState({
          results: data.data,
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={(input) => this.search - input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;
