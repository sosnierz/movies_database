import React, { useState } from 'react';
import axios from 'axios';
import MoviesList from '../MoviesList/MoviesList';

import block from 'bem-css-modules';
import { default as SearchMovieStyles} from './SearchMovie.module.scss';

const style = block(SearchMovieStyles)

const SearchMovie = () => {
    const[input, setInput] = useState("");
    const [results, setResults] = useState([]);
     

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
  
        const movies = results.map(movie => (
       <MoviesList key={movie.id}  movie={movie}/>
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
        </main>
     );
}
 
export default SearchMovie;