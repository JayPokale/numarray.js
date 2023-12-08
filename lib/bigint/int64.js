const BaseArray = require("../baseArray/baseArray");

class BigInt64 extends BaseArray {
  constructor(length) {
    super(length, "BigInt", "bigint", 8);
  }

  get ArrayType() {
    return BigInt64Array;
  }
}

module.exports = BigInt64;
