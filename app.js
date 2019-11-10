const triangles = document.querySelectorAll('.triangle')


triangles.forEach(function(triangle) {
  triangle.addEventListener('click', function(e) {
    e.stopPropagation();
    const style = window.getComputedStyle(triangle)
    const left = style.borderLeft.split(" ")[0]
    const right = style.borderRight.split(" ")[0]
    const bottom = style.borderBottom.split(" ")[0]
    console.log(style.borderLeft)
    if (allSidesEqual(getPixels(left), getPixels(right), getPixels(bottom))) {
        showResult(triangle.nextElementSibling, 'I am an equilateral triangle.')
      } else if (twoSidesEqual(getPixels(left), getPixels(right), getPixels(bottom))) {
        showResult(triangle.nextElementSibling, 'I am an isosceles triangle.')
      } else {
        showResult(triangle.nextElementSibling, 'I am a scalene triangle.')
      }
  })
})

function getPixels(border) {
  return border.split(" ")[0]
}


function allSidesEqual(side1, side2, side3) {
  return side1 === side2 && side2 === side3
}

function twoSidesEqual(side1, side2, side3) {
  return side1 === side2 && side2 !== side3 && side1 !== side3
}

function showResult(result, string) {
  if (!result.innerText) {
    return result.innerText = string
  } else {
    return result.innerText = ''
  }
}
