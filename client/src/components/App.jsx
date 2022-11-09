import React from 'react';
import AddMovie from '/client/src/components/AddMovie.jsx';
import Search from '/client/src/components/Search.jsx';
import MovieList from '/client/src/components/MovieList.jsx';

const {useState} = React;

const App = (props) => {
  let movieData = [
    // {title: 'Mean Girls'},
    // {title: 'Hackers'},
    // {title: 'The Grey'},
    // {title: 'Sunshine'},
    // {title: 'Ex Machina'},
    // {title: 'Lord of The Rings'},
    // {title: 'Star Wars'},
    // {title: 'The Gray Man'},
    // {title: 'Bullet Train'},
    // {title: 'Watcher'},
    // {title: 'All Quiet on the Western Front'},
    // {title: 'Descendant'},
    // {title: 'The Good Nurse'},
    // {title: 'Ticket to Paradise'},
    // {title: 'Cars'},
    // {title: 'Carter'},
    // {title: 'Super Pets'},
    // {title: 'Dr.Strange'},
    // {title: 'Day Shift'},
    // {title: 'Ambulance'},
    // {title: 'Massive Talent'},
    // {title: 'Elvis'},
    // {title: 'Sell/Buy/Data'},
    // {title: 'Policeman'},
    // {title: 'Orphan: First Kill'},
    // {title: 'Unhuman'},
    // {title: 'Scream'},
    // {title: 'Halloween Ends'},
    // {title: 'Fresh'},
    // {title: 'The Lost City'},
    // {title: 'Rise'},
    // {title: 'Luckiest Girl Alive'},
    // {title: 'Thirteen Lives'},
    // {title: 'Father Stu'},
    // {title: 'The Outfit'},
    // {title: 'Hustle'},
    // {title: 'The Northman'},
    // {title: 'Black Crab'},
    // {title: 'Morbius'},
    // {title: 'Prey'},
    // {title: 'Uncharted'},
    // {title: 'Luck'},
    // {title: 'The Bad Guys'},
    // {title: 'Cheaper By The Dozen'},
    // {title: 'Sonic 2'},
    // {title: 'LightYear'},

  ];

  const [movies, setMovieData] = useState(movieData);
  const [displayedMovies, setDisplayedMovies] = useState(movies);

  const addMovie = (event) => {
    event.preventDefault();
    movieData = movies;
    let movieObj = {
      title: event.target[0].value
    };

    movieData.push(movieObj);
    setMovieData(movieData);
  }

  const searchMovies = (e) => {
    e.preventDefault();
    let curSearch = e.target[0].value.toLowerCase();
    let curMovies = [];
    for(var elements of movies) {
      if(elements.title.toLowerCase().includes(curSearch)) {
        curMovies.push(elements);
      }
    }

    if(curMovies.length === 0) {
      curMovies = [{title: "There are no movies by that title"}];
    }
    setDisplayedMovies(curMovies);
  };

  return (
<div>
  <h1 className="pagetitle">Movie List</h1>
    <AddMovie addMovie={(event) => (addMovie(event))}/>
    <hr/>
    <Search searchMovie={(e) => (searchMovies(e))}/>
    <hr/>
    <MovieList movies={displayedMovies}/>
</div>

);
  }


export default App;