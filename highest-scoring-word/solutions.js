function high(x){
  let newArr = x.split(' ');
  let maxWord = '';
  let maxVal = 0;

  newArr.reduce((score, word) => {
    for (let i = 0; i < word.length; i++) {score += word.charCodeAt(i) - 96;}
    if (score > maxVal) {
      maxVal = score;
      maxWord = word;
    }
    score = 0;
    return score;
  }, 0);

  return maxWord;
}