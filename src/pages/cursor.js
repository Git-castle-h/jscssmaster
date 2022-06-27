import React from 'react';
import {useState,useEffect,componentDidMount} from 'react';
import {Link,useLocation} from 'react-router-dom';

function Cursor(){
    useEffect(
        function(){
            let cursor = document.querySelector('.customCursor');
            let cursorText = document.querySelector('.cursorText');
            let dataCursor;
            let cursorX, cursorY; 
            let cursorWidth, cursorHeight;



            window.addEventListener('mousemove',cursormousemove);
            window.addEventListener('mousedown',cursormousedown);
            window.addEventListener('mouseup',cursormouseup);
            cursor.addEventListener('mouseleave',cursorReset);


            function cursormousemove(evt){
                cursorWidth = cursor.clientWidth; 
                cursorHeight = cursor.clientHeight;
                cursorX = evt.clientX - (cursorWidth/2);
                cursorY = evt.clientY - (cursorHeight/2);
                cursor.style.left = cursorX +'px';
                cursor.style.top = cursorY +'px';
                if(!dataCursor){ cursor.style.transform = 'scale(0.3)'}
                 if(dataCursor !== evt.target.getAttribute('data-cursor')){
                     dataCursor = evt.target.getAttribute('data-cursor');
                    cursorText.innerHTML = dataCursor;
                    console.log('textChange');
                    cursor.style.transform = 'scale(1)'
                }else if(dataCursor = evt.target.getAttribute('data-cursor')){
                }

            }
            function cursormousedown(){
                if(!dataCursor){
                cursor.style.transform = 'scale(0.2)';

                }else{
                cursor.classList.add('down');
                cursor.style.transform = 'scale(0.7)';
                }
            }
            function cursormouseup(){
                if(!dataCursor){
                    cursor.style.transform = 'scale(0.3)';

                }else{
                cursor.classList.remove('down');
                cursor.style.transform = 'scale(1)';
                }
            }
            function cursorReset(){
                cursor.classList.remove('down');
                cursor.style.transform = 'scale(0.3)';
                dataCursor = '';
            }
 
        },[]
    )
    return(
        <div className="Cursor">
            <div className="demoWrap">
                <div className="demodiv demodiv1">
                    <div className="demoSubdiv demoSubdiv1" data-cursor="anitique white"></div>
                    <div className="demoSubdiv demoSubdiv2" data-cursor="aqua marine"></div>
                    <div className="demoSubdiv demoSubdiv3" data-cursor="beige"></div>
                </div>
                <div className="demodiv demodiv2">
                    <div className="demoSubdiv demoSubdiv1" data-cursor="slate blue"></div>
                    <div className="demoSubdiv demoSubdiv2" data-cursor="salmon"></div>
                </div>
                <div className="demodiv demodiv3">
                    <div className="demoSubdiv demoSubdiv1" data-cursor="sandy brown"></div>
                    <div className="demoSubdiv demoSubdiv2" data-cursor="pale violetred"></div>
                    <div className="demoSubdiv demoSubdiv3" data-cursor="pink"></div>
                </div>
            </div>
            <div className="customCursor">
                <span className="cursorText">demoText</span>
            </div>
        </div>
    )
}

export {Cursor};