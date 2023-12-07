const IntegerArray = require("../baseArray/integerArray");

class Uint32 extends IntegerArray {
  constructor(length = 10) {
    super(length, "Uint32");
  }

  get ArrayType() {
    return Uint32Array;
  }
}

module.exports = Uint32;
