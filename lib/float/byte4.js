const BaseArray = require("../baseArray/baseArray");

class Float32 extends BaseArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "Float32", "number", 4);
  }

  /**
   * @method
   * @returns {Float32Array}
   * @override
   */
  get ArrayType() {
    return Float32Array;
  }
}

module.exports = Float32;
