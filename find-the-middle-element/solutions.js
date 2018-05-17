var gimme = function (inputArray) {
  let copy = [];

  for (let i = 0; i < inputArray.length; i++) {copy.push(inputArray[i]);}

  inputArray.sort((a,b) => {return a-b;});

  return copy.indexOf(inputArray[1]);
};