import React from 'react';

import block from 'bem-css-modules';
import { default as WatchListStyles} from './WatchList.module.scss'

const style = block(WatchListStyles)

const Header = () => {
    return ( 
        <main className={style()}>
            hello
        </main>
     );
}
 
export default Header;