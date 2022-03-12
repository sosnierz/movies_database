import React from 'react';
import {Link} from 'react-router-dom'
import block from 'bem-css-modules';
import { default as HeaderStyles} from './Header.module.scss'

const style = block(HeaderStyles)

const Header = () => {
    return ( 
        <header className={style()}>
           <nav>
               <h1>List of movies</h1>
               <ul>
                  <li> <Link to="/">Search Movies</Link></li>
                  <li> <Link to="/watchlist">Watch List</Link></li>
                  <li> <Link to="/watched">Watched</Link></li>
                  
               </ul>
           </nav>
        </header>
     );
}
 
export default Header;