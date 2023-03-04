import axios from "axios";
import { fetchAth } from "../helpers/getAth";
jest.mock("axios");

describe("getAthData", () => {
  it("fetches data", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
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
    const result = await fetchAth("bitcoin");

    expect(result.currentPrice).toBe(1);
    expect(result.currentAth).toBe(10);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
