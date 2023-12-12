const BaseArray = require("./baseArray");

/**
 * Class representing an integer array that extends the BaseArray class.
 * @extends BaseArray
 */
class IntegerArray extends BaseArray {
  /**
   * Create an integer array.
   * @param {number} length - The initial length of the array.
   * @param {string} type - The type of the array.
   * @param {string} valueType - The type of values the array will store (either 'number' or 'bigint').
   * @param {number} byteLength - The byte length of each element in the array.
   */
  constructor(length, type, valueType, byteLength) {
    super(length, type, valueType, byteLength);
  }

  /**
   * Sorts the array in ascending order using Pigeonhole Sort or native sort based on the array size and range.
   * @method
   * @param {Function} [comparisonFunction] - A function that defines the sort order. If omitted, the array is sorted in ascending order.
   * @returns {TypedArray} The sorted array.
   * @override
   */
  sort(comparisonFunction = undefined) {
    var arr = this.array();

    if (comparisonFunction) return arr.sort(comparisonFunction);

    var minElement = Math.min(...arr);
    var maxElement = Math.max(...arr);
    var range = maxElement - minElement + 1;

    if (this.length + range > this.length * Math.log2(this.length)) {
      return arr.sort((a, b) => a - b);
    }

    // Pigeonhole Sort (Modified Counting Sort)
    var freq;
    if (this.length < 0x100) {
      freq = new Uint8Array(range);
    } else if (this.length < 0x10000) {
      freq = new Uint16Array(range);
    } else {
      freq = new Uint32Array(range);
    }
    arr.forEach((x) => ++freq[x - minElement]);
    var index = 0;
    freq.forEach((x, cur) => {
      while (x--) {
        arr[index++] = cur + minElement;
      }
    });
    return arr;
  }
}

module.exports = IntegerArray;
