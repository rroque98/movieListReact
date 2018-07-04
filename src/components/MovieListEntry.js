import React, { Component } from 'react';
import MovieList from './MovieList';

function MovieListEntry (props) {
  return (
    <div className="title">{props.movie.title}</div>
  )
}

export default MovieListEntry;