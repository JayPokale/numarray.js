const IntegerArray = require("../baseArray/integerArray");

class Uint16 extends IntegerArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "Uint16", "number", 2);
  }

  /**
   * @method
   * @returns {Uint16Array}
   * @override
   */
  get ArrayType() {
    return Uint16Array;
  }
}

module.exports = Uint16;
