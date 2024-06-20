export type StockItemResponse = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};

type StocksDataResponseType = {
  userHolding: StockItemResponse[];
};

//Defining at a single place for now, we should use .env for this
const STOCK_LISTING_API_URL =
  'https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io';

export const fetchStocksData = async (): Promise<StocksDataResponseType> => {
  try {
    const response = await fetch(STOCK_LISTING_API_URL);
    if (!response.ok) {
      throw new Error('Network response: ' + response.statusText);
    }
    const { data } = await response.json();
    return data;
  } catch (e) {
    throw Error(e as string);
  }
};
