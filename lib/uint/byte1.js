const IntegerArray = require("../baseArray/integerArray");

/**
 * Class representing an array of 8-bit unsigned integers that extends the IntegerArray class.
 * @extends IntegerArray
 */
class Uint8 extends IntegerArray {
  /**
   * Create a Uint8 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "Uint8", "number", 1);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {Uint8Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return Uint8Array;
  }
}

module.exports = Uint8;
