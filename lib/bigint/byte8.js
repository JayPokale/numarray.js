const BaseArray = require("../baseArray/baseArray");

class BigInt64 extends BaseArray {
  /**
   * Create a BigInt64 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "BigInt", "bigint", 8);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {BigInt64Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return BigInt64Array;
  }
}

module.exports = BigInt64;
