function insertDash(num) {
  let numArray = num.toString().split('');
  let result = '';
  for (let i = 0; i < numArray.length; i++) {
    result += numArray[i];
    if (parseInt(numArray[i]) % 2 === 1 && parseInt(numArray[i + 1]) % 2 === 1) {
      result += '-';
    }
  }
  return result;
}