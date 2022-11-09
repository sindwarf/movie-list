import React from 'react';

const Search = ({searchMovie}) => (
  <div className="search">
    <form onSubmit={(e) => {return (searchMovie(e));}
  } type="text">
      <input type="text"/>
      <input type="submit" value="Go!"/>
    </form>
  </div>

);

export default Search;

{/* <div className="search-bar form-inline">
<input className="form-control" type="text" />
<button className="btn hidden-sm-down">
  <span className="glyphicon glyphicon-search"></span>
</button>
</div>  */}