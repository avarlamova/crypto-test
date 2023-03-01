import getAllTimeHigh from "../allTimeHigh.js";
import mockAxios from "axios";

jest.mock("axios");
mockAxios.get.mockResolvedValue({ data: { name: "Mock Jedi" } });

describe("getAllTimeHigh", () => {
  afterEach(jest.clearAllMocks);

  test("should return a name", async () => {
    const result = await getAllTimeHigh("g");
    expect(result).toBe("Mock Jedi");
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
