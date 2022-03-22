import React from 'react';
import { NavLink } from 'react-router-dom'
import block from 'bem-css-modules';
import { default as HeaderStyles} from './Header.module.scss'

const style = block(HeaderStyles)

const list = [
   { name: "Search Movie", path: "/", exact: true },
   { name: "Watch List", path: "/watchlist" },
   { name: "Watched", path: "/watched" },
 ]
 
const Header = () => {
   const isActive = {
     textDecoration:"underline"
    };

   const menu = list.map(item => (
         <li key={item.name} className={style('link')}>
         <NavLink to={item.path} exact={item.exact ? item.exact : false} className={style('linkA')} activeStyle={isActive}>{item.name}</NavLink>
      </li>
    ))
    return ( 
        <header className={style()}>
           <nav className={style('nav')}>
               <h1 className={style('title')}>List of movies</h1>
               <ul className={style('links')}>
                  {menu}
                  
               </ul>
           </nav>
        </header>
     );
}
 
export default Header;