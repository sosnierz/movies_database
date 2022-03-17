import React, { useContext } from 'react';

import { MoviesContext } from '../../Context/MoviesProvider';

import block from 'bem-css-modules';
import { default as WatchedStyles} from './Watched.module.scss';
const style = block(WatchedStyles)

const Watched = () => {
    const { watched, addToWatchlist, removeFromWatched } = useContext(MoviesContext);

	return (
		<div className={style('')}>
			<h1 >My Watchedlist</h1>
			<div >
                  {watched.length <1 ? <h2>Your watchedlist of movies is empty! Add some!</h2>:
                    watched.map((movie) => 
                                 
                        <div className={style('footer')}>
                            <button onClick={() => handleOnClick(movie.title, movie.overview, movie.poster_path, movie.release_date,  movie.vote_average)}>More info</button>
                            <button
                            onClick={() => removeFromWatched(movie.id) }>Remove from watched</button>
                            <button  
                            onClick={() =>addToWatchlist(movie)}>  Add to watchlist
                            </button>  
                        </div> 
                </div>)}
		    </div>
        </div>
	);
};
 
export default Watched;