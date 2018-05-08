function abbrevName(name){
  let result = `${name.charAt(0)}.`;
  for (let i = 1; i < name.length; i++) {
    if (name.charAt(i) === ' ') {
      result += name.charAt(i + 1);
    }
  }
  return result.toUpperCase();
}
