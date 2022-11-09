import React from 'react';

const MovieListItem = ({movie}) => (
  <div className="movielistitem">
    <div>{movie.title}</div>
  </div>
);

export default MovieListItem;