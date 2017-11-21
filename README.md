# object-to-associative-array

## Introduction


Sorts an array by key, maintaining key to data correlations. This is useful mainly for associative arrays.
This is a implementation of [PHP ksort()](http://php.net/manual/en/function.ksort.php) without any **sort_flags**.

## Installation

```npm install object-to-associative-array```

#### Requirements
NODE v0.8.0 or higher

## I/O

#### Input
- Input should be an object.
- Object values can be primitive data, object or array.
#### Output
- Returns an associative array.
- Each item of the array is an object with only one `key:value` pair.
- Deep conversion is done by default.
- Pass **false** for shallow conversion.

## Examples

#### Simple Conversion
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

#### Deep Convertion
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

#### Shallow Conversion
```javascript
const toAssociativeArray = require('./index');

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

let arr = toAssociativeArray(obj, false);
// [{"a":1},{"c":{"e":["e1","e2"],"g":{"i":9,"j":[{"k":11,"l":12}]}}}]
```

## External Dependencies
N/A

## Credits

**Original Author**

* [Sajjad Hossain](https://github.com/Halum)
