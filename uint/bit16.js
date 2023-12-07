const IntegerArray = require("../baseArray/integerArray");

class Uint16 extends IntegerArray {
  constructor(length = 10) {
    super(length, "Uint16");
  }

  get ArrayType() {
    return Uint16Array;
  }
}

module.exports = Uint16;