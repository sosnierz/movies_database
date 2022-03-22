import React from 'react';
import Modal from '../Modal/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';


import block from 'bem-css-modules';
import { default as MovieCardStyles} from './MovieCard.module.scss';
const style = block(MovieCardStyles)



const MovieCard = ({ handleOnClose, isModalOpen, title, overview, poster_path, release_date,  vote_average}) => {
  
  const handleOnCloseModal = e =>{
    e.preventDefault();
    handleOnClose();
}

return (
  <Modal 
  handleOnClose={handleOnClose} 
  isOpen={isModalOpen} 
  shouldBeCloseOnOutsideClick={true}>
          <section className={style()}>
              <button 
              onClick={handleOnCloseModal} 
              className={style('button')}> 
              <FontAwesomeIcon 
              className={style('icon-info')} 
              icon={faSquareXmark} />
              </button>
              <div className={style('container')}>
                <div className={style('img')}>
                  <img className={style('image')}src={`https://image.tmdb.org/t/p/w200${poster_path}`} />  
                </div>
                <div className={style('content')}>
                  <h4 className={style('title')}>{title}</h4>
                  <div className={style('information')}>
                    <span>About:</span>
                    <span>{overview}</span>
                   
                    <span>Premiere:</span>
                    <span>{release_date}</span>
  
                    <span>Ranking:</span>
                    <span> {vote_average}</span>
                  </div>
                </div>
            </div>
         </section>      
  </Modal>
);
}
 
export default MovieCard;