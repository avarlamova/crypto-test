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

  it("fromAth is close to 100", () => {
    const functionResult = calculateAth(1, 650301);
    expect(functionResult.fromAth).toBe("99.9998462");
  });

  it("toAth is close to 100", () => {
    const functionResult = calculateAth(1.01, 2.018);
    expect(functionResult.toAth).toBe("99.8019802");
  });
});
