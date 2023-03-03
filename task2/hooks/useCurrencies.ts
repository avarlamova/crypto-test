import { fetcherWithAth, fetcher } from "@/helpers/fetcher";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import useSWR from "swr";

const useCurrencies = (withAth: boolean = false) => {
  // const [currencies, setCurrencies] = useState<any>([]);
  // const [error, setError] = useState("");
  const fetchFunction = withAth ? fetcherWithAth : fetcher;
  const { data, error } = useSWR(
    `https://api.cryptorank.io/v1/currencies?api_key=${API_KEY}`,
    fetchFunction
  );
  if (data) {
    return { currencyOptions: data, error };
  }
  return { currencyOptions: [], error };
};

export default useCurrencies;
