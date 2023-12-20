const BaseArray = require("../baseArray/baseArray");

class BigInt64 extends BaseArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    super(length, "BigInt", "bigint", 8);
  }

  /**
   * @method
   * @returns {BigInt64Array}
   * @override
   */
  get ArrayType() {
    return BigInt64Array;
  }
}

module.exports = BigInt64;
