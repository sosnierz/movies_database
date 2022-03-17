import React from 'react';

import block from 'bem-css-modules';
import { default as MoviesToWatchStyles} from './MoviesToWatch.module.scss';
import Buttons from '../Buttons/Buttons';
const style = block(MoviesToWatchStyles)



const MoviesToWatch = ({ movie, data }) => {
  
  return (
    <div className={style('')}>
    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>  
    <Buttons movie={movie} data={data}  />
    </div>  
  )
}


 
export default MoviesToWatch;