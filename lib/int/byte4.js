const IntegerArray = require("../baseArray/integerArray");

/**
 * Class representing an array of 32-bit signed integers that extends the IntegerArray class.
 * @extends IntegerArray
 */
class Int32 extends IntegerArray {
  /**
   * Create an Int32 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "Int32", "number", 4);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {Int32Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return Int32Array;
  }
}

module.exports = Int32;
