import React from 'react';
import {useState,useEffect,componentDidMount} from 'react';
import utils from './boilerPlate/utils.js'


function Particle(){
    useEffect(
        function(){

        // 1. 캔버스 불러오기
        const canvasWrap = document.querySelector('.particleWrap');
        const canvas = document.querySelector('.canvasParticle');
        canvas.width = canvasWrap.clientWidth
        canvas.height = canvasWrap.clientHeight
        const ctx = canvas.getContext('2d');

        let mouse = {x: 0, y: 0, isActive:false};
        let RAF;

        // 2. Particle 클래스 정의
        class Particle {
        constructor(x, y, radius, velocity) {
            this.x = x
            this.y = y
            this.radius = radius
            this.velocity = velocity
        }

        draw() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            ctx.fillStyle = 'rgba(0,100,255,1)'
            ctx.fill()
            ctx.closePath()
        }

        animate() {
            if(this.x <0 || this.x >canvasWrap.clientWidth || this.y <0 || this.y >canvasWrap.clientHeight){
                this.x = utils.randomFloatBetween(0, canvasWrap.clientWidth);
                this.y = utils.randomFloatBetween(0, canvasWrap.clientHeight);
            }
            if(mouse.isActive){
                particles.splice(-1);
                particles = particles;
                particles.push(new Particle(mouse.x, mouse.y ,this.radius, this.velocity))
            }else{
                particles = particles;
            }

            for(let ie11i = 0; ie11i < particles.length; ie11i++){
                let i = ie11i;
                const distance = utils.distance(particles[i].x, particles[i].y, this.x, this.y );
                if(distance <400){
                    const from = {x:this.x, y:this.y};
                    const to = {x: particles[i].x, y: particles[i].y};
                    new Line(from, to, distance).draw();
                }

            }


            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.draw()
        }
        }
        class Line {
            constructor(from, to, distance){
                this.from = from;
                this.to = to;
                this.distance = distance;
            }
            draw(){
                ctx.beginPath();
                ctx.moveTo(this.from.x, this.from.y);
                ctx.lineTo(this.to.x, this.to.y);
                let strokeOpacity = 1 - (this.distance/400 );
                ctx.strokeStyle='rgba(0,100,255,'+strokeOpacity+')';
                ctx.lineWidth =1;
                ctx.stroke();
            }
        }

        // 3. 파티클 만들기
        const TOTAL = 50
        let particles = []
        for (let i = 0; i < TOTAL; i++) {
            const x = utils.randomFloatBetween(0, canvasWrap.clientWidth);
            const y = utils.randomFloatBetween(0, canvasWrap.clientHeight);
            const radius = utils.randomFloatBetween(0.5, 2);
            const velocity = {
                x: utils.randomFloatBetween(-2,2),
                y: utils.randomFloatBetween(-2,2),
            }
            particles.push(new Particle(x, y, radius, velocity));
        }
        for (let i = 0; i < TOTAL; i++) {
        }


        // 4. 매 프레임마다 실행되는 재귀함수
        function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach(particle => particle.animate())

        
        RAF = window.requestAnimationFrame(render);
        }

        // 5. 윈도우 resize 함수 정의
        window.addEventListener('resize', () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        })

        // 6. 실행하기
        render()
        canvas.addEventListener('mouseenter',function(){
            mouse.isActive = true;
        }) 
        canvas.addEventListener('mouseleave',function(){
            mouse.isActive = false;
        }) 


    canvas.addEventListener('mousemove',function(evt){
        mouse.isActive = true;
        let canvasWrapRect = canvasWrap.getBoundingClientRect();
        let x = evt.clientX - canvasWrapRect.left;
        let y = evt.clientY - canvasWrapRect.top;
        mouse.x = x;
        mouse.y = y;
        // console.log(mouse.x, mouse.y);
    }) 
            

            return function(){
                cancelAnimationFrame(RAF);
            }


        },[]
    )

    return(
        <div className="Particle">
        <div className="particleWrap">
            <canvas className='canvasParticle'></canvas>
        </div>
        </div>
    )
}

export{Particle}