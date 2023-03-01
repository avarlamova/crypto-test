// import { expect, jest, test } from "@jest/globals";
import { calculateDifference } from "../allTimeHigh.js";

test("function has return value", () => {
  expect(calculateDifference(4, 2, "fromAth")).not.toBeUndefined();
});

test("calculate fromAth correctly", () => {
  expect(calculateDifference(4, 2, "fromAth")).toBe(50);
});

test("calculate toAth correctly", () => {
  expect(calculateDifference(100, 10, "toAth")).toBe(900);
});

// negative percentages (max<current)
