const IntegerArray = require("../baseArray/integerArray");

class Uint32 extends IntegerArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "Uint32", "number", 4);
  }

  /**=
   * @method
   * @returns {Uint32Array}
   * @override
   */
  get ArrayType() {
    return Uint32Array;
  }
}

module.exports = Uint32;
