const IntegerArray = require("../baseArray/integerArray");

class Uint32 extends IntegerArray {
  /**
   * Create a Uint32 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "Uint32", "number", 4);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {Uint32Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return Uint32Array;
  }
}

module.exports = Uint32;
