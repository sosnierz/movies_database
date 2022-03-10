import React from 'react';

import block from 'bem-css-modules';
import { default as MovieCardStyles} from './MovieCard.module.scss'



const style = block(MovieCardStyles)

const Movie = () => {
    return ( 
        <li className={style()}>
           movie
        </li>
     );
}
 
export default Movie;