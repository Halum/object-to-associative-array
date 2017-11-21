/**
 * Created by Halum on 11/22/2017.
 */
'use strict';

/**
 * Converts an object to associative array with {key:value} pair
 * @param {Object} obj - The input object
 * @param {boolean} [deep = true] - Whether or not to deep convert
 * @returns {Array.<Object>} - Converted associative array containing objects with only one {key:value} pair
 */
const toAssociativeArray = function toAssociativeArray(obj, deep) {
  // set default value of deep to true
  if(deep !== false) deep = true;

  let resultArray = [];

  for (let key in obj) {
    if(!obj.hasOwnProperty(key)) {
      // do not convert prototype properties
      continue;
    }
    
    let value = obj[key];
    let item = {};

    if (typeof value === 'object' && deep) {
      // converts recursively
      // works for both object and array
      item[key] = toAssociativeArray(value);
    } else {
      // take only proper valued properties
      item[key] = value;
    }

    resultArray.push(item);
  }

  return resultArray;
};

module.exports = toAssociativeArray;