import React from 'react';

function Textfillup (){
    return(
        <div className='textfillup'>
            <Fillup Text={'ABOUT'} direction = {'left'}></Fillup>
            <Fillup Text={'JAVASCRIPT'} direction = {'top'}></Fillup>
            <Fillup Text={'CSS'} direction = {'bottom'}></Fillup>
            <Fillup Text={'REACT'} direction = {'right'}></Fillup>
        </div>
    )
    
}

function Fillup(props){
    return(
    <div className={'textWrap '+props.direction}>
        <div className='mass'>&nbsp;&nbsp;{props.Text}&nbsp;&nbsp;</div>  
        <div className='glow'>&nbsp;&nbsp;{props.Text}&nbsp;&nbsp;</div>
        <div className='glow'>&nbsp;&nbsp;{props.Text}&nbsp;&nbsp;</div>
        <div className='stroke'>&nbsp;&nbsp;{props.Text}&nbsp;&nbsp;</div>
        <div className='glow mask'>&nbsp;&nbsp;{props.Text}&nbsp;&nbsp;</div>
        <div className='fill'>&nbsp;&nbsp;{props.Text}&nbsp;&nbsp;</div>
    </div>
    )
}

export {Textfillup};