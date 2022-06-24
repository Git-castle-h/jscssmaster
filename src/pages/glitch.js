import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function Glitch(props){
    useEffect(function(){
    },[])
    return(
        <div className="Glitch">
            <GlitchText text={'TEXT Glitch'}></GlitchText>
        </div>
    )

}

let white;
let red;
let blue;
let green;
let count = 0;
let glitchInterval;

function makeGlitchOn(evt){
console.log(evt.target);
console.log('on');
white = evt.target.querySelector('.white');
red = evt.target.querySelector('.red');
blue = evt.target.querySelector('.blue');
green = evt.target.querySelector('.green');

clearInterval(glitchInterval);

glitchInterval = setInterval(function(){
    evt.target.style.transform = 'skew(0deg) scale(1)';
    shakyScale(white);
    shakyScale(red);
    shakyScale(blue);
    shakyScale(green);

    shakyPos(red);
    shakyPos(blue);
    shakyPos(green);
    evt.target.style.transform = 'skew(0deg) scale(1)';
    if(count%15 ===0){
        ranBigSkew(evt.target);
    }
    count++;
},100)
    
}

function removeGlitch(evt){
    clearInterval(glitchInterval);
    console.log(evt.target);
    evt.target.style.transform = 'skew(0deg) scale(1)';
    resetTransform(white);
    resetTransform(red);
    resetTransform(blue);
    resetTransform(green);

}


function shakyScale(evt){
    let ranHeight = Math.random()* 10;
    evt.style.height = ranHeight*10+'%';
}



function shakyPos(evt){
    let ranLeft =Math.random()*5 + 47.5;
    let ranTop =Math.random()*3 + 48.5;
    let ranX = Math.random()* 3 -1.5;
    let ranY = Math.random()* 3 -1.5;
    let ranShadowX = Math.random()* 12 - 6;
    let ranShadowY = Math.random()* 5 -2.5;
    // let ranSkew = Math.random()* 5 - 2.5;
    evt.style.left = ranLeft+'%';
    evt.style.Top = ranTop+'%';
    evt.style.transform =  'translate('+(-50+ranX)+'%, '+(-50+ranY)+'%)';
    let colorName = evt.className.slice(5);
    evt.style.textShadow = ''+(ranShadowX/70)+'em '+(ranShadowY/70)+'em '+colorName+'';
}


function ranBigSkew(evt){
    let ranSkew = Math.random()* 150 - 75;
    evt.style.transform =  'skew('+ranSkew+'deg)';
}


function resetTransform(evt){
    evt.style.transform = 'translate(-50%, -50%)'
    evt.style.textShadow = 'none';
    evt.style.left = '50%';
    evt.style.top = '50%';
    evt.style.height ='100%';
    
}


function GlitchText(props){
    return(
        <div className="glitchWrap" onMouseEnter={makeGlitchOn} onMouseLeave={removeGlitch}>
        <div className="glitchText">
            <div className="text main"><span class="rel">{props.text}</span></div>
            <div className="text red"><span class="abs">{props.text}</span></div>
            <div className="text blue"><span class="abs">{props.text}</span></div>
            <div className="text green"><span class="abs">{props.text}</span></div>
            <div className="text white"><span class="abs">{props.text}</span></div>
        </div>
    </div>
    )
}


export{Glitch}
