export interface CurrencyOption {
  id: number;
  name: string;
  value: number;
  symbol: string;
}

export type CurrencyOptions = CurrencyOption[];

export interface FetchedCurrencyOption {
  id: number;
  name: string;
  rank: number;
  slug: string;
  symbol: string;
  category: string;
  type: string;
  volume24hBase: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  values: Values;
  lastUpdated: string;
  tokens: any[];
}
export interface Values {
  USD: Usd;
}

export interface Usd {
  price: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  marketCap: number;
  percentChange24h: number;
  percentChange7d: number;
  percentChange30d: number;
  percentChange3m: number;
  percentChange6m: number;
}
