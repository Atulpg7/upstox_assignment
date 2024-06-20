import React, {PropsWithChildren} from 'react';
import {StockListingContext} from '../../hooks/stock-listing/useStockListingContext.ts';
import {useStockListData} from '../../hooks/stock-listing/useStockListData.ts';

// Using context because state is being in for 2 components for now. We could have used state
// management library if there were complex or more UIs
export const StockListingProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const {isLoading, data, error, mutate} = useStockListData();

  return (
    <StockListingContext.Provider
      value={{stockDataResponse: {data, isLoading, mutate, error}}}>
      {children}
    </StockListingContext.Provider>
  );
};
