function addTwo(x) {
  return x + 2
}

function addThree(y) {
  return y + 3
}

function addFive(c) {
  return addTwo(c) + addThree(c)
}

export {
  addTwo,
  addThree
}

export default addFive
