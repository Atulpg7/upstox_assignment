import {createContext, useContext} from 'react';
import {StockListDataHookResponseType} from './useStockListData.ts';

type Context = {
  stockDataResponse: StockListDataHookResponseType;
};

const defaultValue: Context = {
  stockDataResponse: {
    isLoading: true,
  },
};

export const StockListingContext = createContext<Context>(defaultValue);

export const useStockListingContext = () => useContext(StockListingContext);
