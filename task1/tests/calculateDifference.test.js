// import { expect, jest, test } from "@jest/globals";
import { calculateDifference } from "../allTimeHigh.js";

test("function has return value", () => {
  expect(calculateDifference(4, 2, "fromAth")).not.toBeUndefined();
});
// calculateDifference(2, 2);
