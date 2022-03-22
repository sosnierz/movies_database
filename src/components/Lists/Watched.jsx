import React, { useContext } from 'react';
import MoviesToWatch from '../MoviesToWatch/MoviesToWatch';
import { MoviesContext } from '../../Context/MoviesProvider';

import block from 'bem-css-modules';
import { default as ListsStyles} from './Lists.module.scss'
const style = block(ListsStyles)

const Watched = () => {
    const { watched, clearWatched } = useContext(MoviesContext);

       

	return (
		<div className={style('')}>				
        	<h2 className={style('title')}>My Watchedlist</h2>
			<button 
				className={style('btnClear')}
				onClick={()=>clearWatched()}>
				Clear List
			</button>
			<hr className={style('line')}/>
			<div className={style('list')}>
          		{watched.length <1 ? 
				<h3 className={style('emptyList')}>Your watchedlist of movies is empty! 
				<span className={style('text')}>Add some!</span>
				</h3>:
          		watched.map((movie) => 
          			<MoviesToWatch key = {movie.id} movie= {movie} data="watched"/>)}
			</div>
    	</div>
	);
};
 
export default Watched;