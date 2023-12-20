const BaseArray = require("../baseArray/baseArray");

class Float64 extends BaseArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "Float64", "number", 8);
  }

  /**
   * @method
   * @returns {Float64Array}
   * @override
   */
  get ArrayType() {
    return Float64Array;
  }
}

module.exports = Float64;
