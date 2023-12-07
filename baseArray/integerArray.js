const BaseArray = require("./baseArray");

class IntegerArray extends BaseArray {
  constructor(length, arrayType) {
    super(length, arrayType);
  }

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
      if (x) {
        while (x--) {
          arr[index++] = cur + minElement;
        }
      }
    });
    return arr;
  }
}

module.exports = IntegerArray;
