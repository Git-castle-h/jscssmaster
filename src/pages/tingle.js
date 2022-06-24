import React from 'react';
import {useState,useEffect,componentDidMount} from 'react';

function Tingle(){

    useEffect(function(){

    },[])
    return(
        <div className="Tingle">
            <div className="tingleWrap">
                <TingleBox text ={'안녕하세요'}></TingleBox>
                <TingleBox></TingleBox>
            </div>
        </div>
    )
}

let tingleBox;
let tingleCircle;
let tingleRect;
let centerX;
let centerY;
let mouseX;
let mouseY;
let pos;
let offset;
let move;
let text;
let gradient;
function mouseOn(event){

}

function TingleBox(props){
    return(
    <div className="tingleBox">
        <div className="tingleCircle" onMouseDown={circleDown} onMouseMove={circleMove} onMouseLeave={mouseCircleup} onMouseUp={mouseCircleup}>
            <div className='gradient'></div>
            <span className="text">{props.text}</span>
        </div>
    </div>
    )
}


function circleDown(event){
    event.preventDefault();

    move = true;
    // console.log(event.target.classList.contains('.tingleBox'));
    tingleBox = event.target.parentElement;
    for( ; event.target.parentElement.className !== 'tingleBox'; tingleBox = tingleBox.parentElement);
    // console.log(event.target);
    // console.log(tingleBox);
    tingleCircle  = event.target;
    tingleRect = tingleBox.getBoundingClientRect();
    text = tingleBox.querySelector('.text');
    gradient = tingleBox.querySelector('.gradient');
    console.log(gradient);
    centerX = tingleRect.width;
    centerY = tingleRect.height;
    //  mouseX = event.nativeEvent.clientX;
    //  mouseY = event.nativeEvent.clientY;
     
    offset = [
        event.target.offsetLeft - event.nativeEvent.clientX,
        event.target.offsetTop - event.nativeEvent.clientY
    ];

    //  posX = mouseX - (centerX/2);
    //  posY = mouseY - (centerY/2);
    // console.log(mouseX);
}


function circleMove(event){
    if(move == true){

        pos = {
            x : event.nativeEvent.clientX,
            y : event.nativeEvent.clientY
        }
        // console.log(pos.x);
        event.target.style.left = (pos.x + offset[0])+'px'; 
        event.target.style.top = (pos.y + offset[1])+'px';
        
        let denominator = Math.sqrt((centerX/2)**2 + (centerY/2)**2);
         let numerator = (Math.sqrt(((centerX/2) - (pos.x + offset[0]))**2 + ((centerY/2) - (pos.y + offset[1]))**2));
        let percent = (numerator/denominator)+1;
        // console.log(percent);
        event.target.style.transform = 'translate(-50% , -50%) scale('+Math.abs(percent)+')';
        text.style.transform = 'translate3d('+-((centerX/2) - (pos.x + offset[0]))/15+'px, '+-((centerY/2) - (pos.y + offset[1]))/15+'px, 0) rotate3d('+-((centerY/2) - (pos.y + offset[1]))+','+((centerX/2) - (pos.x + offset[0]))+', 0,'+(numerator)/6+'deg )';
        gradient.style.transform = 'translate(-50%, -50%) translate3d('+-((centerX/2) - (pos.x + offset[0]))/15+'px, '+-((centerY/2) - (pos.y + offset[1]))/15+'px, 0) scale('+(Math.abs(percent)*0.7)+')';
        gradient.style.background = 'radial-gradient(rgba(255,255,255,0.3) '+40*(1 - (Math.abs(percent)*0.3))+'%, rgba(0,0,0,0.8) )';
        console.log();
    }
}


function mouseCircleup(event){
    move = false;
    // console.log(move);
    // circleReturn();
    tingleCircle.style.transition = 'all 0.3s';
    text.style.transition = 'all 0.3s';
    gradient.style.transition = 'all 0.3s'; 

    tingleCircle.style.left = centerX/2 +'px';
    tingleCircle.style.top = centerY/2 +'px';
    tingleCircle.style.transform = 'translate(-50%, -50%) scale(1)';
    text.style.transform = 'rotate3d(0, 0, 0, 35deg)';
    gradient.style.transform = 'translate(-50%, -50%) scale(0.7)';
    gradient.style.background = 'radial-gradient(rgba(255,255,255,0.3) 28%, rgba(0,0,0,0.8) )';
    
    setTimeout(function(){
    tingleCircle.style.transition = 'none';
    text.style.transition = 'none';
    gradient.style.transition = 'none'; 
    },300)

}

let idxPlus;
let idxMinus;

function circleReturn(event){


    // console.log((centerX/2) - ( parseInt(tingleCircle.style.left))>0);
    console.log(parseInt(tingleCircle.style.left)-(centerX/2) == 0);
    if(Math.round((centerX/2) - ( parseInt(tingleCircle.style.left)))>0){
        idxPlus = xPlus();
            xPlus();
            
    }else if(Math.round((centerX/2) - (parseInt(tingleCircle.style.left)))<0){
           xMinus();            
    }else{
        
        clearInterval(idxPlus);
        clearInterval(idxMinus);
    }



    // if((centerY/2) - (pos.y + offset[1])>0){
    //     tingleCircle.style.top -= 1+'px';
    // }else if((centerY/2) - (pos.y + offset[1])<0){
    //     tingleCircle.style.top += 1+'px';
    // }
}
function xPlus(){
    tingleCircle  = document.querySelector('.tingleCircle');
    tingleCircle.style.left = (parseInt(centerX/2));
    let tingleLeftPlus = parseInt(tingleCircle.style.left) + 1; 
    console.log(tingleLeftPlus)
    tingleCircle.style.left = Math.round(tingleLeftPlus) +'px';
}
function xMinus(){
    tingleCircle  = document.querySelector('.tingleCircle');
    tingleCircle.style.left = (parseInt(centerX/2));
    let tingleLeftMinus = parseInt(tingleCircle.style.left) - 1; 
    tingleCircle.style.left = Math.round(tingleLeftMinus) +'px';
}



export {Tingle};