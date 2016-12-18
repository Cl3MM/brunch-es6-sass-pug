import P5 from 'p5'

document.addEventListener('DOMContentLoaded', () => {
  let s = (p) => {

    let x = 100
    let y = 100

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight)
    }

    p.draw = () => {
      p.background(0)
      p.fill(255)
      p.rect(x, y, 50, 50)
      if (p.mouseIsPressed) {
        p.fill(0, 255, 0)
      } else {
        p.fill(255)
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80)
    }
  // p.windowResized = () => {
  //   p.resizeCanvas(p.windowWidth, p.windowHeight)
  // }
  }
  let myp5 = new P5(s, 'app')
})
