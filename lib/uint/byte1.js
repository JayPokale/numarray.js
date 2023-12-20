const IntegerArray = require("../baseArray/integerArray");

class Uint8 extends IntegerArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "Uint8", "number", 1);
  }

  /**
   * @method
   * @returns {Uint8Array}
   * @override
   */
  get ArrayType() {
    return Uint8Array;
  }
}

module.exports = Uint8;
