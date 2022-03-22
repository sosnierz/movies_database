import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import block from 'bem-css-modules';
import { default as FooterStyles} from './Footer.module.scss'
const style = block(FooterStyles)

const Footer = () => {
    return (
        <footer className={style()}>
        <FontAwesomeIcon icon={faCopyright} className={style('icon')}/>
        <p className={style('text')}>2022</p>       
        </footer>
      );
}
 
export default Footer;
