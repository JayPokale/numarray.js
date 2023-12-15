const Int8 = require("./lib/int/byte1");
const Int16 = require("./lib/int/byte2");
const Int32 = require("./lib/int/byte4");
const Uint8 = require("./lib/uint/byte1");
const Uint16 = require("./lib/uint/byte2");
const Uint32 = require("./lib/uint/byte4");
const Float32 = require("./lib/float/byte4");
const Float64 = require("./lib/float/byte8");
const BigInt64 = require("./lib/bigint/byte8");
const BigUint64 = require("./lib/biguint/byte8");

/**
 * Creates instances of different numeric array types based on the specified type and length.
 *
 * @param {string} [type="int32"] - The type of the array. Possible values: "int8", "int16", "int32", "int64", "uint8", "uint16", "uint32", "uint64", "float32", "float64".
 * @param {number} [length=0] - The length of the array. Must be a non-negative integer.
 * Returns - An instance of the specified numeric array type.
 * Throws - an error if the array length is not valid or the type is not recognized.
 *
 * @example
 * // Create a 32-bit integer array with a length of 10
 * const intArray = NumArray("int32", 10);
 *
 * // Create a default 32-bit integer array (type defaults to "int32", length defaults to 0)
 * const defaultArray = NumArray();
 */
var NumArray = function (type = "int32", length = 0) {
  if (length < 0) {
    throw new Error("Array length is not valid");
  }

  // Int Array
  if (type === "int8") return new Int8(length);
  if (type === "int16") return new Int16(length);
  if (type === "int32") return new Int32(length);

  // Uint Array
  if (type === "uint8") return new Uint8(length);
  if (type === "uint16") return new Uint16(length);
  if (type === "uint32") return new Uint32(length);

  // Float Array
  if (type === "float32") return new Float32(length);
  if (type === "float64") return new Float64(length);

  // BigInt
  if (type === "int64") return new BigInt64(length);
  if (type === "uint64") return new BigUint64(length);

  throw Error("Enter Valid Type");
};

/**
 * Module exports the NumArray function.
 * @module NumArray
 */
module.exports = NumArray;
