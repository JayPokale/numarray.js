const BaseArray = require("../baseArray/baseArray");

class Float64 extends BaseArray {
  /**
   * Create a Float64 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "Float64", "number", 8);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {Float64Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return Float64Array;
  }
}

module.exports = Float64;
