const IntegerArray = require("../baseArray/integerArray");

class Int8 extends IntegerArray {
  constructor(length) {
    super(length, "Int8", "number", 1);
  }

  get ArrayType() {
    return Int8Array;
  }
}

module.exports = Int8;
