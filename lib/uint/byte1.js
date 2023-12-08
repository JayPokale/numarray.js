const IntegerArray = require("../baseArray/integerArray");

class Uint8 extends IntegerArray {
  constructor(length) {
    super(length, "Uint8", "number", 1);
  }

  get ArrayType() {
    return Uint8Array;
  }
}

module.exports = Uint8;
