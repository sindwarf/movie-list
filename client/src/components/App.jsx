import React from 'react';
import AddMovie from '/client/src/components/AddMovie.jsx';
import Search from '/client/src/components/Search.jsx';
import MovieList from '/client/src/components/MovieList.jsx';
const axios = require('axios').default;
// import Parse from '/client/src/components/Parse.js';

const {useEffect, useState, forceUpdate} = React;

const App = (props) => {


  let movieData = [];

  const [isWatchedFilter, setIsWatchedFilter] = useState(false);
  const [movies, setMovieData] = useState(movieData);
  const [displayedMovies, setDisplayedMovies] = useState(movies);

  //  TODO write get and set function

  const isWatched = (movie) => {
    movie.isWatched = !movie.isWatched;
    toggleWatched(!movie.isWatched);
  }

  const addMovie = (event) => {
    event.preventDefault();
    let movieData = [...movies];
    let movieObj = {
      title: event.target[0].value,
      isWatched: false
    };
    //use axios
    //movieData.push(movieObj);
    //write set function here
    axios.get('/api/movies').then((response) => {
      setMovieData(movieData);
      setDisplayedMovies(movieData);
    }).catch((err) => {
      console.log(err);
    });
  }

  const searchMovies = (e) => {
    e.preventDefault();
    let curSearch = e.target[0].value.toLowerCase();
    filterDisplayedMovies(isWatchedFilter, curSearch);
  };

  const filterDisplayedMovies = (hasBeenWatched, searchValue = '') => {
    let curMovies = [];
    for(let elements of movies) {
      if(elements.isWatched === hasBeenWatched && elements.title.toLowerCase().includes(searchValue)) {
        curMovies.push(elements);
      }
      console.log('is watched on elements', elements.isWatched);
      console.log('current filter: ', isWatchedFilter + 'has been watched' + hasBeenWatched);

    }
    if(curMovies.length === 0) {
      alert('There are no movies by that title');
    }
    setDisplayedMovies(curMovies);
  };


  const toggleWatched = (toWatch) => {
    setIsWatchedFilter(toWatch);
    filterDisplayedMovies(toWatch);
    };



  return (
<div>
  <h1 className="pagetitle">Movie List</h1>
    <AddMovie addMovie={(event) => (addMovie(event))}/>
    <hr/>
    <Search searchMovie={(e) => (searchMovies(e))}/>
    <hr/>
    <MovieList movies={displayedMovies} isWatched={(movie) => (isWatched(movie))} toggleWatched={(toWatch) => toggleWatched(toWatch)}/>
</div>

);
  }


export default App;