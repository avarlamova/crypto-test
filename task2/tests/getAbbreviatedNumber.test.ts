import { getAbbreviatedNumber } from "../helpers/getAbbreviatedNumber";
describe("getAbbreviatedNumber", () => {
  it("correctly handles values < 1", () => {
    const functionResult = getAbbreviatedNumber(0.0956666);
    expect(functionResult).toBe("0.09567");
  });

  it("correctly handles values from 1 to 1000", () => {
    const functionResult = getAbbreviatedNumber(53.7697);
    expect(functionResult).toBe("53.77");
  });

  it("correctly handles values from 1001 to million", () => {
    const functionResult = getAbbreviatedNumber(23657.8);
    expect(functionResult).toBe("23658");
  });

  it("correctly handles values from 1000 to millions", () => {
    const functionResult = getAbbreviatedNumber(3000000);
    expect(functionResult).toBe("3M");
  });

  it("correctly handles values from millions to billions", () => {
    const functionResult = getAbbreviatedNumber(8100000000);
    expect(functionResult).toBe("8.1B");
  });

  it("correctly handles values from billions to trillions", () => {
    const functionResult = getAbbreviatedNumber(7000500000000);
    expect(functionResult).toBe("7T");
  });
});
