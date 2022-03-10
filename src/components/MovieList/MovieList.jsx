import React from 'react';

import block from 'bem-css-modules';
import { default as MovieListStyles} from './MovieList.module.scss'

import MovieCard from '../MovieCard/MovieCard';

const style = block(MovieListStyles)

const MovieList = () => {
    return ( 
        <ul className={style()}>
            <MovieCard />
        </ul>
     );
}
 
export default MovieList;