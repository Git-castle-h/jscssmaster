import React from 'react';
import {Link} from 'react-router-dom';

function Header (){
    return(
        <header>
            <Link to ='/'><li>Main</li></Link>
            <Link to ='/fillup'><li>Fillup</li></Link>
            <Link to ='/ripple'><li>Ripple</li></Link>
            <Link to ='/pathanime'><li>PathAnime</li></Link>
            <Link to ='/tingle'><li>Tingle</li></Link>
            <Link to ='/textflow'><li>Textflow</li></Link>
            <Link to ='/glitch'><li>Glitch</li></Link>
            <Link to ='/painter'><li>Painter</li></Link>
        </header>

    )
}

export {Header};