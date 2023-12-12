const IntegerArray = require("../baseArray/integerArray");

/**
 * Class representing an array of 16-bit unsigned integers that extends the IntegerArray class.
 * @extends IntegerArray
 */
class Uint16 extends IntegerArray {
  /**
   * Create a Uint16 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "Uint16", "number", 2);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {Uint16Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return Uint16Array;
  }
}

module.exports = Uint16;
