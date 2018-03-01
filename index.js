// build Easel

//1. Expand the dimensions of the pixel canvas.

let tr = document.querySelector('.row')
let td = document.querySelector('.pix')

for(let i=0; i<75; i++) {
  const newHorizontalCell = td.cloneNode(false)
  tr.appendChild(newHorizontalCell)
}

for(let i=0; i<40; i++) {
  const newVerticalRow = tr.cloneNode(true)
  tr.parentNode.appendChild(newVerticalRow)
}




//event listener to turn red when selected
const easel = document.querySelectorAll('.pix')

for(let i = 0; i < easel.length; i++) {
  easel[i].addEventListener('click',makeColor)
}

function makeColor(event) {
    if (event.target.classList.item(1) === currentColor) {
      event.target.classList.toggle(currentColor);
    } else {
        event.target.classList.remove(event.target.classList.item(1))
        event.target.classList.toggle(currentColor);
      }
}

//Add an event listener to these `div` tags so when clicked
//the brush color is saved.

let currentColor;

const palette = document.querySelectorAll('.palette')

for(let i = 0; i < palette.length; i++) {
  palette[i].addEventListener('click',palettePicker)
}

function palettePicker(event) {
    currentColor =  event.target.classList.item(2)
    yourColor = document.querySelector('.selected')
    console.log(yourColor.classList.length)
    if(yourColor.classList.length === 3){
      yourColor.classList.remove(yourColor.classList.item(2))
      yourColor.classList.add(currentColor)
    } else {
      yourColor.classList.add(currentColor)
    }

}
