const IntegerArray = require("../baseArray/integerArray");

class Int32 extends IntegerArray {
  constructor(length = 10) {
    super(length, "Int16");
  }

  get ArrayType() {
    return Int32Array;
  }
}

module.exports = Int32;
