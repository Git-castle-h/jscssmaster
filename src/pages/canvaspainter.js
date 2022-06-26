import React from 'react';
import {Link} from 'react-router-dom';
import {useState,useEffect,componentDidMount} from 'react';

function Painter(){
    useEffect(function(){
        let painting = false;
        
        const canvas = document.querySelector('#jsCanvas');
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.clientWidth;
        canvas.height =canvas.clientHeight;

        const defaultColor = "#2c2c2c";

        ctx.strokeStyle = defaultColor;
        ctx.lineWidth ="2.5";
        ctx.fillStyle = '#fff';
        ctx.fillRect(0,0, canvas.clientWidth, canvas.clientHeight);
        ctx.fillStyle = defaultColor;

        function onMouseMove(evt){
            const x = evt.offsetX;
            const y = evt.offsetY;
            if(!painting){
                ctx.beginPath();
                ctx.moveTo(x,y);
               
            }else{
                // ctx.beginPath();
                ctx.lineTo(x, y);
                ctx.stroke();
                // ctx.closePath();
                // console.log(x, y); 
            }
        }

        function startPainting(){
            painting = true;      
        }

        function stopPainting(){
            painting = false;
        }
        
        let colorBtn = document.querySelectorAll('.control__color');

        for(let ie11i =0; ie11i<colorBtn.length; ie11i++){
            let i = ie11i;
            colorBtn[i].addEventListener('click', handleColor);
        }
        function handleColor(event){
            ctx.strokeStyle = event.target.style.backgroundColor;
            ctx.fillStyle =ctx.strokeStyle;
            console.log('color is now '+event.target.style.backgroundColor);
        }

        const range = document.querySelector('#jsRange');


        if(canvas){
            canvas.addEventListener('mousemove',onMouseMove);
            canvas.addEventListener('mousedown', startPainting);
            canvas.addEventListener('mouseup', stopPainting);
            canvas.addEventListener('mouseleave',stopPainting);
            canvas.addEventListener('click', handleCanvasClick );
            canvas.addEventListener('contextmenu', handleContextMenu);
        }

        function handleRangeChange(evt){
            ctx.lineWidth = evt.target.value;
        }

        if(range){
            range.addEventListener('input', handleRangeChange);
        }

        const mode = document.querySelector('#jsMode');
        let fill = false;

        function handleModeClick(){
            if(fill){
                fill=false;
                mode.innerHTML ="Brush";
                range.disabled= false;
            }else{
                fill=true;
                mode.innerHTML ="Fill"
                range.disabled= true;
            }
        }

        if(mode){
            mode.addEventListener('click',handleModeClick);
        }
        function handleCanvasClick(){
            if(fill){
            ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        }
        }



        const save = document.querySelector('#jsSave');



        function handleContextMenu(evt){    
            evt.preventDefault();
        }

        save.addEventListener('click', handleSaveClick);

        function handleSaveClick(evt){
            console.log('saveit');
            const image = canvas.toDataURL('image/jpeg');
            const link = document.createElement('a');
            link.href =image;
            link.download ='PainJs[EXPORT]';
            link.click();
            console.log(link);

        }

    },[])
    return(
        <div className="Painter">
            <canvas id="jsCanvas" className='canvas'></canvas>
            <div className="controls_range">
                <input type="range" className="jsRange" id ="jsRange"  min="0.1" max="5" defaultValue="2.5" step="0.1" />
            </div>
            <div className="controls_btns">
                <button tabindex ='0' id="jsMode">Brush</button>
                <button tabindex ='0' id="jsSave">Save</button>
            </div>
            <div className="controls">
                <div className="controls_colors" id="jsColors">
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#2c2c2c"}}></div>
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#fff"}}></div>
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#ff3b30"}}></div>
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#ff9500"}}></div>
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#ffcc00"}}></div>
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#4cd963"}}></div>
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#5ac8fa"}}></div>
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#f6f9fc"}}></div>
                    <div  tabindex ='0'className="control__color" style ={{backgroundColor:"#0579ff"}}></div>
                </div>
            </div>
        </div>
    )

}

export{Painter};