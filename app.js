// console.log("I am a triangle!")
const triangle = document.querySelector('.triangle')
const style = window.getComputedStyle(triangle)

const borderLeft = style.borderLeft
const borderRight = style.borderRight
const borderBottom = style.borderBottom

const result = document.getElementById('result')

function getBorderSize(string) {
  let result = string.split(" ")
  return result[0]
}

function allSidesEqual (side1, side2, side3) {
  return getBorderSize(side1) === getBorderSize(side2) && getBorderSize(side2) === getBorderSize(side3)
}

function printResult() {
  if (allSidesEqual (borderLeft, borderRight, borderBottom)) {
    result.innerText = 'I am an equilateral triangle.'
  } else {
    result.innerText = 'Guess again.'
  }
}

printResult();
console.log(allSidesEqual(borderLeft, borderRight, borderBottom))

