import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  render() {
  console.log(TMDB.films);
    return (
      <div className="film-library">
        <FilmList films={TMDB.films}/>
        <FilmDetails name={TMDB.films} />
      </div>
    );
 }

}

export default App;
