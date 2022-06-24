import React from 'react';
import {Link} from 'react-router-dom';
function Main (props){
    return(
        <div className='Main'>
            <div className="cardWrap" >
                <div className="cardRow">
                    <Glassy class={'tab fillUp'} text={'Fill up'} link ={'/fillup'}></Glassy>
                    <Glassy class={'tab ripple'} text={'Ripple'} link ={'/ripple'}></Glassy>
                    <Glassy class={'tab pathanime'} text={'Path Anime'} link ={'/pathanime'}></Glassy>
                    <Glassy class={'tab tingle'} text={'tingle'} link ={'/tingle'}></Glassy>
                </div>
                <div className="cardRow">
                    <Glassy class={'tab textflow'} text={'textflow'} link ={'/textflow'}></Glassy>
                    <Glassy class={'tab glitch'} text={'Glitch'} link ={'/glitch'}></Glassy>
                    <Glassy class={'tab card'} text={'Card'} link ={'/canvasCard'}></Glassy>
                </div>
            </div>
        </div>
    )
}

function Glassy(props){
    return(
        <Link to ={props.link}>
        <div className={'card '+props.class} onMouseMove={cardReact} onMouseOut={cardReactOut} >
        <div className="cardContent">
            <span>{props.text}</span>
        </div>
        <div className='cardShadow'></div>
    </div>
    </Link>
    )

}

function cardReact (evt){
    let cardGCR = evt.target.getBoundingClientRect();
    let cardWidth = cardGCR.width;
    let cardHeight = cardGCR.height;
    let offsetX =  evt.nativeEvent.offsetX;
    let offsetY =  evt.nativeEvent.offsetY;
    let cardCenterX = (cardWidth/2);
    let cardCenterY = (cardHeight/2);
    let posX = (offsetX - cardCenterX)/cardCenterX;
    let posY = (cardCenterY - offsetY)/cardCenterY;
    let cardDeg = (Math.sqrt(posX**2 + posY**2));
    evt.target.style.transform = 'rotate3d('+ (posX) +','+ (posY) +',0,'+cardDeg*20+'deg)';
    evt.target.style.boxShadow = (-posX*10)+'px '+(posY*10)+'px 5px rgba(0,0,0,0.15)';
    let cardShadow = evt.target.querySelector('.cardShadow');
    let shadowDeg = 0;
        if(posX<=0){
            shadowDeg = 45+((posX)*(-45)+(posY)*(45));
        }else{
            shadowDeg = -(45+((posX)*(45)+(posY)*(45)));
        }
    ;

    let shadowOpacity = ((Math.abs(posX)+Math.abs(posY))*50)*0.7; 
    cardShadow.style.opacity='1';
    cardShadow.style.background = 'linear-gradient('+shadowDeg+'deg, rgba(0,0,0,0.1), rgba(255,255,255,0.2)'+shadowOpacity+'%)'
}


function cardReactOut (evt){
    
    evt.target.style.transition = 'all 0.3s';
    evt.target.style.transform = 'rotate3d(0,0,0,25deg)';
    evt.target.style.boxShadow = '0px 0px 7px rgba(0,0,0,0)';
    let cardShadow = evt.target.querySelector('.cardShadow');
    cardShadow.style.opacity ='0';
    setTimeout(function(){
        evt.target.style.transition = '';
    },300)
    

}


export {Main};