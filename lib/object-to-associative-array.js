/**
 * Created by Halum on 11/22/2017.
 */
'use strict';

const utils = require('./utils');

let defaultOptions = {
  deep: true,
  discard: [
    // null,
    // undefined
  ]
};

/**
 * Converts an object to associative array with {key:value} pair
 * @param {Object | Array.<Object>} obj - The input object
 * @param {Object} [options] - Conversion options
 * @param {boolean} [options.deep = true] - Whether or not to deep convert
 * @param {Array} [options.discard = true] - Whether or not to deep convert
 * @returns {Array.<Object>} - Converted associative array containing objects with only one {key:value} pair
 */
const toAssociativeArray = function toAssociativeArray(obj, options) {
  if(typeof options !== 'object' || options === null) {
    // fix options if corrupted value provided
    options = {};
  }
  // update default options with provided options
  let opts = Object.assign({}, defaultOptions, options);

  let resultArray = [];

  for (let key in obj) {
    if(!obj.hasOwnProperty(key)) {
      // do not convert prototype properties
      continue;
    }
    
    let value = obj[key];
    let item = {};

    if (typeof value === 'object' && value !== null && opts.deep === true) {
      // converts recursively
      // works for both object and array
      item[key] = toAssociativeArray(value, opts);
    } else if(!utils.includes(opts.discard, value)) {
      // discard necessary values
      // take only proper valued properties
      item[key] = value;
    }

    if(!utils.isEmpty(item)) {
      // check if it is not an empty object/array
      resultArray.push(item);
    }

  }

  return resultArray;
};

module.exports = toAssociativeArray;