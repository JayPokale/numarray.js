class BaseArray {
  /**
   * Callback function type used in various array methods.
   * @callback ArrayCallback
   * @param {number | bigint} value - The current element
   * @param {number} index - Index of the current element
   */

  // Private fields
  #buffer;
  #start;
  #size;
  #arr;
  #valueType;
  #byteLength;

  constructor(length, type, valueType, byteLength) {
    // Private fields
    this.#start = 0;
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

  /**
   * Returns a typed array that represents a view over the original memory location.
   */
  array() {
    return new this.ArrayType(
      this.#buffer,
      this.#start * this.#byteLength,
      this.length
    );
  }

  /**
   * Returns a new array that is a shallow copy of the original array.
   */
  toArray() {
    return Array.from(this.array());
  }

  /**
   * Creates and returns a new array that is a shallow copy of the original array.
   */
  clone() {
    return this.#arr.slice(this.#start, this.length + this.#start);
  }

  /**
   * @param {number} index
   * @param {number|bigint} value - Value which is set at index
   */
  set(index, value) {
    value = this.#convertToType(value);

    if (index >= this.length + this.#start) {
      this.length = index + 1;
      if (index + this.#start >= this.#size) {
        this.#grow(index + this.#start + 1);
      }
    }
    this.#arr[index + this.#start] = value;
  }

  // Standard array methods (recreated)
  /**
   * @param {number} index
   * @returns {number|bigint|undefined}
   */
  at(index) {
    if (index < 0) index += this.length;
    if (index < 0 || index >= this.length) return undefined;
    return this.#arr[index + this.#start];
  }

  /**
   * @param {number} [start=0]
   * @param {number} [end=this.length]
   * @returns {Array<number|bigint>} A new array containing elements from the specified start index to the specified end index.
   */
  slice(start = 0, end = this.length) {
    if (start < 0) start += this.length;
    if (start < 0) start = 0;
    if (end > this.length) end = this.length;
    return this.#arr.slice(start + this.#start, end + this.#start);
  }

  /**
   * Adds elements to the end of the array.
   * @param {number|bigint} value - The value to be added to the end of the array.
   * @returns {number|bigint} The added value.
   */
  push(value) {
    value = this.#convertToType(value);
    if (this.#size === this.length + this.#start) this.#grow();
    this.#arr[this.#start + this.length++] = value;
    return value;
  }

  /**
   * Removes the last element from the array.
   * @returns {number|bigint} The removed element.
   * @throws {Error} Throws an error if the array is empty.
   */
  pop() {
    if (this.length === 0) throw Error("Array is empty");
    var popped = this.#arr[--this.length + this.#start];
    return popped;
  }

  /**
   * Adds elements to the beginning of the array.
   * @param {number|bigint} value - The value to be added to the beginning of the array.
   * @returns {number|bigint} The added value.
   */
  unshift(value) {
    value = this.#convertToType(value);
    if (this.#start === 0) {
      this.#grow(this.#size, true);
    }
    this.#arr[--this.#start] = value;
    this.length++;
    return value;
  }

  /**
   * Removes the first element from the array.
   * @returns {number|bigint} The removed element.
   * @throws {Error} Throws an error if the array is empty.
   */
  shift() {
    if (this.length === 0) throw Error("Array is empty");
    var shifted = this.#arr[this.#start++];
    this.length--;
    return shifted;
  }

  /**
   * @param {function} [comparisonFunction] - A function that defines the sort order. If omitted, the array is sorted in ascending order.
   * @returns {object}
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

    arr.sort(comparisonFunction);
    return this;
  }

  // Standard array methods (reused)
  /**
   * @returns {object}
   */
  reverse() {
    var arr = this.array();
    arr.reverse();
    return this;
  }

  /**
   * @param {number | bigint} value - The value to fill the array with.
   * @param {number} [start=0]
   * @param {number} [end=this.length]
   */
  fill(value, start = 0, end = this.length) {
    value = this.#convertToType(value);
    var arr = this.array();
    arr.fill(value, start, end);
    return this;
  }

  /**
   * @param {number | bigint} searchElement - The element to search for.
   * @param {number} [fromIndex=0]
   * @returns {number} -1 if not found.
   */
  indexOf(searchElement, fromIndex = 0) {
    searchElement = this.#convertToType(searchElement);
    var arr = this.array();
    return arr.indexOf(searchElement, fromIndex);
  }

  /**
   * @param {number | bigint} searchElement - The element to search for.
   * @param {number} [fromIndex=this.length - 1]
   * @returns {number} -1 if not found.
   */
  lastIndexOf(searchElement, fromIndex = this.length - 1) {
    searchElement = this.#convertToType(searchElement);
    var arr = this.array();
    return arr.lastIndexOf(searchElement, fromIndex);
  }

  /**
   * @param {number | bigint} searchElement - The element to check for.
   * @param {number} [fromIndex=0]
   * @returns {boolean}
   */
  includes(searchElement, fromIndex = 0) {
    searchElement = this.#convertToType(searchElement);
    var arr = this.array();
    return arr.includes(searchElement, fromIndex);
  }

  /**
   * @param {Function} callbackFn - A function that tests each element.
   * @returns {number} -1 if not found.
   */
  findIndex(callbackFn) {
    var arr = this.array();
    return arr.findIndex(callbackFn);
  }

  /**
   * @param {Function} callbackFn - A function that tests each element.
   * @returns {number | bigint}
   */
  findLast(callbackFn) {
    var arr = this.array();
    return arr.findLast(callbackFn);
  }

  /**
   * @param {Function} callbackFn - A function that tests each element.
   * @returns {number} -1 if not found.
   */
  findLastIndex(callbackFn) {
    var arr = this.array();
    return arr.findLastIndex(callbackFn);
  }

  /**
   * @param {Function} callbackFn - A function that tests each element.
   * @returns {boolean}
   */
  every(callbackFn) {
    var arr = this.array();
    return arr.every(callbackFn);
  }

  /**
   * @param {Function} callbackFn - A function that tests each element.
   * @returns {boolean}
   */
  some(callbackFn) {
    var arr = this.array();
    return arr.some(callbackFn);
  }

  /**
   * Returns same array containing elements that satisfy the provided testing function.
   * @param {Function} callbackFn - A function that tests each element.
   * @returns Same array containing elements that satisfy the condition.
   */
  filter(callbackFn) {
    var arr = this.array();
    var index = 0;
    for (var i = 0; i < arr.length; ++i) {
      if (callbackFn(arr[i], i)) {
        this.#arr[index++] = arr[i];
      }
    }
    this.#start = 0;
    this.length = index;
    this.reduceMemory();
    return this;
  }

  /**
   * @param {ArrayCallback} callbackFn - A function that produces an element of the new array for each element of the current array.
   * @returns Same array after calling the provided function on each element.
   */
  map(callbackFn) {
    var arr = this.array();
    for (var i = 0; i < arr.length; ++i) {
      this.set(i, callbackFn(arr[i], i));
    }
    return this;
  }

  /**
   * Executes a provided function once for each array element.
   * @param {ArrayCallback} callbackFn - A function to execute for each element.
   */
  forEach(callbackFn) {
    var arr = this.array();
    arr.forEach(callbackFn);
  }

  /**
   * Applies a function against an accumulator and each element in the array (left-to-right).
   * @param {Function} callbackFn - A function to execute on each element.
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
   * @param {Function} callbackFn - A function to execute on each element.
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
   * @param {string} [separator=','] - A string that separates the elements of the array in the string.
   * @returns {string} The joined string.
   */
  join(separator = ",") {
    var arr = this.array();
    return arr.join(separator);
  }

  /**
   * Optimise space of array.
   */
  reduceMemory() {
    this.#shrink();
  }

  // Private methods
  /**
   * @private
   * @method
   * @param {number} [size=this.#size * 2]
   * @param {boolean} [offset=false]
   */
  #grow(size = this.#size * 2, offset = false) {
    var front = 0;
    if (offset) front = size >> 2;
    this.#size = size + front;
    var buffer = new ArrayBuffer(this.#size * this.#byteLength);
    var newArr = new this.ArrayType(buffer);
    for (var i = 0; i < this.#size; ++i) newArr[i + front] = this.#arr[i];
    this.#buffer = buffer;
    this.#arr = newArr;
    this.#start = front;
  }

  /**
   * @private
   * @method
   */
  #shrink() {
    if (this.length === this.#size) return;
    this.#size = Math.max(this.length, 10);
    var buffer = new ArrayBuffer(this.#size * this.#byteLength);
    var newArr = new this.ArrayType(buffer);
    for (var i = 0; i < this.#size; ++i) newArr[i] = this.#arr[i + this.#start];
    this.#start = 0;
    this.#buffer = buffer;
    this.#arr = newArr;
  }

  /**
   * @private
   * @method
   * @param {any} value
   * @returns {number | bigint}
   * @throws {Error}
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
