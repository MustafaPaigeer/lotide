const middle = function(array) {
  let arrayMiddle = Math.floor(array.length / 2);
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[arrayMiddle]];
  } else if (array.length % 2 === 0) {
    return array.slice(arrayMiddle - 1 , arrayMiddle + 1);
  }
};


module.exports = middle;