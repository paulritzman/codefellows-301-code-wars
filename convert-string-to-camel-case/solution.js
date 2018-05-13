function toCamelCase(str){
  let strArr = str.split(/[-_]/g);

  strArr.forEach(function(elem, i) {
    if (i > 0) {
      let camelWord = `${elem.charAt(0).toUpperCase()}${elem.slice(1)}`;
      strArr.splice(i, 1, camelWord);
    }
  });

  return strArr.join('');
}
