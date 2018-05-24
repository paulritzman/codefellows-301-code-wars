function mutateMyStrings(stringOne, stringTwo){
  let resArr = [`${stringOne}\n`];

  for (let i = 0; i < stringOne.length; i++) {
    let newWord = `${stringTwo.slice(0, i+1)}${stringOne.slice(i+1, stringOne.length)}\n`;

    if (!resArr.includes(newWord))
      resArr.push(newWord);
  }
  return resArr.join('');
}