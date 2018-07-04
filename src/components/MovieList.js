import React, { Component } from 'react';
// import App from './App';
import MovieListEntry from './MovieListEntry';

function MovieList (props) {
  return (
    <div>
      {props.movies.map(movie =>
      <MovieListEntry key={movie.title} movie={movie} />)}
    </div>
  )
}

export default MovieList;