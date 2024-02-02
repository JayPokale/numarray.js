const BaseArray = require("./baseArray");

class IntegerArray extends BaseArray {
  /**
   * @param {number} length
   * @param {string} type
   * @param {string} valueType
   * @param {number} byteLength
   */
  constructor(length, type, valueType, byteLength) {
    super(length, type, valueType, byteLength);
  }

  /**
   * @method
   * @param {Function} [comparisonFunction]
   * @returns {object}
   * @override
   */
  sort(comparisonFunction = undefined) {
    var arr = this.array();

    if (comparisonFunction) return arr.sort(comparisonFunction);

    var minElement = arr[0];
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] < minElement) {
        minElement = arr[i];
      } else if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    var range = maxElement - minElement + 1;

    if (this.length + range > this.length * Math.log2(this.length)) {
      return arr.sort((a, b) => a - b);
    }

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
