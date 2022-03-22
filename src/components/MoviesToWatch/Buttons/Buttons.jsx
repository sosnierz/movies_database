import React, { useContext } from 'react';
import { MoviesContext } from '../../../Context/MoviesProvider';

import block from 'bem-css-modules';
import { default as MoviesToWatchStyles} from '../MoviesToWatch.module.scss';

const style = block(MoviesToWatchStyles)


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';




const Buttons = ({movie, data}) => {
    const {addToWatched, addToWatchlist, removeFromWatched, removeFromWatchlist} = useContext(MoviesContext)
    
    return (
    
      <div className={style('buttons')}>
          {data === "watched" && 
          (<><button 
            className={style('trash')} 
            onClick={() => removeFromWatched(movie.id) }>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button 
            className={style('transfer')}  
            onClick={() =>addToWatchlist(movie)}>  
            <FontAwesomeIcon className={style('icon')} icon={faArrowRightLong} /> 
            watchlist
          </button></>)}
          {data === "watchlist" &&
          (<><button 
            className={style('trash')}
            onClick={() => removeFromWatchlist(movie.id) }>
            <FontAwesomeIcon  icon={faTrashCan} />
          </button>
          <button 
            className={style('transfer')}  
            onClick={() =>addToWatched(movie)}>  
            <FontAwesomeIcon className={style('icon')} icon={faArrowRightLong} /> 
            watched
          </button></>)}
       
      </div>);
}
 
export default Buttons;