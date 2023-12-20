const IntegerArray = require("../baseArray/integerArray");

class Int32 extends IntegerArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "Int32", "number", 4);
  }

  /**
   * @method
   * @returns {Int32Array}
   * @override
   */
  get ArrayType() {
    return Int32Array;
  }
}

module.exports = Int32;
