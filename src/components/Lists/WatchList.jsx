import React, { useContext } from 'react';
import MoviesToWatch from '../MoviesToWatch/MoviesToWatch';
import { MoviesContext } from '../../Context/MoviesProvider';


import block from 'bem-css-modules';
import { default as ListsStyles} from './Lists.module.scss'
const style = block(ListsStyles)

const WatchList = () => {
    const { watchlist, clearWatchlist } = useContext(MoviesContext);
	
	return (
		<div className={style('')}>				
		<h2 className={style('title')}>My Watchlist</h2>
			
			<button 
				className={style('btnClear')}
				onClick={()=>clearWatchlist()}>
				Clear List
			</button>
			<hr className={style('line')}/>
			<div className={style('list')}>
                  {watchlist.length < 1 ? 
				  <h3 className={style('emptyList')}>Your watchlist of movies is empty!  
				  <span className={style('text')}>Add some!</span>
				  </h3>:
				  watchlist.map((movie) => 
                  <MoviesToWatch key = {movie.id} movie= {movie} data="watchlist"/>)}
		    </div>
        </div>
	);
};
 
export default WatchList;