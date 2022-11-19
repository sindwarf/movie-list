import React from 'react';
import MovieListItem from '/client/src/components/MovieListItem.jsx';

const MovieList = ({movies, isWatched, toggleWatched}) => (
  <div>
    <h3 className="movielisttitle" ><button onClick={
      () => (toggleWatched(true))
    }>Watched</button><button onClick={
      () => (toggleWatched(false))
    }>To Watch</button></h3>
    <div className="movielist">
    {movies.map((movie) => {
      return(
        <MovieListItem movie={movie} isWatched={(movie) => (isWatched(movie))}/>
      );
    })}
    </div>
  </div>

);

export default MovieList;