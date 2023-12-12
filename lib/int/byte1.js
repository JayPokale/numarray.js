const IntegerArray = require("../baseArray/integerArray");

/**
 * Class representing an array of 8-bit signed integers that extends the IntegerArray class.
 * @extends IntegerArray
 */
class Int8 extends IntegerArray {
  /**
   * Create an Int8 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "Int8", "number", 1);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {Int8Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return Int8Array;
  }
}

module.exports = Int8;
