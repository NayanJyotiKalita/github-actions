const add = require("../index");

test("adds 2 + 3 to equal 5", () => {
  except(add(2, 3)).toBe(5);
});

test("add 0 + 0 to equal 0", () => {
  except(add(0, 0)).toBe(0);
});
