import React, { Component } from 'react';
import MovieList from './MovieList'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieList movies={this.props.movies}/>
      </div>
    )
  }
}

export default App;