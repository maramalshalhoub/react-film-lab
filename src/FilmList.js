import React, { Component } from 'react';
import FilmRow from './FilmRow' 

class FilmList extends Component{
    render() {
        const allFilmsList= this.props.films.map((film,index)=> {
            return <FilmRow key ={index} films={film} />
        })
        
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilmsList}
            </div>
        );
    }
}
export default FilmList;