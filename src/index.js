
module.exports = function towelSort(array) {
  if (arguments.length === 0 || !array.length) {
    return [];
  }
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      for (let j = array[i].length - 1; j >= 0; j--) {
        newArray.push(array[i][j]);
      }
    } else {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
};
