/*
  Introduction to class:

  Fields {
    Private {
      #buffer;
      #size;
      #arr;
    },
    Public {
      type = Uint8
      length
    }
  },

  Methods {
    get {
      ArrayType   -> Must be overwrited before used
    }

    Public {
      array       -> Return typed array (Pointer to original memory location)
      toArray     -> Return normal array (Copy of original array)
      clone       -> Return typed array (Copy of original array)
      set         -> Set item at given index
      
      // Below methods are doing same as original array methods but code written from scratch
      at
      slice
      push
      pop
      unshift
      shift
      concat
      sort

      // Code reused from original method
      reverse
      fill
      indexOf
      lastIndexOf
      includes
      findIndex
      findLast
      findLastIndex
      every
      some
      filter
      map
      forEach
      reduce
      reduceRight
      join
    },

    Private {
      #grow       -> Double the size of buffer
      #shrink     -> Half the size of buffer
      #sort       -> Sort in private
    }
  }
*/

class BaseArray {
  // Private fields
  #buffer;
  #size;
  #arr;
  #valueType;

  constructor(length, arrayType, valueType = "number") {
    // Private fields
    this.#size = Math.max(10, length);
    this.#buffer = new ArrayBuffer(this.#size);
    this.#arr = new this.ArrayType(this.#buffer);
    this.#valueType = valueType;

    // Public fields
    this.type = arrayType;
    this.length = length;
  }

  get ArrayType() {
    throw new Error("ArrayType must be implemented in derived classes");
  }

  // Newly introduced methods to array
  array() {
    return new this.ArrayType(this.#buffer, 0, this.length);
  }

  toArray() {
    return Array.from(this.array());
  }

  clone() {
    return this.#arr.slice(0, this.length);
  }

  set(index, value) {
    if (index >= this.length) {
      this.length = index + 1;
      if (index >= this.#size) {
        this.#grow(index + 1);
      }
    }
    this.#arr[index] = value;
  }

  // Standard array methods (recreated)
  at(index) {
    if (index < 0) index += this.length;
    if (index < 0 || index >= this._length) return undefined;
    return this.#arr[index];
  }

  slice(start = 0, end = this.length) {
    if (start < 0) start += this.length;
    if (start < 0) start = 0;
    if (end > this.length) end = this.length;
    return this.#arr.slice(start, end);
  }

  push(value) {
    if (typeof value !== this.#valueType) return;
    if (this.#size === this.length) this.#grow();
    this.#arr[this.length++] = value;
    return value;
  }

  pop() {
    if (this.length === 0) return;
    var popped = this.#arr[--this.length];
    if (this.length < this.#size / 2) this.#shrink();
    return popped;
  }

  unshift(value) {
    if (typeof value !== this.#valueType) return;
    if (this.#size === this.length) this.#grow();
    for (var i = this.length; i > 0; --i) {
      this.#arr[i] = this.#arr[i - 1];
    }
    this.length++;
    this.#arr[0] = value;
    return value;
  }

  shift() {
    if (this.length === 0) throw Error("Array is empty");
    var shifted = this.#arr[0];
    if (this.length < this.#size / 2) this.#shrink();
    for (var i = 1; i < this.length; ++i) {
      this.#arr[i - 1] = this.#arr[i];
    }
    this.length--;
    return shifted;
  }

  concat(arr) {
    var newArr = new Uint8Arr(this.length + arr.length);
    var index = 0,
      pointer = 0;
    while (index < this.length) {
      newArr.set(index, this.#arr[index]);
      ++index;
    }
    while (index < newArr.length) {
      newArr.set(index, arr[pointer]);
      ++pointer;
      ++index;
    }
  }

  sort(comparisonFunction = undefined) {
    var arr = this.array();
    if (comparisonFunction) return arr.sort(comparisonFunction);
    return arr.sort((a, b) => a - b);
  }

  // Standard array methods (reused)
  reverse() {
    var arr = this.array();
    return arr.reverse();
  }

  fill(value, start = 0, end = this.length) {
    var arr = this.array();
    return arr.fill(value, start, end);
  }

  indexOf(searchElement, fromIndex = 0) {
    var arr = this.array();
    return arr.indexOf(searchElement, fromIndex);
  }

  lastIndexOf(searchElement, fromIndex = 0) {
    var arr = this.array();
    return arr.lastIndexOf(searchElement, fromIndex);
  }

  includes(searchElement, fromIndex = 0) {
    var arr = this.array();
    return arr.includes(searchElement, fromIndex);
  }

  findIndex(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.findIndex(callbackFn, thisArg);
  }

  findLast(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.findLast(callbackFn, thisArg);
  }

  findLastIndex(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.findLastIndex(callbackFn, thisArg);
  }

  every(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.every(callbackFn, thisArg);
  }

  some(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.some(callbackFn, thisArg);
  }

  filter(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.filter(callbackFn, thisArg);
  }

  map(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.map(callbackFn, thisArg);
  }

  forEach(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.forEach(callbackFn, thisArg);
  }

  reduce(callbackFn, initialValue = 0) {
    var arr = this.array();
    return arr.reduce(callbackFn, initialValue);
  }

  reduceRight(callbackFn, initialValue = 0) {
    var arr = this.array();
    return arr.reduceRight(callbackFn, initialValue);
  }

  join(separator = ",") {
    var arr = this.array();
    return arr.join(separator);
  }

  // Private methods
  #grow(size = this.#size * 2) {
    this.#size = size;
    var buffer = new ArrayBuffer(this.#size);
    var newArr = new this.ArrayType(buffer);
    for (var i = 0; i < this.#size; ++i) newArr[i] = this.#arr[i];
    this.#buffer = buffer;
    this.#arr = newArr;
  }

  #shrink() {
    this.#size = Math.max(Math.floor(this.#size / 2), 10);
    var buffer = new ArrayBuffer(this.#size);
    var newArr = new this.ArrayType(buffer);
    for (var i = 0; i < this.#size; ++i) newArr[i] = this.#arr[i];
    this.#buffer = buffer;
    this.#arr = newArr;
  }
}

module.exports = BaseArray;
