/**
 * Introduction to class:
 * @class BaseArray
 * @classdesc Represents a custom array implementation with additional methods.
 *
 * Fields:
 * @property {string} type - Public field for storing the type of the array.
 * @property {number} length - Public field for storing the length of the array.
 *
 * Methods:
 * @method get.ArrayType() - Getter method for ArrayType. Must be implemented in derived classes.
 * @method array() - Returns a typed array (pointer to the original memory location).
 * @method toArray() - Returns a normal array (copy of the original array).
 * @method clone() - Returns a typed array (copy of the original array).
 * @method set() - Sets the item at the given index.
 * @method at() - Gets the value at the given index.
 * @method slice() - Returns a new array with elements from start to end (end not included).
 * @method push() - Adds elements to the end of the array.
 * @method pop() - Removes the last element from the array.
 * @method unshift() - Adds elements to the beginning of the array.
 * @method shift() - Removes the first element from the array.
 * @method concat() - Returns a new array by concatenating this array with other arrays.
 * @method sort() - Sorts the array in-place.
 * @method reverse() - Reverses the elements of the array in-place.
 * @method fill() - Fills the array with a static value.
 * @method indexOf() - Returns the first index at which a given element is found.
 * @method lastIndexOf() - Returns the last index at which a given element is found.
 * @method includes() - Determines whether the array includes a certain element.
 * @method findIndex() - Returns the index of the first element that satisfies the provided testing function.
 * @method findLast() - Returns the last element that satisfies the provided testing function.
 * @method findLastIndex() - Returns the last index of an element that satisfies the provided testing function.
 * @method every() - Tests whether all elements in the array pass the provided function.
 * @method some() - Tests whether at least one element in the array passes the provided function.
 * @method filter() - Returns a new array containing elements that satisfy the provided testing function.
 * @method map() - Creates a new array with the results of calling a provided function on every element in this array.
 * @method forEach() - Executes a provided function once for each array element.
 * @method reduce() - Applies a function against an accumulator and each element in the array (left-to-right).
 * @method reduceRight() - Applies a function against an accumulator and each element in the array (right-to-left).
 * @method join() - Joins all elements of an array into a string.
 */

class BaseArray {
  // Private fields
  #buffer;
  #size;
  #arr;
  #valueType;
  #byteLength;

  /**
   * Constructor for creating a BaseArray instance.
   *
   * @param {number} length - The initial length of the array.
   * @param {string} type - The type of the array (e.g., "int8", "uint16", etc.).
   * @param {string} valueType - The type of values the array can hold (e.g., "number").
   * @param {number} byteLength - The byte length of each element in the array.
   *
   * @constructor
   *
   * @description
   * This constructor initializes a BaseArray instance with the specified length, type, value type, and byte length.
   * It creates private fields for managing the array buffer, typed array, and other internal properties.
   * Public fields 'type' and 'length' are also set based on the provided arguments.
   */
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

  /**
   * Getter method for retrieving the ArrayType property.
   * This method must be implemented in derived classes.
   *
   * @throws {Error} Throws an error indicating that ArrayType must be implemented.
   * @returns {undefined} This method always throws an error and does not return a value.
   */
  get ArrayType() {
    throw Error("ArrayType must be implemented in derived classes");
  }

  /**
   * Returns a typed array that represents a view over the original memory location.
   *
   * @returns {TypedArray} A typed array representing the original array's buffer.
   */
  array() {
    return new this.ArrayType(this.#buffer, 0, this.length);
  }

  /**
   * Returns a new array that is a shallow copy of the original array.
   *
   * @returns {Array} A new array containing the same elements as the original array.
   */
  toArray() {
    return Array.from(this.array());
  }

  /**
   * Creates and returns a new array that is a shallow copy of the original array.
   *
   * @returns {TypedArray} A new array containing the same elements as the original array.
   */
  clone() {
    return this.#arr.slice(0, this.length);
  }

  /**
   * Sets the value at the specified index in the array. If the index is greater than or equal to the current length of the array, it adjusts the length accordingly and may grow the underlying buffer.
   *
   * @param {number} index - The index at which to set the value.
   * @param {number|bigint} value - The value to set at the specified index. Should match the type specified by `this.#valueType`.
   */
  set(index, value) {
    value = this.#convertToType(value);

    if (index >= this.length) {
      this.length = index + 1;
      if (index >= this.#size) {
        this.#grow(index + 1);
      }
    }
    this.#arr[index] = value;
  }

  // Standard array methods (recreated)
  /**
   * Gets the value at the specified index in the array. If the index is negative, it is treated as an offset from the end of the array.
   *
   * @param {number} index - The index at which to get the value.
   * @returns {number|bigint|undefined} The value at the specified index, or `undefined` if the index is out of bounds.
   */
  at(index) {
    if (index < 0) index += this.length;
    if (index < 0 || index >= this.length) return undefined;
    return this.#arr[index];
  }

  /**
   * Returns a new array containing elements from the specified start index to the specified end index (end index not included). If start is negative, it is treated as an offset from the end of the array.
   *
   * @param {number} [start=0] - The start index. If negative, it is treated as an offset from the end of the array. Default is `0`.
   * @param {number} [end=this.length] - The end index (not included). If negative, it is treated as an offset from the end of the array. Default is the length of the array.
   * @returns {Array<number|bigint>} A new array containing elements from the specified start index to the specified end index.
   */
  slice(start = 0, end = this.length) {
    if (start < 0) start += this.length;
    if (start < 0) start = 0;
    if (end > this.length) end = this.length;
    return this.#arr.slice(start, end);
  }

  /**
   * Adds elements to the end of the array.
   *
   * @param {number|bigint} value - The value to be added to the end of the array. The type must match the expected value type defined during array creation.
   * @returns {number|bigint} The added value.
   * @throws {Error} Throws an error if the array is empty.
   */
  push(value) {
    value = this.#convertToType(value);
    if (this.#size === this.length) this.#grow();
    this.#arr[this.length++] = value;
    return value;
  }

  /**
   * Removes the last element from the array.
   *
   * @returns {number|bigint} The removed element.
   * @throws {Error} Throws an error if the array is empty.
   */
  pop() {
    if (this.length === 0) throw Error("Array is empty");
    var popped = this.#arr[--this.length];
    if (this.length < this.#size / 2) this.#shrink();
    return popped;
  }

  /**
   * Adds elements to the beginning of the array.
   *
   * @param {number|bigint} value - The value to be added to the beginning of the array. The type must match the expected value type defined during array creation.
   * @returns {number|bigint} The added value.
   */
  unshift(value) {
    value = this.#convertToType(value);
    if (this.#size === this.length) this.#grow();
    for (var i = this.length; i > 0; --i) {
      this.#arr[i] = this.#arr[i - 1];
    }
    this.length++;
    this.#arr[0] = value;
    return value;
  }

  /**
   * Removes the first element from the array.
   *
   * @returns {number|bigint} The removed element.
   * @throws {Error} Throws an error if the array is empty.
   */
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

  /**
   * Sorts the array in-place.
   *
   * @param {function} [comparisonFunction] - A function that defines the sort order. If omitted, the array is sorted in ascending order.
   * @returns {TypedArray} The sorted array.
   */
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
  /**
   * Reverses the elements of the array in-place.
   *
   * @returns {TypedArray} The reversed array.
   */
  reverse() {
    var arr = this.array();
    return arr.reverse();
  }

  /**
   * Fills elements of the array with a static value within the specified range.
   *
   * @param {number | bigint} value - The value to fill the array with.
   * @param {number} [start=0] - The start index. Defaults to 0.
   * @param {number} [end=this.length] - The end index. Defaults to the length of the array.
   * @returns {TypedArray} The filled array.
   */
  fill(value, start = 0, end = this.length) {
    value = this.#convertToType(value);
    var arr = this.array();
    return arr.fill(value, start, end);
  }

  /**
   * Returns the first index at which a given element is found in the array.
   *
   * @param {number | bigint} searchElement - The element to search for.
   * @param {number} [fromIndex=0] - The index to start the search from. Defaults to 0.
   * @returns {number} The index of the first occurrence of the element, or -1 if not found.
   */
  indexOf(searchElement, fromIndex = 0) {
    searchElement = this.#convertToType(searchElement);
    var arr = this.array();
    return arr.indexOf(searchElement, fromIndex);
  }

  /**
   * Returns the last index at which a given element is found in the array.
   *
   * @param {number | bigint} searchElement - The element to search for.
   * @param {number} [fromIndex=this.length - 1] - The index to start the search from. Defaults to the last index.
   * @returns {number} The index of the last occurrence of the element, or -1 if not found.
   */
  lastIndexOf(searchElement, fromIndex = this.length - 1) {
    searchElement = this.#convertToType(searchElement);
    var arr = this.array();
    return arr.lastIndexOf(searchElement, fromIndex);
  }

  /**
   * Determines whether the array includes a certain element.
   *
   * @param {number | bigint} searchElement - The element to check for.
   * @param {number} [fromIndex=0] - The index to start the search from. Defaults to 0.
   * @returns {boolean} True if the element is found, false otherwise.
   */
  includes(searchElement, fromIndex = 0) {
    searchElement = this.#convertToType(searchElement);
    var arr = this.array();
    return arr.includes(searchElement, fromIndex);
  }

  /**
   * Returns the index of the first element that satisfies the provided testing function.
   *
   * @param {function} callbackFn - A function that tests each element.
   * @param {any} [thisArg=undefined] - An object to use as this when executing the callback.
   * @returns {number} The index of the first element that satisfies the condition, or -1 if not found.
   */
  findIndex(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.findIndex(callbackFn, thisArg);
  }

  /**
   * Returns the last element that satisfies the provided testing function.
   *
   * @param {function} callbackFn - A function that tests each element.
   * @param {any} [thisArg=undefined] - An object to use as this when executing the callback.
   * @returns {any} The last element that satisfies the condition, or undefined if not found.
   */
  findLast(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.findLast(callbackFn, thisArg);
  }

  /**
   * Returns the last index of an element that satisfies the provided testing function.
   *
   * @param {function} callbackFn - A function that tests each element.
   * @param {any} [thisArg=undefined] - An object to use as this when executing the callback.
   * @returns {number} The last index of an element that satisfies the condition, or -1 if not found.
   */
  findLastIndex(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.findLastIndex(callbackFn, thisArg);
  }

  /**
   * Tests whether all elements in the array pass the provided function.
   *
   * @param {function} callbackFn - A function that tests each element.
   * @param {any} [thisArg=undefined] - An object to use as this when executing the callback.
   * @returns {boolean} True if all elements satisfy the condition, false otherwise.
   */
  every(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.every(callbackFn, thisArg);
  }

  /**
   * Tests whether at least one element in the array passes the provided function.
   *
   * @param {function} callbackFn - A function that tests each element.
   * @param {any} [thisArg=undefined] - An object to use as this when executing the callback.
   * @returns {boolean} True if at least one element satisfies the condition, false otherwise.
   */
  some(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.some(callbackFn, thisArg);
  }

  /**
   * Returns a new array containing elements that satisfy the provided testing function.
   *
   * @param {function} callbackFn - A function that tests each element.
   * @param {any} [thisArg=undefined] - An object to use as this when executing the callback.
   * @returns {TypedArray} The new array containing elements that satisfy the condition.
   */
  filter(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.filter(callbackFn, thisArg);
  }

  /**
   * Creates a new array with the results of calling a provided function on every element in this array.
   *
   * @param {function} callbackFn - A function that produces an element of the new array for each element of the current array.
   * @param {any} [thisArg=undefined] - An object to use as this when executing the callback.
   * @returns {TypedArray} The new array with the results of calling the provided function on each element.
   */
  map(callbackFn, thisArg = undefined) {
    var arr = this.array();
    return arr.map(callbackFn, thisArg);
  }

  /**
   * Executes a provided function once for each array element.
   *
   * @param {function} callbackFn - A function to execute for each element.
   * @param {any} [thisArg=undefined] - An object to use as this when executing the callback.
   */
  forEach(callbackFn, thisArg = undefined) {
    var arr = this.array();
    arr.forEach(callbackFn, thisArg);
  }

  /**
   * Applies a function against an accumulator and each element in the array (left-to-right).
   *
   * @param {function} callbackFn - A function to execute on each element.
   * @param {any} [initialValue=0] - The initial value of the accumulator.
   * @returns {any} The accumulated result.
   */
  reduce(callbackFn, initialValue = 0) {
    initialValue = this.#convertToType(initialValue);
    var arr = this.array();
    return arr.reduce(callbackFn, initialValue);
  }

  /**
   * Applies a function against an accumulator and each element in the array (right-to-left).
   *
   * @param {function} callbackFn - A function to execute on each element.
   * @param {any} [initialValue=0] - The initial value of the accumulator.
   * @returns {any} The accumulated result.
   */
  reduceRight(callbackFn, initialValue = 0) {
    initialValue = this.#convertToType(initialValue);
    var arr = this.array();
    return arr.reduceRight(callbackFn, initialValue);
  }

  /**
   * Joins all elements of the array into a string.
   *
   * @param {string} [separator=','] - A string that separates the elements of the array in the string.
   * @returns {string} The joined string.
   */
  join(separator = ",") {
    var arr = this.array();
    return arr.join(separator);
  }

  // Private methods
  /**
   * Doubles the size of the array buffer.
   *
   * @private
   * @method
   * @param {number} [size=this.#size * 2] - The new size for the array buffer.
   */
  #grow(size = this.#size * 2) {
    this.#size = size;
    var buffer = new ArrayBuffer(this.#size * this.#byteLength);
    var newArr = new this.ArrayType(buffer);
    for (var i = 0; i < this.#size; ++i) newArr[i] = this.#arr[i];
    this.#buffer = buffer;
    this.#arr = newArr;
  }

  /**
   * Halves the size of the array buffer.
   *
   * @private
   * @method
   */
  #shrink() {
    this.#size = Math.max(Math.floor(this.#size / 2), 10);
    var buffer = new ArrayBuffer(this.#size * this.#byteLength);
    var newArr = new this.ArrayType(buffer);
    for (var i = 0; i < this.#size; ++i) newArr[i] = this.#arr[i];
    this.#buffer = buffer;
    this.#arr = newArr;
  }

  /**
   * Converts the value to the specified type based on #valueType.
   *
   * @private
   * @method
   * @param {any} value - The value to be converted.
   * @returns {number | bigint} The converted value.
   * @throws {Error} Throws an error if the conversion is not possible.
   */
  #convertToType(value) {
    if (this.#valueType === "number") {
      if (typeof value === "number") {
        return value;
      }
      if (typeof value === "bigint") {
        return Number(value);
      }
      throw Error("Invalid Type");
    } else {
      if (typeof value === "bigint") {
        return value;
      }
      if (typeof value === "number") {
        return BigInt(value);
      }
      throw Error("Invalid Type");
    }
  }
}

module.exports = BaseArray;
