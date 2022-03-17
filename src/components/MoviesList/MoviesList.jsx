import React, {useContext, useState} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { MoviesContext } from '../../Context/MoviesProvider';


import block from 'bem-css-modules';
import { default as MoviesListStyles} from './MoviesList.module.scss'
const style = block(MoviesListStyles)



const MoviesList = ({movie}) => {
  
  const {addToWatched, addToWatchlist} = useContext(MoviesContext);

  const [disabledWatchList, setDisabledWatchList] = useState(false);
  const [disabledWatched, setDisabledWatched] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClose =() => setIsModalOpen(false);  
  const handleOnClick =(title, overview, poster_path, release_date, vote_average) =>{
      let data = [title, overview, poster_path, release_date, vote_average]
      setMovieData(movie=> [1, ...data])
      return setIsModalOpen(true);
    }
    
       
   
    return (   
        <li className={style('')}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <button onClick={() => handleOnClick(movie.title, movie.overview, movie.poster_path, movie.release_date,  movie.vote_average)}>More info</button>
        <div className={style('footer')}>
        <button  disabled={disabledWatchList}
          onClick={() => {addToWatchlist(movie);  setDisabledWatchList(true)}}>Add to watchlist
        </button>
        <button  
         disabled={disabledWatched}
         onClick={() => {addToWatched(movie);  setDisabledWatched(true);}}>  Add to watched
       </button>  
    </div> 
        <MovieCard handleOnClose={handleOnClose} isModalOpen={isModalOpen}  title={movieData[1]} overview={movieData[2]} poster_path = {movieData[3]} release_date={movieData[4]} vote_average={movieData[5]} movie={movie}/>    
        </li>);
}
 
export default MoviesList;