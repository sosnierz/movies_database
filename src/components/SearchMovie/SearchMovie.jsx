import React, { useState } from 'react';

import block from 'bem-css-modules';
import { default as SearchMovieStyles} from './SearchMovie.module.scss'

import MovieList from '../MovieList/MovieList';


const style = block(SearchMovieStyles)

const SearchMovie = () => {
    const[ input, setInput] = useState("");

    const handleInput =(e) =>{
        e.preventDefault();
        setInput(e.target.value);
    }
    return ( 
        <main className={style()}>
            <div className={style('content')}>
                <div className={style('wrapper-input')}>
                    <input type='text' 
                    placeholder='Search for a movie'
                    value={input}
                    onChange={handleInput}/>
                </div>
                <article>
                    <MovieList />
                </article>
            </div>   
      
        </main>
     );
}
 
export default SearchMovie;