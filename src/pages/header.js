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
            <Link to ='/jscssmaster/cursor'><li>Cursor</li></Link>
            <Link to ='/jscssmaster/textanime'><li>TextAnime</li></Link>
            <Link to ='/jscssmaster/particle'><li>Particle</li></Link>
            <Link to ='/jscssmaster/imagegrid'><li>ImageGrid</li></Link>
        </header>

    )
}

export {Header};