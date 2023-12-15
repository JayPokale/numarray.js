# Typed NumArray

Fast and efficient numeric array operations in JavaScript.

## Install

```bash
npm install typed-numarray
# or
yarn add typed-numarray
# or
pnpm install typed-numarray
# or
bun install typed-numarray
```

### require

```js
const NumArray = require("typed-numarray");
```

### import

```js
import NumArray from "typed-numarray";
```

## Example

```js
import NumArray from "typed-numarray";

// Create 32 byte integer array of length 10
const arr = NumArray("int32", 10);
```

## Recommended

- Use `sort()` to get over 5x perrformance whili sorting array in ascending order.
- Use `reduceMemory()` to clean up some space to optimize memory.

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
import NumArray from "typed-numarray";

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
import NumArray from "typed-numarray";

// Initilise Array
const arr = NumArray("int32", 10);

// Set 42 at index 5
arr.set(5, 42);

// Get Element at index 5
arr.at(5); // 42
```

### Basic Methods

```js
import NumArray from "typed-numarray";

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

### Sort

```js
import NumArray from "typed-numarray";

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
import NumArray from "typed-numarray";

// Initilise Array
const arr = NumArray("int32", 10);

// Reduce memory
arr.reduceMemory();
```

### Other Methods (Standard Methods)

```js
import NumArray from "typed-numarray";

// Initilise Array
const arr = NumArray("int32", 10);

// Reverse the array
arr.reverse();

// Fill 5 at index 3 to 8 (Index 8 not included)
arr.fill(5, 3, 8);

// Find index of 5 (Start scanning from index 2)
arr.indexOf(5, 2);

// Find index of 5 (Start scanning backwards from index 8)
arr.lastIndexOf(5, 8);

// Determines whether the array includes 5
arr.includes(5, 0);

// Returns the index of the first element that satisfies the provided testing function
arr.findIndex((x) => x % 2 === 1);

// Returns the last element that satisfies the provided testing function
arr.findLast((x) => x % 2 === 1);

// Returns the index of the last element that satisfies the provided testing function
arr.findLastIndex((x) => x % 2 === 1);

// Tests whether all elements in the array pass the provided function
arr.every((x) => x % 2 === 1);

// Tests whether some elements in the array pass the provided function
arr.some((x) => x % 2 === 1);

// Returns a new array containing elements that satisfy the provided testing function
arr.filter((x) => x % 2 === 1);

// Returns same array aafter calling the provided function on every element in this array
arr.map((x) => x + 5);

// Executes a provided function once for each array element
arr.forEach((x) => 2 * x);

// Executes a provided function once for each array element
arr.reduce((a, b) => a + b, 0);

// Applies a function against an accumulator and each element in the array (right-to-left)
arr.reduceRight((a, b) => a + b, 0);

// Joins all elements of the array into a string
arr.join(",");
```
