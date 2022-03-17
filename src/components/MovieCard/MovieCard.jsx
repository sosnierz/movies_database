import React from 'react';

import Modal from '../Modal/Modal';


import block from 'bem-css-modules';
import { default as MovieCardStyles} from './MovieCard.module.scss';
const style = block(MovieCardStyles)



const MovieCard = ({ handleOnClose, isModalOpen, title, overview, poster_path, release_date,  vote_average}) => {
  
  const handleOnCloseModal = e =>{
    e.preventDefault();
    handleOnClose();
}

return (
  <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeCloseOnOutsideClick={true}>
          <div className={style('content')}>
          <div className={style('header')}>
            <h4 className={style('title')}>{title}</h4>
            <button onClick={handleOnCloseModal} className={style('button')}>X</button>
          </div>
          <div className={style('body')}>
              <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
                <p>About: {overview}</p>
                <p>Premiere:{release_date}</p>
                <p>Ranking: {vote_average}</p>

          </div>
         
        </div> 

     
 </Modal>
    )
}
 
export default MovieCard;