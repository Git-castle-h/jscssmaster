import React from 'react';
import {useState} from 'react';


function Ripple(){
let [clickPosition, clickPositionChange] = useState({x:0, y:0});

    return(
        <div className="Ripple">
            <div className='rippleWrap'>
            <RippleButton text={'Ripple'} bgColor ={'indianred'} txtColor ={'#fff'}></RippleButton>
            <RippleButton text={'Effect'} rippleColor={'grey'} bgColor ={'Aqua'} txtColor ={'#fff'}></RippleButton>
            <RippleButton text={'Chrome'} bgColor ={'purple'} txtColor ={'#fff'}></RippleButton>
            <RippleButton text={'Explorer'} bgColor ={'salmon'} txtColor ={'#fff'}></RippleButton>
            </div>
        </div>
    )

}

// let rippleBtn = document.querySelectorAll('.rippleBtn');
// let rippleArea = document.querySelectorAll('.rippleArea');

function RippleButton(props){
    return(
    <div className={'rippleBtn '+props.rippleColor} onClick ={rippleEffect} style = {{backgroundColor: props.bgColor , color: props.txtColor}}>
        <div  className='rippleArea'></div> 
        <span className='txt'>{props.text}</span>
    </div>
    )
}


function rippleEffect(evt){

    // React IE는 mouseEvent 값을 불러오지않는다.
    // IE 호환을위해 nativeEvent를 사용
    // Google은 nativeEvent안써도 동작 잘함
    let offsetX = evt.nativeEvent.offsetX;
    let offsetY = evt.nativeEvent.offsetY;
    // console.log(clientX);

    let circleWidth = 5;

    let GCR = evt.target.getBoundingClientRect()
    let rippleCirlcleXValue = ((offsetX)/GCR.width)*100;
    let rippleCircleX = rippleCirlcleXValue;
    let rippleCirlcleYValue = ((offsetY)/GCR.height)*100;
    let rippleCircleY = rippleCirlcleYValue;
    console.log('offset이 더 쉽지롱');

    let rippleArea = evt.target.children[0];
    // console.log(rippleArea);
    rippleArea.innerHTML ='';
    rippleArea.innerHTML +='<div class="rippleCircle"><div>';

    let rippleCircle = rippleArea.children;
    let lastnum = rippleCircle.length-1;
    rippleCircle[lastnum].style.left = rippleCircleX +'%';
    rippleCircle[lastnum].style.top = rippleCircleY +'%';
    rippleCircle[lastnum].style.width = circleWidth +'px';
    rippleCircle[lastnum].style.height = circleWidth +'px';

    evt.target.style.pointerEvents = 'none';
    // 너무 많이 클릭하는것 방지
    setTimeout(function(){evt.target.style.pointerEvents ='auto'},300);
    // console.log(evt.target);

}






export {Ripple}