const IntegerArray = require("../baseArray/integerArray");

class Int8 extends IntegerArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "Int8", "number", 1);
  }

  /**
   * @method
   * @returns {Int8Array}
   * @override
   */
  get ArrayType() {
    return Int8Array;
  }
}

module.exports = Int8;
