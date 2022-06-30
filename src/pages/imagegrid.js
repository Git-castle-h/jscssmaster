import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Imagegrid(){
    useEffect(function(){
        let imgGridBoxArr = document.querySelectorAll('.imageGridBox');
        let gridX = 15;
        let gridY = 20;

        class GridAnimation{
            constructor(gridX, gridY ,imgGridBox){
                this.gridX = gridX
                this.gridY = gridY
                this.imgGridBox = imgGridBox
                this.clientWidth = this.imgGridBox.clientWidth;
                this.clientHeight = this.imgGridBox.clientHeight;
            }
            animate(){
                let gridWidth = this.clientWidth/this.gridX;
                let gridHeight = this.clientHeight/this.gridY;
                this.imgGridBox.style.backgroundSize = this.clientWidth +'px '+ this.clientHeight+'px';
                console.log(gridWidth, gridHeight);
                for(let ie11e=0; ie11e < this.gridX; ie11e++){
                    let e = ie11e;
                    for(let ie11i=0; ie11i < this.gridY; ie11i++){
                        let i = ie11i;
                        new fragment(gridWidth, gridHeight, gridWidth*e, gridHeight*i, this.imgGridBox , e, i).animate();
                    }
                }
            }
        }
        
        class fragment{
            constructor(width,height,left,top,imgGridBox,e,i){
                this.width = width;
                this.height =height;
                this.left = left;
                this.top = top;
                this.imgGridBox = imgGridBox;
                this.e = e;
                this.i = i;
            }
            animate(){
                const fragmentBox = this.imgGridBox.querySelector('.fragmentBox');
                const fragment = document.createElement('div');
                const imgUrl = this.imgGridBox.style.backgroundImage;
                const repeat = this.imgGridBox.style.backgroundRepeat;
                const size = this.imgGridBox.style.backgroundSize;
                this.imgGridBox.style.position ='relative';
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
                    fragment.style.transform = 'rotateX(-180deg)';
                }else{
                    fragment.style.transform = 'rotateY(-180deg)';   
                }
                
                fragment.style.animationDelay = this.e*70+ this.i*70 + 'ms';
                // fragment.style.border = '1px solid rgb(0,0,255)';
                fragmentBox.appendChild(fragment);
            }
        }


        function randomIntBetween (min, max){
            return Math.floor(Math.random()*(max - min+1)+min);
        }

        for(let ie11i=0; ie11i < imgGridBoxArr.length; ie11i++){
            let i = ie11i;
            new GridAnimation(gridX, gridY, imgGridBoxArr[i]).animate();
        }

    },[])
    return(
        <div className="ImageGrid">
            <div className="imageGridWrap">
                <div className="imageGridBox" style={{backgroundImage : 'url(./images/tarot/tarot_back.png)'}}>
                    <div className="blindBox"></div>
                    <div className="fragmentBox"></div>
                </div>
            </div>
        </div>
    )

}

export{Imagegrid};