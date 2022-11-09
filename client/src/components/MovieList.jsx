import React from 'react';
import MovieListItem from '/client/src/components/MovieListItem.jsx';

const MovieList = ({movies}) => (
  <div>
    <h3 className="movielisttitle">List of Movies</h3>
    <div className="movielist">
    {movies.map((movie) => {
      return(
        <MovieListItem movie={movie}/>
      );
    })}
    </div>
  </div>

);

export default MovieList;