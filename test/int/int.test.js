const Int8 = require("../../lib/int/byte1");
const Int16 = require("../../lib/int/byte2");
const Int32 = require("../../lib/int/byte4");
const TypedArray = require("../../main");

describe("Int8Array", () => {
  test("should create an instance of Int8", () => {
    const int8 = TypedArray("int8", 10);
    expect(int8).toBeInstanceOf(Int8);
  });

  test("should have the correct type", () => {
    const int8 = TypedArray("int8", 10);
    expect(int8.type).toBe("Int8");
  });

  test("int8 array should be instance of Int8Array", () => {
    const int8 = TypedArray("int8", 10);
    const array = int8.array();
    expect(array instanceof Int8Array).toBe(true);
  });
});

describe("Int16Array", () => {
  test("should create an instance of Int16", () => {
    const int16 = TypedArray("int16", 10);
    expect(int16).toBeInstanceOf(Int16);
  });

  test("should have the correct type", () => {
    const int16 = TypedArray("int16", 10);
    expect(int16.type).toBe("Int16");
  });

  test("int16 array should be instance of Int16Array", () => {
    const int16 = TypedArray("int16", 10);
    const array = int16.array();
    expect(array instanceof Int16Array).toBe(true);
  });
});

describe("Int32Array", () => {
  test("should create an instance of Int32", () => {
    const int32 = TypedArray("int32", 10);
    expect(int32).toBeInstanceOf(Int32);
  });

  test("should have the correct type", () => {
    const int32 = TypedArray("int32", 10);
    expect(int32.type).toBe("Int32");
  });

  test("int32 array should be instance of Int32Array", () => {
    const int32 = TypedArray("int32", 10);
    const array = int32.array();
    expect(array instanceof Int32Array).toBe(true);
  });
});
