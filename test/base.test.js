const BaseArray = require("../lib/baseArray/baseArray");
const TypedArray = require("../main");

describe("BaseArray", () => {
  describe("Initialization", () => {
    test("should throw an error when trying to get ArrayType on BaseArray", () => {
      expect(() => {
        const arr = new BaseArray(10, "Int8", "number", 1);
        arr.ArrayType;
      }).toThrow("ArrayType must be implemented in derived classes");
    });

    test("should throw an error when trying to give negative length", () => {
      expect(() => {
        TypedArray("int8", -5);
      }).toThrow("Array length is not valid");
    });

    test("should have a default length of 0", () => {
      const baseArray = TypedArray("int8");
      expect(baseArray.length).toBe(0);
    });

    test("should have a default type of int32", () => {
      const baseArray = TypedArray();
      expect(baseArray.type).toBe("Int32");
    });

    test("should throw an error when initialised with wrong type", () => {
      expect(() => {
        TypedArray("wrongType");
      }).toThrow("Enter Valid Type");
    });
  });

  describe("Accessing Elements", () => {
    test("at() should return value at given index", () => {
      const BaseArray = TypedArray("int8");

      BaseArray.push(1);
      BaseArray.push(2);
      BaseArray.push(3);

      expect(BaseArray.at(0)).toBe(1);
      expect(BaseArray.at(1)).toBe(2);
      expect(BaseArray.at(2)).toBe(3);

      expect(BaseArray.at(-1)).toBe(3);
      expect(BaseArray.at(-2)).toBe(2);
      expect(BaseArray.at(-3)).toBe(1);
    });

    test("at() should return undefined", () => {
      const BaseArray = TypedArray("int8");

      BaseArray.push(1);
      BaseArray.push(2);
      BaseArray.push(3);

      expect(BaseArray.at(3)).toBe(undefined);
      expect(BaseArray.at(-4)).toBe(undefined);
    });

    test("set(), at() should set and get values correctly", () => {
      const baseArray = TypedArray("int8", 10);

      baseArray.set(0, 42);
      expect(baseArray.at(0)).toBe(42);

      baseArray.set(10, 50);
      expect(baseArray.at(10)).toBe(50);
    });
  });

  describe("Array Operations", () => {
    test("array() should create a new array with same buffer with same type", () => {
      const baseArray = TypedArray("int8", 10);
      const array = baseArray.array();

      expect(array instanceof baseArray.ArrayType).toBe(true);
      expect(array.length).toBe(baseArray.length);

      array[0] = 5;
      expect(array[0]).toBe(5);
      expect(baseArray.at(0)).toBe(5);
    });

    test("toArray() should convert to a normal array with toArray method", () => {
      const baseArray = TypedArray("int8");
      baseArray.set(0, 42);

      const normalArray = baseArray.toArray();
      expect(normalArray).toEqual([42]);
    });

    test("should clone the array with clone method", () => {
      const baseArray = TypedArray("int8", 10);
      baseArray.set(0, 42);

      const cloneArray = baseArray.clone();
      expect(cloneArray).toEqual(baseArray.array());
    });
  });

  describe("Manipulating Elements", () => {
    test("should handle pushing elements with push method", () => {
      const baseArray = TypedArray("int8", 10);
      baseArray.push(42);

      expect(baseArray.length).toBe(11);
      expect(baseArray.at(10)).toBe(42);
    });

    test("should handle push method for long range", () => {
      const baseArray = TypedArray("int8");

      for (var i = 0; i < 100; ++i) {
        baseArray.push(0);
      }

      expect(baseArray.length).toBe(100);
    });

    test("should handle push method with wrong type", () => {
      const baseArray = TypedArray("int8");
      baseArray.push("Hi");

      expect(baseArray.length).toBe(0);
    });

    test("should handle popping elements with pop method", () => {
      const baseArray = TypedArray("int8", 10);
      baseArray.pop();
      expect(baseArray.length).toBe(9);
    });

    test("should handle popping elements and shrink", () => {
      const baseArray = TypedArray("int8", 100);

      for (let i = 0; i < 80; ++i) {
        baseArray.pop();
      }

      expect(baseArray.length).toBe(20);
    });

    test("should throw an error when trying to pop from an empty array", () => {
      const baseArray = TypedArray("int8", 0);
      expect(() => {
        baseArray.pop();
      }).toThrow("Array is empty");
    });

    test("should shift elements from the beginning of the array", () => {
      const baseArray = TypedArray("int8", 10);
      baseArray.set(0, 42);
      baseArray.set(1, 23);
      const shiftedValue = baseArray.shift();

      expect(baseArray.length).toBe(9);
      expect(shiftedValue).toBe(42);
      expect(baseArray.at(0)).toBe(23);
    });

    test("should handle shift elements and shrink", () => {
      const baseArray = TypedArray("int8", 100);

      for (let i = 0; i < 80; ++i) {
        baseArray.shift();
      }

      expect(baseArray.length).toBe(20);
    });

    test("should throw an error when trying to shift from an empty array", () => {
      const baseArray = TypedArray("int8", 0);
      expect(() => {
        baseArray.shift();
      }).toThrow("Array is empty");
    });

    test("should unshift elements to the beginning of the array", () => {
      const baseArray = TypedArray("int8", 10);
      baseArray.set(0, 42);
      baseArray.set(1, 23);
      baseArray.unshift(99);

      expect(baseArray.length).toBe(11);
      expect(baseArray.at(0)).toBe(99);
      expect(baseArray.at(1)).toBe(42);
      expect(baseArray.at(2)).toBe(23);
    });

    test("should unshift elements for long range", () => {
      const baseArray = TypedArray("int8");

      for (var i = 0; i < 100; ++i) {
        baseArray.unshift(0);
      }

      expect(baseArray.length).toBe(100);
    });

    test("should not unshift non-number values", () => {
      const baseArray = TypedArray("int8", 10);
      baseArray.unshift("hello");

      expect(baseArray.length).toBe(10);
      expect(baseArray.at(0)).toBe(0);
    });
  });

  describe("Array Operations", () => {
    test("should slice the array based on start and end indices", () => {
      const baseArray = TypedArray("int8", 10);
      baseArray.set(0, 1);
      baseArray.set(1, 2);
      baseArray.set(2, 3);

      const slicedArray = baseArray.slice(1, 3);

      expect(slicedArray.length).toBe(2);
      expect(slicedArray.at(0)).toBe(2);
      expect(slicedArray.at(1)).toBe(3);
    });

    test("should slice the array with extreme values", () => {
      const baseArray = TypedArray("int8");
      baseArray.set(0, 1);
      baseArray.set(1, 2);
      baseArray.set(2, 3);

      const slicedArray = baseArray.slice(-6, 6);

      expect(slicedArray.length).toBe(3);
      expect(slicedArray.at(0)).toBe(1);
      expect(slicedArray.at(1)).toBe(2);
      expect(slicedArray.at(2)).toBe(3);
    });

    test("should slice the array with default values", () => {
      const baseArray = TypedArray("int8");
      baseArray.set(0, 1);
      baseArray.set(1, 2);
      baseArray.set(2, 3);

      const slicedArray = baseArray.slice();

      expect(slicedArray.length).toBe(3);
      expect(slicedArray.at(0)).toBe(1);
      expect(slicedArray.at(1)).toBe(2);
      expect(slicedArray.at(2)).toBe(3);
    });

    test("should sort the array in ascending order", () => {
      const baseArray = TypedArray("int8", 3);
      baseArray.set(0, 3);
      baseArray.set(1, 1);
      baseArray.set(2, 2);

      baseArray.sort();

      expect(baseArray.at(0)).toBe(1);
      expect(baseArray.at(1)).toBe(2);
      expect(baseArray.at(2)).toBe(3);
    });

    test("should sort the array in descending order", () => {
      const baseArray = TypedArray("int8", 3);
      baseArray.set(0, 3);
      baseArray.set(1, 1);
      baseArray.set(2, 2);

      baseArray.sort((a, b) => b - a);

      expect(baseArray.at(0)).toBe(3);
      expect(baseArray.at(1)).toBe(2);
      expect(baseArray.at(2)).toBe(1);
    });

    test("should reverse the array", () => {
      const baseArray = TypedArray("int8", 3);
      baseArray.set(0, 1);
      baseArray.set(1, 2);
      baseArray.set(2, 3);

      baseArray.reverse();

      expect(baseArray.at(0)).toBe(3);
      expect(baseArray.at(1)).toBe(2);
      expect(baseArray.at(2)).toBe(1);
    });

    test("should fill the array with 1", () => {
      const baseArray = TypedArray("int8", 3).fill(1);
      expect(baseArray.at(0)).toBe(1);
      expect(baseArray.at(1)).toBe(1);
      expect(baseArray.at(2)).toBe(1);
    });
  });

  describe("Search and Comparison", () => {
    test("should return indexes of elements", () => {
      const baseArray = TypedArray("int8", 3);
      baseArray.set(0, 1);
      baseArray.set(1, 2);
      baseArray.set(2, 2);

      expect(baseArray.indexOf(2)).toBe(1);
      expect(baseArray.indexOf(0)).toBe(-1);
      expect(baseArray.lastIndexOf(2)).toBe(2);
      expect(baseArray.lastIndexOf(0)).toBe(-1);
    });

    test("should return true if element includes in array", () => {
      const baseArray = TypedArray("int8", 3);
      baseArray.set(0, 1);
      baseArray.set(1, 2);
      baseArray.set(2, 2);

      expect(baseArray.includes(2)).toBe(true);
      expect(baseArray.includes(3)).toBe(false);
    });
  });

  describe("Searching and Filtering with Functions", () => {
    test("should find the index of the first element that satisfies the condition", () => {
      const arr = TypedArray("int8", 3);
      arr.set(0, 1);
      arr.set(1, 2);
      arr.set(2, 3);
      arr.set(3, 2);
      arr.set(4, 5);

      const result = arr.findIndex((value) => value === 2);

      expect(result).toEqual(1);
    });

    test("should return -1 if the element is not found", () => {
      const arr = TypedArray("int8", 3);
      arr.set(0, 1);
      arr.set(1, 3);
      arr.set(2, 5);

      const result = arr.findIndex((value) => value === 2);

      expect(result).toEqual(-1);
    });

    test("should find the last element that satisfies the condition", () => {
      const arr = TypedArray("int8", 3);
      arr.set(0, 1);
      arr.set(1, 2);
      arr.set(2, 3);
      arr.set(3, 2);
      arr.set(4, 5);

      const result = arr.findLast((value) => value === 2);

      expect(result).toEqual(2);
    });

    test("should return undefined if the element is not found", () => {
      const arr = TypedArray("int8", 3);
      arr.set(0, 1);
      arr.set(1, 3);
      arr.set(2, 5);

      const result = arr.findLast((value) => value === 2);

      expect(result).toBeUndefined();
    });

    test("should find the last index of the element that satisfies the condition", () => {
      const arr = TypedArray("int8", 3);
      arr.set(0, 1);
      arr.set(1, 2);
      arr.set(2, 3);
      arr.set(3, 2);
      arr.set(4, 5);

      const result = arr.findLastIndex((value) => value === 2);

      expect(result).toEqual(3);
    });

    test("should return -1 if the element is not found", () => {
      const arr = TypedArray("int8", 3);
      arr.set(0, 1);
      arr.set(1, 3);
      arr.set(2, 5);

      const result = arr.findLastIndex((value) => value === 2);

      expect(result).toEqual(-1);
    });
  });

  describe("Array Predicates", () => {
    test("should return true if all elements satisfy the condition", () => {
      const arr = TypedArray("int8");
      arr.set(0, 2);
      arr.set(1, 4);
      arr.set(2, 6);
      arr.set(3, 8);
      arr.set(4, 10);

      const result = arr.every((value) => value % 2 === 0);

      expect(result).toEqual(true);
    });

    test("should return false if at least one element does not satisfy the condition", () => {
      const arr = TypedArray("int8");
      arr.set(0, 2);
      arr.set(1, 4);
      arr.set(2, 6);
      arr.set(3, 9);

      const result = arr.every((value) => value % 2 === 0);

      expect(result).toEqual(false);
    });

    test("should return true for an empty array", () => {
      const arr = TypedArray("int8");

      const result = arr.every((value) => value === 0);

      expect(result).toEqual(true);
    });

    test("should return true if at least one element satisfies the condition", () => {
      const arr = TypedArray("int8");
      arr.set(0, 1);
      arr.set(1, 3);
      arr.set(2, 5);
      arr.set(3, 7);
      arr.set(4, 8);

      const result = arr.some((value) => value % 2 === 0);

      expect(result).toEqual(true);
    });

    test("should return false if none of the elements satisfy the condition", () => {
      const arr = TypedArray("int8");
      arr.set(0, 1);
      arr.set(1, 3);
      arr.set(2, 5);
      arr.set(3, 7);

      const result = arr.some((value) => value % 2 === 0);

      expect(result).toEqual(false);
    });

    test("should return false for an empty array", () => {
      const arr = TypedArray("int8");

      const result = arr.some((value) => value === 0);

      expect(result).toEqual(false);
    });
  });

  describe("filter", () => {
    test("should create a new array with filtered elements", () => {
      const BaseArray = TypedArray("int8", 5);
      BaseArray.set(0, 1);
      BaseArray.set(1, 2);
      BaseArray.set(2, 3);
      BaseArray.set(3, 4);
      BaseArray.set(4, 5);

      const filteredArray = BaseArray.filter((value) => value % 2 === 0);

      expect(filteredArray.length).toBe(2);
      expect(filteredArray.at(0)).toBe(2);
      expect(filteredArray.at(1)).toBe(4);
    });
  });

  describe("map", () => {
    test("should create a new array with mapped elements", () => {
      const BaseArray = TypedArray("int8", 5);
      BaseArray.set(0, 1);
      BaseArray.set(1, 2);
      BaseArray.set(2, 3);
      BaseArray.set(3, 4);
      BaseArray.set(4, 5);

      const mappedArray = BaseArray.map((value) => value * 2);

      expect(mappedArray.length).toBe(5);
      expect(mappedArray.at(0)).toBe(2);
      expect(mappedArray.at(1)).toBe(4);
      expect(mappedArray.at(2)).toBe(6);
      expect(mappedArray.at(3)).toBe(8);
      expect(mappedArray.at(4)).toBe(10);
    });
  });

  describe("forEach", () => {
    test("should iterate over each element in the array", () => {
      const BaseArray = TypedArray("int8", 5);
      BaseArray.set(0, 1);
      BaseArray.set(1, 2);
      BaseArray.set(2, 3);
      BaseArray.set(3, 4);
      BaseArray.set(4, 5);

      let sum = 0;

      BaseArray.forEach((value) => {
        sum += value;
      });

      expect(sum).toBe(15);
    });

    test("should handle forEach on an empty array", () => {
      const BaseArray = TypedArray("int8", 0);

      let sum = 0;

      BaseArray.forEach((value) => {
        sum += value;
      });

      expect(sum).toBe(0);
    });
  });

  describe("reduce", () => {
    test("should reduce the array to a single value", () => {
      const BaseArray = TypedArray("int8", 5);
      BaseArray.set(0, 1);
      BaseArray.set(1, 2);
      BaseArray.set(2, 3);
      BaseArray.set(3, 4);
      BaseArray.set(4, 5);

      const result = BaseArray.reduce((acc, value) => acc + value, 0);

      expect(result).toBe(15);
    });

    test("should handle reduce on an empty array", () => {
      const BaseArray = TypedArray("int8", 0);

      const result = BaseArray.reduce((acc, value) => acc + value);

      expect(result).toBe(0);
    });
  });

  describe("reduceRight", () => {
    test("should reduce the array from right to left to a single value", () => {
      const BaseArray = TypedArray("int8", 5);
      BaseArray.set(0, 1);
      BaseArray.set(1, 2);
      BaseArray.set(2, 3);
      BaseArray.set(3, 4);
      BaseArray.set(4, 5);

      const result = BaseArray.reduceRight((acc, value) => value - acc, 0);

      expect(result).toBe(3);
    });

    test("should handle reduceRight on an empty array", () => {
      const BaseArray = TypedArray("int8", 0);

      const result = BaseArray.reduceRight((acc, value) => acc - value);

      expect(result).toBe(0);
    });
  });

  describe("join", () => {
    test("should join array elements into a string with default separator", () => {
      const BaseArray = TypedArray("int8", 3);
      BaseArray.set(0, 1);
      BaseArray.set(1, 2);
      BaseArray.set(2, 3);

      const result = BaseArray.join();

      expect(result).toBe("1,2,3");
    });

    test("should join array elements into a string with a custom separator", () => {
      const BaseArray = TypedArray("int8", 3);
      BaseArray.set(0, 1);
      BaseArray.set(1, 2);
      BaseArray.set(2, 3);

      const result = BaseArray.join("-");

      expect(result).toBe("1-2-3");
    });

    test("should handle join on an empty array", () => {
      const BaseArray = TypedArray("int8", 0);

      const result = BaseArray.join();

      expect(result).toBe("");
    });
  });
});
