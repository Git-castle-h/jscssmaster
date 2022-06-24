import React from 'react';
import {Link} from 'react-router-dom';

function Header (){
    return(
        <header>
            <Link to ='/'><li>Main</li></Link>
            <Link to ='/jscssmaster/fillup'><li>Fillup</li></Link>
            <Link to ='/jscssmaster/ripple'><li>Ripple</li></Link>
            <Link to ='/jscssmaster/pathanime'><li>PathAnime</li></Link>
            <Link to ='/jscssmaster/tingle'><li>Tingle</li></Link>
            <Link to ='/jscssmaster/textflow'><li>Textflow</li></Link>
            <Link to ='/jscssmaster/glitch'><li>Glitch</li></Link>
            <Link to ='/jscssmaster/painter'><li>Painter</li></Link>
        </header>

    )
}

export {Header};