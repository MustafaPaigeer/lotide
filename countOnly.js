const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let truthyItems = [];
  let result = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
        truthyItems.push(item)
    }   
  }
  for (let name of truthyItems) {
    for (let i = 0; i < allItems.length; i++) {
      if (name === allItems[i]) {
        if (name in result) {
          result[name] += 1;
        }
        if (!(name in result)){
          result[name] = 1;
        }                     
      }
    }
  }
  return result;
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);