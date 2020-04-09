import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.search(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" onChange={this.handleUpdate} className="form-search form-control" placeholder="Start searching..." />
    );
  }
}

export default SearchBar;
