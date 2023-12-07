const BigInt64 = require("./bigint/int64");
const BigUint64 = require("./bigint/uint64");
const Float32 = require("./float/byte4");
const Float64 = require("./float/byte8");
const Int8 = require("./int/byte1");
const Int16 = require("./int/byte2");
const Int32 = require("./int/byte4");
const Uint8 = require("./uint/byte1");
const Uint16 = require("./uint/byte2");
const Uint32 = require("./uint/byte4");

function TypedArray(type = "Int32", length = 10) {
  if (length < 0) {
    throw new Error("Array length is not valid");
  }

  // Int Array
  if (type === "Int8") return new Int8(length);
  if (type === "Int16") return new Int16(length);
  if (type === "Int32") return new Int32(length);

  // Uint Array
  if (type === "Uint8") return new Uint8(length);
  if (type === "Uint16") return new Uint16(length);
  if (type === "Uint32") return new Uint32(length);

  // Float Array
  if (type === "Float32") return new Float32(length);
  if (type === "Float64") return new Float64(length);

  // BigInt
  if (type === "BigInt") return new BigInt64(length);
  if (type === "BigUint") return new BigUint64(length);
}

module.exports = TypedArray
