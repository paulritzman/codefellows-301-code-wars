function cubeOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {return undefined;}
  }

  return arr.filter(elem => elem % 2 === 1 || elem % 2 === -1).reduce((a, elem) => a + (elem*elem*elem), 0);
}