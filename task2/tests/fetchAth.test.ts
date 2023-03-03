import axios from "axios";
import { fetchAth } from "../helpers/getAth";

jest.spyOn(axios, "get").mockResolvedValue({
  data: {
    data: {
      price: {
        USD: 1,
      },
      athPrice: {
        USD: 10,
      },
    },
  },
});
describe("getAthData", () => {
  it("fetches data", async () => {
    const result = await fetchAth("bitcoin");

    expect(result.currentPrice).toBe(1);
    expect(result.currentAth).toBe(10);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
