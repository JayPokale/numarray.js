const BaseArray = require("../baseArray/baseArray");

/**
 * Class representing an array of 64-bit unsigned BigInt integers that extends the BaseArray class.
 * @extends BaseArray
 */
class BigUint64 extends BaseArray {
  /**
   * Create a BigUint64 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "BigUint", "bigint", 8);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {BigUint64Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return BigUint64Array;
  }
}

module.exports = BigUint64;
