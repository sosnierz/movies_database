import React, { useContext } from 'react';
import MoviesToWatch from '../MoviesToWatch/MoviesToWatch';
import { MoviesContext } from '../../Context/MoviesProvider';

import block from 'bem-css-modules';
import { default as WatchedStyles} from './Watched.module.scss';
const style = block(WatchedStyles)

const Watched = () => {
    const { watched, clearWatched } = useContext(MoviesContext);

       

	return (
		<div className={style('')}>
			<h1 >My Watchedlist</h1>
           <button onClick={()=>clearWatched()}>Clear All Watched</button>
			<div >
                  {watched.length <1 ? <h2>Your watchedlist of movies is empty! Add some!</h2>:
                    watched.map((movie) => 
                    <MoviesToWatch key = {movie.id} movie= {movie} data="watched"/>)}
		    </div>
        </div>
	);
};
 
export default Watched;