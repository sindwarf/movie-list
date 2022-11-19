import React from 'react';
import AddMovie from '/client/src/components/AddMovie.jsx';
import Search from '/client/src/components/Search.jsx';
import MovieList from '/client/src/components/MovieList.jsx';
const axios = require('axios').default;
// import Parse from '/client/src/components/Parse.js';

const {useEffect, useState, forceUpdate} = React;

const App = (props) => {

  const [isWatchedFilter, setIsWatchedFilter] = useState(false);
  const [movies, setMovieData] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState(movies);
  const [stateChange, setState] = useState(true);

  useEffect(() => {//triggers on initial render
    axios.get('http://localhost:3000/api/movies').then((response) => {
      //console.log(response.data);
      setMovieData(response.data);
      setDisplayedMovies(response.data);
      }).catch((err) => {
        console.log(err);
      });
  }, [stateChange]);





  const isWatched = (movie) => {
    movie.isWatched = !movie.isWatched;//wtf is this?
    axios.put('http://localhost:3000/api/movies', movie).then((response) => {
      toggleWatched(!movie.isWatched);
    }).catch((err) => {
      console.log(err);
    });

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
    axios.post('http://localhost:3000/api/movies', movieObj).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })

    setState(!stateChange);
    //setMovieData(movieData);
    //setDisplayedMovies(movieData);
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
      //console.log('current filter: ', isWatchedFilter + 'has been watched' + hasBeenWatched);

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