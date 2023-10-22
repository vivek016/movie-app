import React from 'react';
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "";

const App = () =>  {
  
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
   
    useEffect(() => {
        searchMovies('one Piece');
    },[]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    return(
        <div className="app">

            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for movies" 
                values={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='Search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ?
                (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h1>No Movie found</h1>
                    </div>
                )
            }
        </div>
    );
}

export default App;
