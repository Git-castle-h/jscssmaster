import React from 'react';
import {Link} from 'react-router-dom';
import {useState,useEffect,componentDidMount} from 'react';

function TextAnime(){
    useEffect(function(){
        let text = document.querySelectorAll('.text');

        const specialArray = [];
        let special;

        function textDisplay(element,i){
            const textArray = element.innerText.split('');
            if(!specialArray[i]){
                special =['j','o','o','j','a','k','e','i','l','o','v','e','y','o','u'];
            }else{
                special = specialArray[i];
            }
            const exception = [' ','\n','.',',',':',')','('];

            const randomIntBetween = function(min,max){
                return Math.floor(Math.random()*(max - min+1) + min)
            }
            let numArray = [];
            for(let ie11i =0; ie11i<textArray.length; ie11i++){
                let i = ie11i;
                const num = randomIntBetween(5, 15);
                numArray = [...numArray, 0];
                numArray[i] = num;
            }
            let completeCount;
            const timer = setInterval(function(){
                completeCount =0;
                let newText='';
                for(let ie11i =0; ie11i<numArray.length; ie11i++){
                    let i = ie11i;
                    if(exception.includes(textArray[i])|| numArray[i] ===0){
                        newText += textArray[i];
                        completeCount += 1;
                    }else{
                        newText += special[numArray[i]%special.length];
                        numArray[i] = --numArray[i];
                    }
                }           
                element.innerText = newText;
                console.log(completeCount, numArray.length);
                if(completeCount === numArray.length){
                    clearInterval(timer);
                }
            },100)

            console.log(textArray);
        }

    for(let ie11i =0; ie11i<text.length; ie11i++){
        let i = ie11i;
        textDisplay(text[i],i);
    }
    },[])

    return(
        <div className="TextAnime">
            <div className="textanimeWrap">
                <p className="text">This is text animation</p>
                <p className="text">Welcome to coding</p>
            </div>
        </div>
    )
}

export {TextAnime};