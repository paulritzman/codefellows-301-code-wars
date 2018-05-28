function capitalize(s,arr){
  let resStr = '';

  for (let i = 0; i < s.length; i++) {arr.includes(i) ? resStr += s[i].toUpperCase() : resStr += s[i];}

  return resStr;
}