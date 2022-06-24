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

        for(let ie11i = 0; ie11i<text.length; ie11i++){
            let i = ie11i;
            setCount(count = [...count, 0])
            countInterval =[...countInterval, 0]
            countInterval[i] = setInterval(function(){
            let span = textStrap[i].querySelector('span');
            // console.log(span);
            // console.log(span.clientWidth);
            if(count[i] > span.scrollWidth){
                setCount(count[i] = 0);

            }else{
            setCount(count[i]++);
        }
        },10)



        strapInterval =[...strapInterval, 0]
        strapInterval[i] = setInterval(function(){
            let winSCT = window.scrollY;
        console.log(count+winSCT);
        textStrap[i].style.transform= 'translateX('+-(count[i]+winSCT)+'px)';

        },10)

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

        return function (){
            console.log('out');
            for(let ie11i = 0; ie11i<text.length; ie11i++){
                let i = ie11i;
            clearInterval(countInterval[i]);
            clearInterval(strapInterval[i]);
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