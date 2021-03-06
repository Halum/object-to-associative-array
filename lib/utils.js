/**
 * Created by Halum on 11/23/2017.
 */
'use strict';

const utils = {
  /**
   *
   * @param <Array> inputArray - The input container array
   * @param {Any} value - value to match in the array
   * @returns {boolean} - Whether or no the value exists in the array
   */
  includes(inputArray, value) {
    for(let i = 0; i < inputArray.length; ++i) {
      if(inputArray[i] === value) return true;
    }

    return false;
  },
  /**
   * Check if an array/object is empty
   * @param {Array | Object} input
   * @returns {boolean} - Return whether or not empty
   */
  isEmpty(input) {
    if(Array.isArray(input) && input.length > 0) {
      return false;
    }

    if(typeof input === 'object' && input !== null && Object.keys(input).length > 0) {
      return false;
    }

    return true;
  }
};

module.exports = utils;