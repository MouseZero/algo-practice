function treeCreator (arrayOfValues) {
  for (let i=arrayOfValues.length-1; i>=0; i--) {
    const firstChild = i + i + 1
    const left = arrayOfValues[firstChild] || null
    const right = arrayOfValues[firstChild+1] || null
    arrayOfValues[i] = {
      val: arrayOfValues[i],
      left, right
    }
  }
  return arrayOfValues[0]
}

module.exports = {
  treeCreator
}
