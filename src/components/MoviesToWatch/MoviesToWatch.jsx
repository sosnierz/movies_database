import React from 'react';

import Buttons from './Buttons/Buttons';

import block from 'bem-css-modules';
import { default as MoviesToWatchStyles} from './MoviesToWatch.module.scss';

const style = block(MoviesToWatchStyles)



const MoviesToWatch = ({ movie, data }) => {
  
  return (
    <div className={style('')}>
    <div className={style('img')}>
    <img className={style('image')} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
    </div>  
    <Buttons movie={movie} data={data}  />
    </div>  
  )
}


 
export default MoviesToWatch;