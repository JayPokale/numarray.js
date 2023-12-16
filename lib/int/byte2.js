const IntegerArray = require("../baseArray/integerArray");

class Int16 extends IntegerArray {
  /**
   * Create an Int16 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "Int16", "number", 2);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {Int16Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return Int16Array;
  }
}

module.exports = Int16;
