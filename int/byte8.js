const IntegerArray = require("../baseArray/integerArray");

class Int8 extends IntegerArray {
  constructor(length = 10) {
    super(length, "Uint8");
  }

  get ArrayType() {
    return Int8Array;
  }
}

module.exports = Int8;
