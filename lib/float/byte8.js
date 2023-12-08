const BaseArray = require("../baseArray/baseArray");

class Float64 extends BaseArray {
  constructor(length) {
    super(length, "Float64", "number", 8);
  }

  get ArrayType() {
    return Float64Array;
  }
}

module.exports = Float64;
