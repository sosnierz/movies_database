import React from 'react';

import block from 'bem-css-modules';
import { default as HeaderStyles} from './Header.module.scss'

const style = block(HeaderStyles)

const Header = () => {
    return ( 
        <header className={style()}>
            hello
        </header>
     );
}
 
export default Header;