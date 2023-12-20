const BaseArray = require("../baseArray/baseArray");

class BigUint64 extends BaseArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "BigUint", "bigint", 8);
  }

  /**
   * @method
   * @returns {BigUint64Array}
   * @override
   */
  get ArrayType() {
    return BigUint64Array;
  }
}

module.exports = BigUint64;
