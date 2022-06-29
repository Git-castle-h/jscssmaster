import utils from './utils.js'

// 1. 캔버스 불러오기
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

// 2. Particle 클래스 정의
class Particle {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = '#fff'
    ctx.fill()
    ctx.closePath()
  }

  animate() {
    this.draw()
  }
}

// 3. 파티클 만들기
const TOTAL = 1
let particles = []
for (let i = 0; i < TOTAL; i++) {
  particles.push(new Particle(100, 100, 5))
}

// 4. 매 프레임마다 실행되는 재귀함수
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach(particle => particle.animate())

  window.requestAnimationFrame(render)
}

// 5. 윈도우 resize 함수 정의
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

// 6. 실행하기
render()