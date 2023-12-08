const IntegerArray = require("../baseArray/integerArray");

class Int16 extends IntegerArray {
  constructor(length) {
    super(length, "Int16", "number", 2);
  }

  get ArrayType() {
    return Int16Array;
  }
}

module.exports = Int16;