const IntegerArray = require("../baseArray/integerArray");

class Uint32 extends IntegerArray {
  constructor(length) {
    super(length, "Uint32", "number", 4);
  }

  get ArrayType() {
    return Uint32Array;
  }
}

module.exports = Uint32;
