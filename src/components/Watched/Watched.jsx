import React from 'react';

import block from 'bem-css-modules';
import { default as WatchedStyles} from './Watched.module.scss'

const style = block(WatchedStyles)

const Header = () => {
    return ( 
        <main className={style()}>
            hello
        </main>
     );
}
 
export default Header;