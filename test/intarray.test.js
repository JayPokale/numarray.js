const NumberArray = require("../main");

describe("IntArray", () => {
  test("should sort the array in ascending order (Length < 0x100)", () => {
    const BaseArray = NumberArray("int32", 0);
    var arr = Array(0x10)
      .fill()
      .map((_, i) => i);
    arr.sort(() => Math.random() - 0.5);
    arr.forEach((x) => BaseArray.push(x));

    BaseArray.sort();

    expect(BaseArray.at(0)).toBe(0);
    expect(BaseArray.at(0x10 - 1)).toBe(0x10 - 1);
  });

  test("should sort the array in ascending order (Length < 0x100) repeated", () => {
    const BaseArray = NumberArray("int32", 0x10);
    BaseArray.fill(10);

    BaseArray.sort();

    expect(BaseArray.at(0)).toBe(10);
    expect(BaseArray.at(0x10 - 1)).toBe(10);
  });

  test("should sort the array in ascending order (Length < 0x10000)", () => {
    const BaseArray = NumberArray("int32", 0);
    var arr = Array(0x100)
      .fill()
      .map((_, i) => i);
    arr.sort(() => Math.random() - 0.5);
    arr.forEach((x) => BaseArray.push(x));

    BaseArray.sort();

    expect(BaseArray.at(0)).toBe(0);
    expect(BaseArray.at(0x100 - 1)).toBe(0x100 - 1);
  });

  test("should sort the array in ascending order (Length < 0x10000) repeated", () => {
    const BaseArray = NumberArray("int32", 0x100);
    BaseArray.fill(10);

    BaseArray.sort();

    expect(BaseArray.at(0)).toBe(10);
    expect(BaseArray.at(0x100 - 1)).toBe(10);
  });

  test("should sort the array in ascending order (Length >= 0x10000)", () => {
    const BaseArray = NumberArray("int32", 0);
    var arr = Array(0x10000)
      .fill()
      .map((_, i) => i);
    arr.sort(() => Math.random() - 0.5);
    arr.forEach((x) => BaseArray.push(x));

    BaseArray.sort();

    expect(BaseArray.at(0)).toBe(0);
    expect(BaseArray.at(0x10000 - 1)).toBe(0x10000 - 1);
  });

  test("should sort the array in ascending order (Length >= 0x10000) repeated", () => {
    const BaseArray = NumberArray("int32", 0x10000);
    BaseArray.fill(10);

    BaseArray.sort();

    expect(BaseArray.at(0)).toBe(10);
    expect(BaseArray.at(0x10000 - 1)).toBe(10);
  });
});
