import React, { useContext } from 'react';
import MoviesToWatch from '../MoviesToWatch/MoviesToWatch';
import { MoviesContext } from '../../Context/MoviesProvider';

import block from 'bem-css-modules';
import { default as WatchListStyles} from './WatchList.module.scss'



const style = block(WatchListStyles)

const WatchList = () => {
    const { watchlist } = useContext(MoviesContext);

	return (
		<div className={style('')}>
			<h1 >My Watchedlist</h1>
			<div >
                  {watchlist.length < 1 ? <h2>Your watchedlist of movies is empty! Add some!</h2>:
                    watchlist.map((movie) => 
                    <MoviesToWatch key = {movie.id} movie= {movie} data="watchlist"/>)}
		    </div>
        </div>
	);
};
 
export default WatchList;