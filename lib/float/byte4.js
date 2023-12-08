const BaseArray = require("../baseArray/baseArray");

class Float32 extends BaseArray {
  constructor(length) {
    super(length, "Float32", "number", 4);
  }

  get ArrayType() {
    return Float32Array;
  }
}

module.exports = Float32;
