const IntegerArray = require("../baseArray/integerArray");

class Int16 extends IntegerArray {
  constructor(length = 10) {
    super(length, "Int16");
  }

  get ArrayType() {
    return Int16Array;
  }
}

module.exports = Int16;