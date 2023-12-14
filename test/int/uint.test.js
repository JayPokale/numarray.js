const Uint8 = require("../../lib/uint/byte1");
const Uint16 = require("../../lib/uint/byte2");
const Uint32 = require("../../lib/uint/byte4");
const NumArray = require("../../main");

describe("Uint8Array", () => {
  test("should create an instance of Uint8", () => {
    const uint8 = NumArray("uint8", 10);
    expect(uint8).toBeInstanceOf(Uint8);
  });

  test("should have the correct type", () => {
    const uint8 = NumArray("uint8", 10);
    expect(uint8.type).toBe("Uint8");
  });

  test("uint8 array should be instance of Uint8Array", () => {
    const uint8 = NumArray("uint8", 10);
    const array = uint8.array();
    expect(array instanceof Uint8Array).toBe(true);
  });
});

describe("Uint16Array", () => {
  test("should create an instance of Uint16", () => {
    const uint16 = NumArray("uint16", 10);
    expect(uint16).toBeInstanceOf(Uint16);
  });

  test("should have the correct type", () => {
    const uint16 = NumArray("uint16", 10);
    expect(uint16.type).toBe("Uint16");
  });

  test("uint16 array should be instance of Uint16Array", () => {
    const uint16 = NumArray("uint16", 10);
    const array = uint16.array();
    expect(array instanceof Uint16Array).toBe(true);
  });
});

describe("Uint32Array", () => {
  test("should create an instance of Uint32", () => {
    const uint32 = NumArray("uint32", 10);
    expect(uint32).toBeInstanceOf(Uint32);
  });

  test("should have the correct type", () => {
    const uint32 = NumArray("uint32", 10);
    expect(uint32.type).toBe("Uint32");
  });

  test("uint32 array should be instance of Uint32Array", () => {
    const uint32 = NumArray("uint32", 10);
    const array = uint32.array();
    expect(array instanceof Uint32Array).toBe(true);
  });
});
