import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      console.log("clicked");
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    if (this.props.id) {
      return (
        <img src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`} onClick={this.handleClick} className="gif" alt="gif" />
      );
    }
    return null;
  }
}

export default Gif;
