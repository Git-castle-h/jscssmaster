import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Imagegrid(){
    useEffect(function(){
        let imgGridBoxArr = document.querySelectorAll('.imageGridBox');
        let gridX = 15;
        let gridY = 20;
        let click = true;

        class GridAnimation{
            constructor(gridX, gridY ,imgGridBox , direction){
                this.gridX = gridX;
                this.gridY = gridY;
                this.imgGridBox = imgGridBox;
                this.clientWidth = this.imgGridBox.clientWidth;
                this.clientHeight = this.imgGridBox.clientHeight;
                this.direction = direction;
            }
            animate(){
                let gridWidth = this.clientWidth/this.gridX;
                let gridHeight = this.clientHeight/this.gridY;
                this.imgGridBox.style.backgroundSize = this.clientWidth +'px '+ this.clientHeight+'px';
                // console.log(gridWidth, gridHeight);
                for(let ie11e=0; ie11e < this.gridX; ie11e++){
                    let e = ie11e;
                    for(let ie11i=0; ie11i < this.gridY; ie11i++){
                        let i = ie11i;
                        new fragment(gridWidth, gridHeight, gridWidth*e, gridHeight*i, this.imgGridBox , e, i, this.direction).animate();
                    }
                }
            }
        }
        
        class fragment{
            constructor(width,height,left,top,imgGridBox,e,i,direction){
                this.width = width;
                this.height =height;
                this.left = left;
                this.top = top;
                this.imgGridBox = imgGridBox;
                this.e = e;
                this.i = i;
                this.direction = direction;
            }
            animate(){
                const fragmentBox = this.imgGridBox.querySelector('.fragmentBox');
                const fragment = document.createElement('div');
                const imgUrl = this.imgGridBox.style.backgroundImage;
                const repeat = this.imgGridBox.style.backgroundRepeat;
                const size = this.imgGridBox.style.backgroundSize;
                fragment.className = 'fragment';
                fragment.style.width = this.width +'px';
                fragment.style.height = this.height +'px';
                fragment.style.left = this.left +'px';
                fragment.style.top = this.top +'px';
                fragment.style.backgroundImage = imgUrl;
                fragment.style.backgroundRepeat = repeat;
                fragment.style.backgroundSize = size;
                fragment.style.backgroundPosition ='top '+-(this.top)+'px left '+-(this.left)+'px';
                fragment.style.position = 'absolute';

                let isOdd = (this.e + this.i)%2 === 0;
                if(isOdd){
                    fragment.style.animationName = "flipX";
                }else{
                    fragment.style.animationName = "flipY";
                }
                // console.log(fragment.style);                        

                if(this.direction == 'bottom'){
                fragment.style.animationDelay = (gridX - this.i)*70 +'ms';
            }else if(this.direction == 'top'){
                fragment.style.animationDelay = (this.i)*70 +'ms';
            }else if(this.direction == 'left'){
                fragment.style.animationDelay = (this.e)*70 +'ms';
            }else if(this.direction == 'right'){
                fragment.style.animationDelay = (gridY - this.e)*70 +'ms';
            }else if(this.direction == 'topLeft'){
                fragment.style.animationDelay = (this.i)*35+(this.e)*35 +'ms';
            }else if(this.direction == 'topRight'){
                fragment.style.animationDelay = (this.i)*35+(gridY-this.e)*35 +'ms';
            }else if(this.direction == 'bottomLeft'){
                fragment.style.animationDelay = (gridX-this.i)*35+(this.e)*35 +'ms';
            }else if(this.direction == 'bottomRight'){
                fragment.style.animationDelay = (gridX-this.i)*35+(gridY-this.e)*35 +'ms';
            }

                fragmentBox.appendChild(fragment);
            }
        }


        function randomIntBetween (min, max){
            return Math.floor(Math.random()*(max - min+1)+min);
        }

        for(let ie11i=0; ie11i < imgGridBoxArr.length; ie11i++){
            let i = ie11i;
            if(imgGridBoxArr[i].classList.contains('bottom')){
            new GridAnimation(gridX, gridY, imgGridBoxArr[i],'bottom').animate();
            }else if(imgGridBoxArr[i].classList.contains('top')){
                new GridAnimation(gridX, gridY, imgGridBoxArr[i],'top').animate();
            }else if(imgGridBoxArr[i].classList.contains('left')){
                new GridAnimation(gridX, gridY, imgGridBoxArr[i], 'left').animate();
            }else if(imgGridBoxArr[i].classList.contains('right')){
                new GridAnimation(gridX, gridY, imgGridBoxArr[i], 'right').animate();
            }else if(imgGridBoxArr[i].classList.contains('topLeft')){
                new GridAnimation(gridX, gridY, imgGridBoxArr[i], 'topLeft').animate();
            }else if(imgGridBoxArr[i].classList.contains('topRight')){
                new GridAnimation(gridX, gridY, imgGridBoxArr[i], 'topRight').animate();
            }else if(imgGridBoxArr[i].classList.contains('bottomLeft')){
                new GridAnimation(gridX, gridY, imgGridBoxArr[i], 'bottomLeft').animate();
            }else if(imgGridBoxArr[i].classList.contains('bottomRight')){
                new GridAnimation(gridX, gridY, imgGridBoxArr[i], 'bottomRight').animate();
            }
        }
        // for(let ie11i=0; ie11i < imgGridBoxArr.length; ie11i++){
        //     let i = ie11i;
        //     imgGridBoxArr[i].addEventListener('click',function(e){
        //         console.log(imgGridBoxArr[i].classList.contains('on'));
        //     if(imgGridBoxArr[i].classList.contains('on')){
        //         if(click){
        //         click = false;
        //         imgGridBoxArr[i].classList.add('off');
        //         setTimeout(function(){
        //             imgGridBoxArr[i].classList.remove('on');
        //             imgGridBoxArr[i].classList.remove('off');
        //             click = true;
        //             },2000)
        //         }
        //     }else{
        //     if(click){
        //         click = false;
        //         imgGridBoxArr[i].classList.add('on');
        //         setTimeout(function(){
        //         click = true;
        //         },1500)
        //         }
        //     }
        //     })
        // }
    },[])
    return(
        <div className="ImageGrid">
            <div className="imageGridWrap">
                <div className="imageGridBox top" onClick={cardFlip} style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
                <div className="imageGridBox bottom" onClick={cardFlip}  style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
                 <div className="imageGridBox left" onClick={cardFlip}  style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
                <div className="imageGridBox right" onClick={cardFlip}  style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
                <div className="imageGridBox topLeft" onClick={cardFlip}  style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
                <div className="imageGridBox topRight" onClick={cardFlip}  style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
                <div className="imageGridBox bottomLeft" onClick={cardFlip}  style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
                <div className="imageGridBox bottomRight" onClick={cardFlip}  style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
            </div>
            
        </div>
    )

}

let click = true;

function cardFlip(evt){
                console.log(evt.target.classList.contains('on'));
            if(evt.target.classList.contains('on')){
                if(click){
                click = false;
                let fragment = evt.target.querySelectorAll('.fragment');
                for(let ie11i = 0; ie11i<fragment.length; ie11i++){
                    let i = ie11i;
                    let fragAnime = fragment[i].style.animationName;
                    console.log(fragAnime);
                    if(fragAnime =='flipX'){
                        fragment[i].style.animationName = 'flipBackX';
                    }else if(fragAnime =='flipY'){
                        fragment[i].style.animationName = 'flipBackY';
                    }
                }
                evt.target.classList.add('off');
                setTimeout(function(){
                    evt.target.classList.remove('on');
                    evt.target.classList.remove('off');    
                    click = true;
                    },2000)
                }
            }else{
            if(click){
                click = false;
                evt.target.classList.add('on');
                let fragment = evt.target.querySelectorAll('.fragment');
                for(let ie11i = 0; ie11i<fragment.length; ie11i++){
                    let i = ie11i;
                    let fragAnime = fragment[i].style.animationName;
                    console.log(fragAnime);
                    if(fragAnime =='flipBackX'){
                        fragment[i].style.animationName = 'flipX';
                    }else if(fragAnime =='flipBackY'){
                        fragment[i].style.animationName = 'flipY';
                    }
                }

                setTimeout(function(){
                click = true;
                },2200)
                }
    }
}


export{Imagegrid};