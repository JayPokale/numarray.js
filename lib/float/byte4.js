const BaseArray = require("../baseArray/baseArray");

class Float32 extends BaseArray {
  /**
   * Create a Float32 array.
   * @param {number} length - The initial length of the array.
   */
  constructor(length) {
    super(length, "Float32", "number", 4);
  }

  /**
   * Getter method for ArrayType.
   * @method
   * @returns {Float32Array} The type of the array.
   * @override
   */
  get ArrayType() {
    return Float32Array;
  }
}

module.exports = Float32;
