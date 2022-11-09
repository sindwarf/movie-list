import React from 'react';

const AddMovie = ({addMovie}) => {

  return(
    <div className="addmovie">
      <form onSubmit={
        (event) => (addMovie(event))
      } type="text">
        <input type="text"/>
        <input type="submit" value="Add"/>
      </form>
    </div>
  );
}

export default AddMovie;