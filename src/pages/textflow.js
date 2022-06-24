import React from 'react';
import {Link} from 'react-router-dom';
import {useState,useEffect,componentDidMount} from 'react';


function Textflow (){

    let [count, setCount] = useState([]);

    useEffect(function(){
        let textStrap = document.querySelectorAll('.textStrap');
        let text = 
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quisquam possimus cumque inventore rem reiciendis quibusdam aperiam labore provident, ipsum, accusantium soluta odit, sapiente nihil laudantium repellat. Autem, quaerat unde.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quisquam possimus cumque inventore rem reiciendis quibusdam aperiam labore provident, ipsum, accusantium soluta odit, sapiente nihil laudantium repellat. Autem, quaerat unde.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quisquam possimus cumque inventore rem reiciendis quibusdam aperiam labore provident, ipsum, accusantium soluta odit, sapiente nihil laudantium repellat. Autem, quaerat unde.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quisquam possimus cumque inventore rem reiciendis quibusdam aperiam labore provident, ipsum, accusantium soluta odit, sapiente nihil laudantium repellat. Autem, quaerat unde.'    
        ];
        let countInterval = [];
        let strapInterval = [];
        let CRAF =[];
        let SRAF =[];

        for(let ie11i = 0; ie11i<text.length; ie11i++){
            let i = ie11i;
            setCount(count = [...count, 0])
            countInterval =[...countInterval, 0]
            countInterval[i] = function(){
            let span = textStrap[i].querySelector('span');
            // console.log(span);
            // console.log(span.clientWidth);
            if(count[i] > span.scrollWidth){
                setCount(count[i] = 0);

            }else{
            setCount(count[i]++);
        }
        CRAF[i] = requestAnimationFrame(countInterval[i]);
        }
        CRAF[i] = requestAnimationFrame(countInterval[i]);



        strapInterval =[...strapInterval, 0]
        strapInterval[i] = function(){
            let winSCT = window.scrollY;
        // console.log(count+winSCT);
        textStrap[i].style.transform= 'translateX('+-(count[i]+winSCT)+'px)';
        SRAF[i] = requestAnimationFrame(strapInterval[i]);

        }
        SRAF[i] = requestAnimationFrame(strapInterval[i]);
    

        duplicate(textStrap[i],text[i]);
    }
        function duplicate(element,textArr){
            element.innerHTML= '<span>'+textArr+'</span>';
            element.innerHTML = element.innerHTML+'<span>'+textArr+'</span>';
            element.innerHTML = element.innerHTML+'<span>'+textArr+'</span>';
            element.innerHTML = element.innerHTML+'<span>'+textArr+'</span>';
            element.innerHTML = element.innerHTML+'<span>'+textArr+'</span>';
            element.innerHTML = element.innerHTML+'<span>'+textArr+'</span>';
            element.innerHTML = element.innerHTML+'<span>'+textArr+'</span>';
        }
        console.log (CRAF);
        console.log (SRAF);

        return function (){
            console.log('out');
            for(let ie11i = 0; ie11i<text.length; ie11i++){
                let i = ie11i;
                cancelAnimationFrame(CRAF[i]);
                cancelAnimationFrame(SRAF[i]);
        }   
        }
        

    },[])


    return(
        <div className="Textflow">
            <TextStrap class={'red'}></TextStrap>
            <TextStrap class={'blue'}></TextStrap>
            <TextStrap class={'yellow'}></TextStrap>
            <TextStrap class={'black'}></TextStrap>

        </div>
    )
}


function TextStrap(props){
return(
<div className={'textflowWrap '+props.class}>
    <div className="textStrap"></div>
    <div className="strapShadow"></div>
</div>
) 
}


export {Textflow};