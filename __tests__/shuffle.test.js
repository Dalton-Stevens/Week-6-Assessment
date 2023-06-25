const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('shuffle returns an array', () => {
    expect(shuffle()).toBeInstanceOf(Array);
  })
  
  test('returns array of the same length', () => {
    const arr = [1, 1, 1];
    expect(shuffle(arr)).toHaveLength(arr.length)
  })
});
