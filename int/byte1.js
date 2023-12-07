const IntegerArray = require("../baseArray/integerArray");

class Int8 extends IntegerArray {
  constructor(length) {
    super(length, "Int8");
  }

  get ArrayType() {
    return Int8Array;
  }
}

module.exports = Int8;
