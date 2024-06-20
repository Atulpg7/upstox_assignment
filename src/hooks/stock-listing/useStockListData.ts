import {useCallback, useEffect, useState} from 'react';
import {StockItemResponse, fetchStocksData} from '../../utils/apis.ts';

export type StockListDataHookResponseType = {
  isLoading?: boolean;
  data?: StockItemResponse[];
  error?: string;
  mutate?: () => void;
};

export const useStockListData = () => {
  const [response, setResponse] = useState<StockListDataHookResponseType>({
    isLoading: true,
  });

  const fetchData = useCallback(async () => {
    try {
      setResponse({isLoading: true, data: undefined, error: undefined});
      const data = await fetchStocksData();
      setResponse({data: data.userHolding, error: undefined});
    } catch (error) {
      setResponse({error: error as string, data: undefined});
    } finally {
      setResponse(prev => ({...prev, isLoading: false}));
    }
  }, []);

  useEffect(() => {
    fetchData().then();
  }, [fetchData]);

  return {
    isLoading: response.isLoading,
    data: response.data,
    error: response.error,
    mutate: fetchData,
  };
};
