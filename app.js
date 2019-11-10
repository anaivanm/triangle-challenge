const triangles = document.querySelectorAll('.triangle')

triangles.forEach(function(triangle) {
  triangle.addEventListener('click', function(e) {
    e.stopPropagation()
    const triangleStyle = window.getComputedStyle(triangle)
    const borderLeft = triangleStyle.borderLeft.split(" ")[0]
    const borderRight = triangleStyle.borderRight.split(" ")[0]
    const borderBottom = triangleStyle.borderBottom.split(" ")[0]
    if (allSidesEqual(borderLeft, borderRight, borderBottom)) {
      showResult(triangle.nextElementSibling, 'I am an equilateral triangle.')
    } else if (twoSidesEqual(borderLeft, borderRight, borderBottom)) {
      showResult(triangle.nextElementSibling, 'I am an isosceles triangle.')
    } else {
      showResult(triangle.nextElementSibling, 'I am a scalene triangle.')
    }
  })
})

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
