/**
 * Introduction to class:
 * @class BaseArray
 * @classdesc Represents a custom array implementation with additional methods.
 *
 * Fields:
 * @property {ArrayBuffer} #buffer - Private field for storing the array buffer.
 * @property {number} #size - Private field for tracking the size of the array.
 * @property {TypedArray} #arr - Private field for storing the typed array.
 * @property {string} #valueType - Private field for storing the value type.
 * @property {number} #byteLength - Private field for storing the byte length.
 *
 * @property {string} type - Public field for storing the type of the array.
 * @property {number} length - Public field for storing the length of the array.
 *
 * Methods:
 * @method get.ArrayType
 * @description Getter method for ArrayType. Must be implemented in derived classes.
 *
 * @method array
 * @description Returns a typed array (pointer to the original memory location).
 *
 * @method toArray
 * @description Returns a normal array (copy of the original array).
 *
 * @method clone
 * @description Returns a typed array (copy of the original array).
 *
 * @method set
 * @description Sets the item at the given index.
 * @param {number} index - The index at which to set the value.
 * @param {any} value - The value to set.
 *
 * @method at
 * @description Gets the value at the given index.
 * @param {number} index - The index from which to get the value.
 * @returns {any} The value at the specified index.
 *
 * @method slice
 * @description Returns a new array with elements from start to end (end not included).
 * @param {number} [start=0] - The start index.
 * @param {number} [end=this.length] - The end index.
 * @returns {TypedArray} A new array containing the specified elements.
 *
 * @method push
 * @description Adds elements to the end of the array.
 * @param {any} value - The value(s) to add to the end of the array.
 * @returns {number} The new length of the array.
 *
 * @method pop
 * @description Removes the last element from the array.
 * @returns {any} The removed element.
 *
 * @method unshift
 * @description Adds elements to the beginning of the array.
 * @param {any} value - The value(s) to add to the beginning of the array.
 * @returns {number} The new length of the array.
 *
 * @method shift
 * @description Removes the first element from the array.
 * @returns {any} The removed element.
 *
 * @method concat
 * @description Returns a new array by concatenating this array with other arrays.
 * @param {TypedArray} arr - Arrays to concatenate to the current array.
 * @returns {TypedArray} A new array resulting from the concatenation of the arrays.
 *
 * @method sort
 * @description Sorts the array in-place.
 * @param {Function} [comparisonFunction] - A function that defines the sort order. If omitted, the array is sorted lexicographically.
 * @returns {TypedArray} The sorted array.
 *
 * @method reverse
 * @description Reverses the elements of the array in-place.
 * @returns {TypedArray} The reversed array.
 *
 * @method fill
 * @description Fills the array with a static value.
 * @param {any} value - The value to fill the array with.
 * @param {number} [start=0] - The start index.
 * @param {number} [end=this.length] - The end index.
 * @returns {TypedArray} The modified array.
 *
 * @method indexOf
 * @description Returns the first index at which a given element is found.
 * @param {any} searchElement - The element to search for.
 * @param {number} [fromIndex=0] - The index to start the search at.
 * @returns {number} The first index of the element in the array; -1 if not found.
 *
 * @method lastIndexOf
 * @description Returns the last index at which a given element is found.
 * @param {any} searchElement - The element to search for.
 * @param {number} [fromIndex=this.length-1] - The index to start the search at (from the end).
 * @returns {number} The last index of the element in the array; -1 if not found.
 *
 * @method includes
 * @description Determines whether the array includes a certain element.
 * @param {any} searchElement - The element to search for.
 * @param {number} [fromIndex=0] - The index to start the search at.
 * @returns {boolean} True if the element is found; false otherwise.
 *
 * @method findIndex
 * @description Returns the index of the first element that satisfies the provided testing function.
 * @param {Function} callbackFn - A function that accepts up to three arguments: currentValue, index, and array.
 * @param {any} thisArg - Object to use as `this` when executing callback.
 * @returns {number} The index of the first satisfying element; -1 if not found.
 *
 * @method findLast
 * @description Returns the last element that satisfies the provided testing function.
 * @param {Function} callbackFn - A function that accepts up to three arguments: currentValue, index, and array.
 * @param {any} thisArg - Object to use as `this` when executing callback.
 * @returns {any} The last satisfying element; undefined if not found.
 *
 * @method findLastIndex
 * @description Returns the last index of an element that satisfies the provided testing function.
 * @param {Function} callbackFn - A function that accepts up to three arguments: currentValue, index, and array.
 * @param {any} thisArg - Object to use as `this` when executing callback.
 * @returns {number} The last index of the satisfying element; -1 if not found.
 *
 * @method every
 * @description Tests whether all elements in the array pass the provided function.
 * @param {Function} callbackFn - A function that accepts up to three arguments: currentValue, index, and array.
 * @param {any} thisArg - Object to use as `this` when executing callback.
 * @returns {boolean} True if all elements pass the condition; false otherwise.
 *
 * @method some
 * @description Tests whether at least one element in the array passes the provided function.
 * @param {Function} callbackFn - A function that accepts up to three arguments: currentValue, index, and array.
 * @param {any} thisArg - Object to use as `this` when executing callback.
 * @returns {boolean} True if at least one element passes the condition; false otherwise.
 *
 * @method filter
 * @description Returns a new array containing elements that satisfy the provided testing function.
 * @param {Function} callbackFn - A function that accepts up to three arguments: currentValue, index, and array.
 * @param {any} thisArg - Object to use as `this` when executing callback.
 * @returns {TypedArray} A new array containing satisfying elements.
 *
 * @method map
 * @description Creates a new array with the results of calling a provided function on every element in this array.
 * @param {Function} callbackFn - A function that accepts up to three arguments: currentValue, index, and array.
 * @param {any} thisArg - Object to use as `this` when executing callback.
 * @returns {TypedArray} A new array with the mapped results.
 *
 * @method forEach
 * @description Executes a provided function once for each array element.
 * @param {Function} callbackFn - A function that accepts up to three arguments: currentValue, index, and array.
 * @param {any} thisArg - Object to use as `this` when executing callback.
 *
 * @method reduce
 * @description Applies a function against an accumulator and each element in the array (left-to-right).
 * @param {Function} callbackFn - A function that accepts four arguments: accumulator, currentValue, index, and array.
 * @param {any} [initialValue] - The initial value of the accumulator.
 * @returns {any} The accumulated result.
 *
 * @method reduceRight
 * @description Applies a function against an accumulator and each element in the array (right-to-left).
 * @param {Function} callbackFn - A function that accepts four arguments: accumulator, currentValue, index, and array.
 * @param {any} [initialValue] - The initial value of the accumulator.
 * @returns {any} The accumulated result.
 *
 * @method join
 * @description Joins all elements of an array into a string.
 * @param {string} [separator=','] - Specifies a string to separate each element of the array.
 * @returns {string} The joined string.
 *
 * Private Methods:
 * @method #grow
 * @description Doubles the size of the array buffer.
 * @param {number} [size=this.#size * 2] - The target size of the array buffer.
 * @private
 * @returns {void}
 *
 * @method #shrink
 * @description Halves the size of the array buffer.
 * @private
 * @returns {void}
 */

class BaseArray {
  // Private fields
  #buffer;
  #size;
  #arr;
  #valueType;
  #byteLength;

  constructor(length, type, valueType, byteLength) {
    // Private fields
    this.#size = Math.max(10, length);
    this.#byteLength = byteLength;
    this.#buffer = new ArrayBuffer(this.#size * this.#byteLength);
    this.#arr = new this.ArrayType(this.#buffer);
    this.#valueType = valueType;

    // Public fields
    this.type = type;
    this.length = length;
  }

  get ArrayType() {
    throw Error("ArrayType must be implemented in derived classes");
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
    if (index < 0 || index >= this.length) return undefined;
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
    if (this.length === 0) throw Error("Array is empty");
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

  sort(comparisonFunction = undefined) {
    var arr = this.array();

    if (!comparisonFunction) {
      comparisonFunction = (a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
      };
    }
    
    return arr.sort(comparisonFunction);
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

  lastIndexOf(searchElement, fromIndex = this.length - 1) {
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
    var buffer = new ArrayBuffer(this.#size * this.#byteLength);
    var newArr = new this.ArrayType(buffer);
    for (var i = 0; i < this.#size; ++i) newArr[i] = this.#arr[i];
    this.#buffer = buffer;
    this.#arr = newArr;
  }

  #shrink() {
    this.#size = Math.max(Math.floor(this.#size / 2), 10);
    var buffer = new ArrayBuffer(this.#size * this.#byteLength);
    var newArr = new this.ArrayType(buffer);
    for (var i = 0; i < this.#size; ++i) newArr[i] = this.#arr[i];
    this.#buffer = buffer;
    this.#arr = newArr;
  }
}

module.exports = BaseArray;
