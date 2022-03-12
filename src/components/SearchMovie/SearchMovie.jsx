import React, { useState } from 'react';
import axios from 'axios';

// import MoviesResult from '../MoviesResult/MoviesResult';
import MovieCard from '../MovieCard/MovieCard';

import block from 'bem-css-modules';
import { default as SearchMovieStyles} from './SearchMovie.module.scss';
const style = block(SearchMovieStyles)

const SearchMovie = () => {
    const[input, setInput] = useState("");
    const [movieData, setMovieData] = useState([])
    const [results, setResults] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const apiURL = "https://api.themoviedb.org/3/search/movie";

    const handleInput =(e) =>{
        e.preventDefault();
        setInput(e.target.value);
     
          axios.get(apiURL, {
            params: {
              api_key: '2f48aca7b5860716e40825be5af179b4',
              query: `${e.target.value}`
            }
          }).then(res => {
            setResults(res.data.results);
            console.log(results)
                 
          });
        };
    
        const handleOnClose =() => setIsModalOpen(false);
       
       
        const handleOnClick =(title, overview, poster_path, release_date, vote_average) =>{
          let data = [title, overview, poster_path, release_date, vote_average]
          console.warn(data);
          setMovieData(movie=> [1, ...data])
          
          return setIsModalOpen(true);
      
        }
         
        
        const movies = results.map(movie => (
        <li key={movie.id} movieId={movie.id} {...movie} movie={movie}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <button onClick={() => handleOnClick(movie.title, movie.overview, movie.poster_path, movie.release_date,  movie.vote_average)}>More info</button>
        <button>Add to Watchlist</button>
        <button>Add to watched</button>      
        </li>
     ))
    
    return ( 
        <main className={style()}>
            <div className={style('content')}>
                <div className={style('wrapper-input')}>
                    <input type='text' 
                    placeholder='Search for a movie'
                    value={input}
                    onChange={handleInput}/>
                </div>
                {movies.length>0?<section>
                    <h1>Results: </h1>
                      {movies}
                </section> : null}
            </div> 

            <MovieCard handleOnClose={handleOnClose} isModalOpen={isModalOpen}  title={movieData[1]} overview={movieData[2]} poster_path = {movieData[3]} release_date={movieData[4]} vote_average={movieData[5]} />
        </main>
     );
}
 
export default SearchMovie;