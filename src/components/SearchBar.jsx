import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchString: '',
  };

  onInputChange = (event) => {
    this.setState({searchString: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSumbit(this.state.searchString);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className='form-group mt-2'>
            <label htmlFor='searchInput'>Search Youtube Videos.</label>
            <input
              type='text'
              className='form-control'
              placeholder='Start searching..'
              value={this.state.searchString}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
