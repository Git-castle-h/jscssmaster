import React from 'react';
import {useState,useEffect,componentDidMount} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {SVGpath} from './pathStore/SVGpath.js';


function PathAnime(){
    let [pathanime, setpathanime] = useState();
    let [winSCT, setwinSCT] =useState() ;
    let [path, setpath] = useState([]);
    let [pathLength, setpathLenght] = useState([]);
    let [strokeDasharrayValue, setstrokeDasharrayValue] = useState([]);
    let scrollAnime;
    let isPathAnime;
    useEffect(function(){
        isPathAnime = true;

        pathanime = document.querySelectorAll('.pathanime');      
        function setScroll(){
            // console.log(pathanime);
        for(let ie11i = 0;  ie11i < pathanime.length; ie11i++){
            let i = ie11i;
            
            path =[ ...path, pathanime[i].querySelector('.path')];
            pathLength[i] = path[i].getTotalLength();
            path[i].style.strokeDasharray = pathLength[i];
            path[i].style.strokeDashoffset = pathLength[i];
        }
    }   
    function pathScroll(){
        winSCT = window.scrollY + (window.innerHeight *0.6);
        // console.log(winSCT);
        for(let ie11i = 0;  ie11i < pathanime.length; ie11i++){
            let i = ie11i;
            strokeDasharrayValue[i] = (winSCT - pathanime[i].offsetTop)/(pathanime[i].clientHeight);
            // console.log(strokeDasharrayValue[i]);
            console.log(pathanime[i].offsetTop+', '+winSCT);
             if( winSCT >(pathanime[i].offsetTop) && (pathanime[i].offsetTop + pathanime[i].clientHeight) >winSCT  ){
                path[i].style.strokeDashoffset = pathLength[i]-(strokeDasharrayValue[i]*pathLength[i]);
             }


        }
    }
    let id;
    clearInterval(id);
    function firstScene(){
        path[0].style.strokeDashoffset = path[0].getTotalLength();
        id = setInterval(frame,10);

    }

    function frame(){
        var copyOffset = Number(path[0].style.strokeDashoffset);
        if(path[0].style.strokeDashoffset>(pathLength[0]-(strokeDasharrayValue[0]*pathLength[0]))){
        path[0].style.strokeDashoffset = copyOffset - 15;
        }else{
            clearInterval(id);
        }
    }


    setScroll();
    pathScroll();
    console.log('그것 위'+path[0].style.strokeDashoffset);
    console.log('그것'+pathLength[0]*0.6);
    firstScene();
    window.addEventListener('scroll',function(){
        if(isPathAnime){
        pathScroll();
    }
    });

    return function(){
        isPathAnime=false;
    }

},
[])

    return(
        <div className="PathAnime" id="PathAnime">
            
            <div className="pathanimeWrap">
                {/* <div className="pathanime one" >
                  <svg viewBox="0 0 1000 1000"> <path className ="path" d={SVGpath[1]}/></svg>
                </div>
                <div className="pathanime one" >
                  <svg viewBox="0 0 1000 1000"> <path className ="path" d={SVGpath[1]}/></svg>
                </div>
                <div className="pathanime one" >
                  <svg viewBox="0 0 1000 1000"> <path className ="path" d={SVGpath[2]}/></svg>
                </div>
                <div className="pathanime one" >
                  <svg viewBox="0 0 1000 1000"> <path className ="path" d={SVGpath[3]}/></svg>
                </div> */}
                <PathAnimeUnit width = {'1000'} height ={'1000'} pathD={SVGpath[0]}></PathAnimeUnit>
                <PathAnimeUnit width = {'1000'} height ={'1000'} pathD={SVGpath[1]}></PathAnimeUnit>
                <PathAnimeUnit width = {'1000'} height ={'450'} pathD={SVGpath[2]}></PathAnimeUnit>
                <PathAnimeUnit width = {'1000'} height ={'419'} pathD={SVGpath[3]}></PathAnimeUnit>

            </div>
            <footer style={{height:'50rem'}}></footer>
        </div>
    )
    

  
}

function PathAnimeUnit(props){
    return(
        <div className="pathanime one" >
        <svg width={props.width} height={props.height}> <path className ="path" d={props.pathD}/></svg>
      </div>
    )
}


// ============for Pure JS (React에서는 잘안됨)=============

// let pathanime = document.querySelectorAll('.pathanime');


// window.addEventListener('open',function(){
//     ScrollEvent();
// })
// window.addEventListener('load',function(){
//     ScrollEvent();
// })

// window.addEventListener('scroll',function(){
//     ScrollEvent();
// })



// function ScrollEvent(){
//     let winSCT;
//     winSCT = window.scrollY + (window.innerHeight *0.6);
//     console.log(winSCT);
    
//     for(let ie11i = 0;  ie11i < pathanime.length; ie11i++){
//         let i = ie11i;
//         let path = pathanime[i].querySelector('.path');
//         console.log(path);
//         let pathLength = path.getTotalLength();
//         path.style.strokeDasharray = pathLength;
//         path.style.strokeDashoffset = pathLength;
//         console.log(pathLength);
//         let strokeDasharrayValue = (winSCT - pathanime[i].offsetTop)/(pathanime[i].clientHeight);
//         console.log(strokeDasharrayValue);
//         if(strokeDasharrayValue < 0) {
//         }else{
//             path.style.strokeDashoffset = pathLength-(strokeDasharrayValue*pathLength);
//             // console.log(path.style.strokeDashoffset);
//         }
//         if(pathLength<strokeDasharrayValue*pathLength){
//             path.style.strokeDashoffset = 0;
//         }
        
//     }
// }







export {PathAnime};