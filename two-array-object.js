// add whatever parameters you deem necessary

const { getRandomValues } = require("crypto")

// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

// reduce((accumulator, currentValue, currentIndex), initial value)

function twoArrayObject(keys, vals) {

   return keys.reduce((obj, curVal, curIdx) => {
      obj[curVal] = curIdx < vals.length ? vals[curIdx] : null;
      return obj
   }, {})


}
twoArrayObject(['a', 'b', 'a', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}