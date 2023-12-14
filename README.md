# NumArray.js

Fast and efficient numeric array operations in JavaScript.

## Install

```bash
npm install numarray.js
# or
yarn add numarray.js
# or
pnpm install numarray.js
# or
bun install numarray.js
```

### require

```js
const NumArray = require("numarray.js");
```

### import

```js
import NumArray from "numarray.js";
```

## Example

```js
import NumArray from "numarray.js";

// Create 32 byte integer array of length 10
const arr = NumArray("int32", 10);
```

NumArray() accepts two parameters.

1. type {string}
2. length {number}

```
// It supports following types:
// Signed integers
1. int8
2. int16
3. int32

// Unsigned integers
1. uint8
2. uint16
3. uint32

// Floats
1. float32
2. float64

// BigInt
1. int64
2. uint64
```

## Examples

```js
// Signed integers
const int8 = NumArray("int8", 10); // Int8Array
const int16 = NumArray("int16", 10); // Int16Array
const int32 = NumArray("int32", 10); // Int32Array

// Unsigned integers
const uint8 = NumArray("uint8", 10); // Uint8Array
const uint16 = NumArray("uint16", 10); // Uint16Array
const uint32 = NumArray("uint32", 10); // Uint32Array

// Floats
const float32 = NumArray("float32", 10); // Float32Array
const float64 = NumArray("float64", 10); // Float64Array

// BigInt
const int64 = NumArray("int64", 10); // BigInt64Array
const uint64 = NumArray("uint64", 10); // BigUint64Array
```

## Methods

### Access Array

```js
import NumArray from "numarray.js";

// Initilise Array
const arr = NumArray("int32", 3);

// array() gives current typed array
arr.array(); // Uint32Array [0, 0, 0]

// toArray() gives new normal array
arr.toArray(); // [0, 0, 0]

// clone() gives new typed array
arr.clone(); // Uint32Array [0, 0, 0]

// slice(start, end) gives new slice array containing elements from start to end-1
arr.slice(1, 3); // Uint32Array [0, 0]
```

### Access Elements

```js
import NumArray from "numarray.js";

// Initilise Array
const arr = NumArray("int32", 10);

// Set 42 at index 5
arr.set(5, 42);

// Get Element at index 5
arr.at(5); // 42
```

### Basic Methods

```js
import NumArray from "numarray.js";

// Initilise Array
const arr = NumArray("int32", 10);

// Insert 5 at end of array
arr.push(5); // 5

// Pop last element
arr.pop(); // 5

// Insert 8 at beginning of array
arr.unshift(8); // 8

// Remove element from beginning of array
arr.shift(); // 8
```

### sort

In Integer array, normal sorting is 4.6 times faster in average

```js
import NumArray from "numarray.js";

// Initilise Array
const arr = NumArray("int32", 10);

// Sort in ascending order
arr.sort();

// Sort with comparison function
arr.sort((a, b) => b - a);
// or
arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
```

### Reduce memory of current array

```js
import NumArray from "numarray.js";

// Initilise Array
const arr = NumArray("int32", 10);

// Reduce memory
arr.reduceMemory();
```

### Other Methods (Standard Methods)

```js
import NumArray from "numarray.js";

// Initilise Array
const arr = NumArray("int32", 10);

arr.reverse();
arr.fill(5, 3, 8);
arr.indexOf(5, 0);
arr.lastIndexOf(5, 10);
arr.includes(5, 0);
arr.findIndex((x) => x % 2 === 1);
arr.findLast((x) => x % 2 === 1);
arr.findLastIndex((x) => x % 2 === 1);
arr.every((x) => x % 2 === 1);
arr.some((x) => x % 2 === 1);
arr.filter((x) => x % 2 === 1);
arr.map((x) => x + 5);
arr.forEach((x) => 2 * x);
arr.reduce((a, b) => a + b, 0);
arr.reduceRight((a, b) => a + b, 0);
arr.join(",");
```
