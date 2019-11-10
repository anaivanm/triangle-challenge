const triangles = document.querySelectorAll('.triangle')

triangles.forEach(function(triangle) {
  triangle.addEventListener('click', function(e) {
    e.stopPropagation()
    // console.log(this.classList.value)
    const triangleStyle = window.getComputedStyle(triangle)
    const borderLeft = triangleStyle.borderLeft.split(" ")[0]
    const borderRight = triangleStyle.borderRight.split(" ")[0]
    const borderBottom = triangleStyle.borderBottom.split(" ")[0]
    if (allSidesEqual(borderLeft, borderRight, borderBottom)) {
      triangle.nextElementSibling.innerText = 'I am an equilateral triangle.'
    } else if (twoSidesEqual(borderLeft, borderRight, borderBottom)) {
      triangle.nextElementSibling.innerText = 'I am an isosceles triangle.'
    } else {
      triangle.nextElementSibling.innerText = 'I am neither.'
    }
  })
})

function allSidesEqual(side1, side2, side3) {
  return side1 === side2 && side2 === side3
}

function twoSidesEqual(side1, side2, side3) {
  return side1 === side2 && side2 !== side3 && side1 !== side3
}
