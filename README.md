# object-to-associative-array

## Introduction

Convert and array or object to an [associative array](https://en.wikipedia.org/wiki/Associative_array).
Something like [PHP array](http://php.net/manual/en/language.types.array.php).

## Installation

```npm install object-to-associative-array```

#### Requirements
NODE v0.8.0 or higher

## I/O

#### Input
- Input should be an object / array of objects.
- Object values can be primitive data, object or array.
#### Output
- Returns an associative array.
- Each item of the array is an object with only one `key:value` pair.
- Deep conversion is done by default.
- Pass **false** for shallow conversion.

#### Configure Options
```javascript
  let configureOptions = {
    deep: true, // whether or not to do deep conversion
    discard: [] // discard this values in the result array
  };
  
  let arr = toAssociativeArray({}, configureOptions);
```

## Examples

##### Simple Conversion
```javascript
const toAssociativeArray = require('object-to-associative-array');

let obj = {
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5
  }
};

let arr = toAssociativeArray(obj);
// [{"a":1},{"b":2},{"c":[{"d":4},{"e":5}]}]
```

##### Conversion With Discard
```javascript
const toAssociativeArray = require('object-to-associative-array');

let opts = {
  discard: [null, undefined]
}

let obj = {
  a: 1,
  b: null,
  c: {
    d: 4,
    e: undefined
  }
};

let arr = toAssociativeArray(obj, opts);
[{"a":1},{"c":[{"d":4}]}]
```

##### Deep Convertion
>Default convertion is default.
```javascript
const toAssociativeArray = require('object-to-associative-array');

let obj = {
  a: 1,
  c: {
    e: ['e1', 'e2'],
    g: {
      i: 9,
      j: [
        {
          k: 11,
          l: 12
        }
      ]
    }
  }
};

let arr = toAssociativeArray(obj);
// [{"a":1},{"c":[{"e":[{"0":"e1"},{"1":"e2"}]},{"g":[{"i":9},{"j":[{"0":[{"k":11},{"l":12}]}]}]}]}]
```

##### Shallow Conversion
```javascript
const toAssociativeArray = require('./index');

let opts = {deep: false};

let obj = {
  a: 1,
  c: {
    e: ['e1', 'e2'],
    g: {
      i: 9,
      j: [
        {
          k: 11,
          l: 12
        }
      ]
    }
  }
};

let arr = toAssociativeArray(obj, opts);
// [{"a":1},{"c":{"e":["e1","e2"],"g":{"i":9,"j":[{"k":11,"l":12}]}}}]
```

## External Dependencies
N/A

## Credits

**Original Author**

* [Sajjad Hossain](https://github.com/Halum)

## Lisence
[MIT](https://github.com/Halum/object-to-associative-array/blob/master/LICENSE) 
