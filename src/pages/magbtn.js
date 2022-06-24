import React from 'react';
import {useState,useEffect,componentDidMount} from 'react';
import {gsap, Elastic} from 'gsap';
function Magbtn(){


    useEffect(function(){

    })
    return(
        <div className="Tingle">
            <div className="tingleWrap">
                <TingleBox text ={'안녕하세요'}></TingleBox>
            </div>
        </div>
    )
}



function TingleBox(props){
    return(
    <div className="tingleBox">
        {/* <div className="tingleCircle" onMouseDown={circleDown} onMouseMove={circleMove} onMouseLeave={circleup} onMouseUp={circleup}> */}
        <div className="tingleCircle"  onMouseDown={circleDown} onMouseMove={circleMove} onMouseUp={circleUp} onMouseLeave={circleUp}>
            <div className='gradient'></div>
            <span className="text">{props.text}</span>
        </div>
    </div>
    )
}
let circleBox;
let circle;
let width; 
let height;
let rectX; 
let rectY;
let ultCenter;
let center;
let cliX;
let cliY;
let text;
let boxRectX;
let boxRectY;
let curCenter;
let sqrt;
let shadow;
let move = false;

function circleDown(evt){
    move = true;
    circle =  evt.target;
    circleBox = circle.parentElement;
    for(;circleBox.className !== 'tingleBox'; circleBox = circleBox.parentElement);
    console.log(circleBox);
    width = circle.clientWidth;
    height = circle.clientHeight;
    rectX = circle.getBoundingClientRect().left;
    rectY = circle.getBoundingClientRect().top;
    boxRectX = circleBox.getBoundingClientRect().left;
    boxRectY = circleBox.getBoundingClientRect().top;
    ultCenter = { 
        x:rectX+(width/2) - boxRectX,
        y:rectY+(height/2)- boxRectY
    }
    text = circle.querySelector('.text');
    shadow = circle.querySelector('.gradient');
    console.log(width, height, rectX, rectY, ultCenter.x, ultCenter.y);

}
function circleMove(evt){
    if(move == true){
    cliX = evt.clientX;
    cliY = evt.clientY;



    curCenter ={
        x: cliX - boxRectX,
        y: cliY - boxRectY
    }
    center = {
        x: curCenter.x - ultCenter.x,
        y: curCenter.y -ultCenter.y
    }

    sqrt = Math.sqrt((center.x**2 + center.y**2));
    let sqrtScale = 1+(sqrt/300);
    let shadowScale = 0.7+(sqrt/1000);
    let shadowX =(center.x)/20 ;
    let shadowY = (center.y)/20;
    let textScale = 1 -(sqrt/2000);
    let textX =(center.x/15);
    let textY =(center.y/15);
    let textRX=(center.y/3);
    let textRY=(-center.x/2);
    let textDeg = sqrt/10;
    circle.style.transform ='translate(-50%, -50%) scale('+sqrtScale+')';
    shadow.style.transform ='translate(-50%, -50%) translate3d('+shadowX+'px,'+shadowY +'px,0) scale('+(shadowScale)+')';
    text.style.transform = 'translate3d('+textX+'px,'+textY+'px,0) scale('+(textScale)+') rotate3d('+textRX+','+textRY+',0,'+(textDeg)+'deg)';
    circle.style.left = curCenter.x+'px';
    circle.style.top = curCenter.y+'px';
    console.log(center.x, center.y);

}
}
function circleUp(evt){
    if(move == true){
    move = false;
    circle.style.transition = 'all 0.3s';
    setTimeout(function(){
    circle.style.transition = 'none';
    },300);
    shadow.style.transition ='all 0.3s';
    setTimeout(function(){
    shadow.style.transition = 'none';
    },300);
    text.style.transition ='all 0.3s';
    setTimeout(function(){
    text.style.transition = 'none';
    },300);
    circle.style.transform ='translate(-50%, -50%) scale(1)';
    circle.style.left = ultCenter.x+'px';
    circle.style.top = ultCenter.y+'px';
    shadow.style.transform ='translate(-50%, -50%) translate3d(0px,0px,0) scale(0.7)';
    text.style.transform = 'translate3d(0px,0px,0) rotate3d(0,0,0,25deg)';
    console.log(ultCenter.x, ultCenter.y);

}
}

export {Magbtn};