const IntegerArray = require("../baseArray/integerArray");

class Int16 extends IntegerArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "Int16", "number", 2);
  }

  /**
   * @method
   * @returns {Int16Array}
   * @override
   */
  get ArrayType() {
    return Int16Array;
  }
}

module.exports = Int16;
