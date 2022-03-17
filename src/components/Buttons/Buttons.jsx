import React, { useContext } from 'react';
import { MoviesContext } from '../../Context/MoviesProvider';

import block from 'bem-css-modules';
import { default as ButtonsStyles} from './Buttons.module.scss'




const style = block(ButtonsStyles)

const Buttons = ({movie, data}) => {
    const {addToWatched, addToWatchlist, removeFromWatched, removeFromWatchlist} = useContext(MoviesContext)
    
    return (
    
        <div className={style('')}>
        {data === "watched" && 
       (<><button
        onClick={() => removeFromWatched(movie.id) }>Remove from watched</button>
        <button  
        onClick={() =>addToWatchlist(movie)}>  Add to watchlist
        </button></>)}
        {data === "watchlist" &&
        (<><button
        onClick={() => removeFromWatchlist(movie.id) }>Remove from watchlist</button>
        <button  
        onClick={() =>addToWatched(movie)}>  Add to watched
        </button></>)}
       
    </div>  );
}
 
export default Buttons;