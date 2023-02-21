module.exports = function reverse(n) {
  const b = Math.abs(n);
  const a = b.toString();
  const splitString = a.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  
  return joinArray;
};
