import { calculateAth } from "../helpers/getAth";

describe("calculateAth", () => {
  it("current value is smaller than ath", () => {
    const functionResult = calculateAth(10, 100);
    expect(functionResult.fromAth).toBe("90.00");
    expect(functionResult.toAth).toBe("900.00");
  });

  it("current value is larger than ath", () => {
    const functionResult = calculateAth(100, 10);
    expect(functionResult.fromAth).toBe("-900.00");
    expect(functionResult.toAth).toBe("-90.00");
  });

  it("values are equal", () => {
    const functionResult = calculateAth(10, 10);
    expect(functionResult.fromAth).toBe("0.00");
    expect(functionResult.toAth).toBe("0.00");
  });
});
