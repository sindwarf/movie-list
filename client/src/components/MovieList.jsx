import React from 'react';
import MovieListItem from '/client/src/components/MovieListItem.jsx';

const MovieList = ({movies}) => (
  <div>
    <h3>List of Movies</h3>
    <div>
    {movies.map((movie) => {
      return(
        <MovieListItem movie={movie}/>
      );
    })}
    </div>
  </div>

);

export default MovieList;