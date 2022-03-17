import React, { useContext } from 'react';
import MoviesToWatch from '../MoviesToWatch/MoviesToWatch';
import { MoviesContext } from '../../Context/MoviesProvider';

import block from 'bem-css-modules';
import { default as WatchListStyles} from './WatchList.module.scss'



const style = block(WatchListStyles)

const WatchList = () => {
    const { watchlist, addToWatched, removeFromWatchlist } = useContext(MoviesContext);

	return (
		<div className={style('')}>
			<h1 >My Watchedlist</h1>
			<div >
                  {watchlist.length < 1 ? <h2>Your watchedlist of movies is empty! Add some!</h2>:
                    watchlist.map((movie) => 
                   <div>
                        <MoviesToWatch key = {movie.id} movie= {movie}/>                  
                        <div className={style('footer')}>
                            <button onClick={() => handleOnClick(movie.title, movie.overview, movie.poster_path, movie.release_date,  movie.vote_average)}>More info</button>
                            <button
                            onClick={() => removeFromWatchlist(movie.id) }>Remove from watchlist</button>
                            <button  
                            onClick={() =>addToWatched(movie)}>  Add to watched
                            </button>  
                        </div> 
                </div>)}
		    </div>
        </div>
	);
};
 
export default WatchList;