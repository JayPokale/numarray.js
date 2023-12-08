const IntegerArray = require("../baseArray/integerArray");

class Int32 extends IntegerArray {
  constructor(length) {
    super(length, "Int32", "number", 4);
  }

  get ArrayType() {
    return Int32Array;
  }
}

module.exports = Int32;
