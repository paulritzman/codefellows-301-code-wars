function fixTheMeerkat(arr) {
  let resArray = [];
  for (let i = arr.length; i > 0; i--) {
    resArray.push(arr[i - 1]);
  }
  return resArray;
}