import React, {useContext, useState} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { MoviesContext } from '../../Context/MoviesProvider';

import block from 'bem-css-modules';
import { default as MoviesListStyles} from './MoviesList.module.scss'
const style = block(MoviesListStyles)

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MoviesList = ({movie}) => {
  
  const {watched, watchlist, addToWatched, addToWatchlist} = useContext(MoviesContext); 
  const [movieData, setMovieData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClose =() => setIsModalOpen(false);  
  const handleOnClick =(
    title, 
    overview, 
    poster_path, 
    release_date, 
    vote_average) =>{
      
      let data = [title, overview, poster_path, release_date, vote_average]
      setMovieData(movie=> [1, ...data])
      return setIsModalOpen(true);
    }
    
   
    const movieInList = watchlist.find((x) => x.id === movie.id);
    const movieInWatched = watched.find((x) => x.id === movie.id);
  
     const disabledWatchList = movieInList ? true: false;
     const disabledWatched = movieInWatched? true: false;
  
 
  
 
       
   
    return (   
        <li className={style('')}>
          <h3 className={style('title')}>{movie.title}</h3>
          <div className={style('wrapper-img')}>
              <img className={style('img')} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
          </div>
         
          <div className={style('btn-group')}>
              <button className={style('btn')} 
              onClick={() => handleOnClick
              (movie.title, 
              movie.overview, 
              movie.poster_path, 
              movie.release_date, 
              movie.vote_average)}>
              <FontAwesomeIcon className={style('icon-info')} icon={faInfo} /></button>
                
             <button className={style('btn')}  
              disabled={disabledWatchList}
              onClick={() => {addToWatchlist(movie)}}>
              <FontAwesomeIcon className={style('icon')} icon={faPlus} />watchlist</button>
           
              <button className={style('btn')}  
              disabled={disabledWatched}
              onClick={() => {addToWatched(movie)}}>
              <FontAwesomeIcon className={style('icon')} icon={faPlus} />watched</button>  
          </div> 
        
          <MovieCard 
          handleOnClose={handleOnClose} 
          isModalOpen={isModalOpen}  
          title={movieData[1]} 
          overview={movieData[2]} 
          poster_path = {movieData[3]} 
          release_date={movieData[4]} 
          vote_average={movieData[5]} 
          movie={movie}/>    
        </li>);
}
 
export default MoviesList;