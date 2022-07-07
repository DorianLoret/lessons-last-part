const addNum = require("./add");

test("Additionne deux nombres", () => {
  expect(addNum(1, 2)).toBe(3);
});
