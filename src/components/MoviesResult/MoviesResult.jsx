import React from 'react';

import block from 'bem-css-modules';
import { default as MoviesResultStyles} from './MoviesResult.module.scss'

import MovieCard from '../MovieCard/MovieCard';

const style = block(MoviesResultStyles)

const MovieList = ({movie}) => {

   

    return ( 
        
                   
                    <ul className={style()}>
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                            <h2>{movie.title}</h2>
                        </li>
                    </ul>
                
        
     );
}
 
export default MovieList;