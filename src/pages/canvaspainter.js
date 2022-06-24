import React from 'react';
import {Link} from 'react-router-dom';
import {useState,useEffect,componentDidMount} from 'react';

function Painter(){
    return(
        <div className="Painter">
            <canvas id="jsCanvas" className='canvas'></canvas>
            <div className="controls_range">
                <input type="range" className="jsRange" id ="jsRange"  min="0.1" max="5" defaultValue="2.5" step="0.1" />
            </div>
            <div className="controls_btns">
                <button tabindex ='0' id="jsMode">Fill</button>
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