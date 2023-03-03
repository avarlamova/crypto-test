import { fetchAth, calculateAth } from "@/../task1/allTimeHigh";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .then(async (data) => {
      const formattedData = data.data.map(async (el: any) => {
        // const getUsers = async ({ ids }) => {
        //     const users = ids.map(async id => {
        //         const { data } = await api.request(`/${id}`);
        //         return data;
        //     });
        //     return Promise.all(users);
        // }
        return {
          id: el.id,
          name: el.name,
          symbol: el.symbol,
          circulatingSupply: el.circulatingSupply,
          category: el.category,
          value: el.values.USD.price,
          marketCap: el.values.USD.marketCap,
          ath: await fetchAth(el.slug),
        };
      });
      return await Promise.all(formattedData);
    });
const useCurrencies = () => {
  // const [currencies, setCurrencies] = useState<any>([]);
  // const [error, setError] = useState("");
  const { data, error } = useSWR(
    `https://api.cryptorank.io/v1/currencies?api_key=${API_KEY}`,
    fetcher
  );

  return { currencyOptions: data, error };
};

export default useCurrencies;
