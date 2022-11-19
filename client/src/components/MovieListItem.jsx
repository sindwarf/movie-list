import React from 'react';

const MovieListItem = ({movie, isWatched}) => (
  <div className="movielistparent">
    <div className="movielistitem" >
      {/* Has {movie.isWatched ? 'been' : 'not been'} Watched */}
      <div className="movielistitem">{movie.title}</div>
      <button className ="iswatchedbutton" onClick={() => (isWatched(movie))}>{movie.isWatched ? 'Watched' : 'Not Watched'}</button>
    </div>
  </div>
);

export default MovieListItem;