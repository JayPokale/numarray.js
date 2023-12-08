const IntegerArray = require("../baseArray/integerArray");

class Uint16 extends IntegerArray {
  constructor(length) {
    super(length, "Uint16", "number", 2);
  }

  get ArrayType() {
    return Uint16Array;
  }
}

module.exports = Uint16;