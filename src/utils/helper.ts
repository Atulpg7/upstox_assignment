import {StockItemResponse} from './apis.ts';

export const getFormattedAmountString = ({
  amount,
  roundTo2 = true,
}: {
  amount: number;
  roundTo2?: boolean;
}) => {
  if (roundTo2) {
    return `₹ ${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  return `₹ ${amount.toLocaleString('en-US', {})}`;
};

export const getCurrentValueOfStock = ({
  ltp,
  qty,
}: {
  ltp: number;
  qty: number;
}) => {
  return ltp * qty;
};

export const getInvestmentValueOfStock = ({
  avgPrice,
  qty,
}: {
  avgPrice: number;
  qty: number;
}) => {
  return avgPrice * qty;
};

export const getProfitAndLossOfStock = ({
  currentValue,
  investmentValue,
}: {
  currentValue: number;
  investmentValue: number;
}) => {
  return currentValue - investmentValue;
};

export const getDayProfitAndLossOfStock = ({
  close,
  ltp,
  qty,
}: {
  close: number;
  ltp: number;
  qty: number;
}) => {
  return (close - ltp) * qty;
};

export const getCurrentValueOfAllStocks = (
  stocks?: StockItemResponse[],
): number => {
  if (!stocks) {
    return 0;
  }

  return stocks.reduce(
    (totalStocksValue, stock) =>
      totalStocksValue +
      getCurrentValueOfStock({ltp: stock.ltp, qty: stock.quantity}),
    0,
  );
};

export const getInvestmentValueOfAllStocks = (
  stocks?: StockItemResponse[],
): number => {
  if (!stocks) {
    return 0;
  }

  return stocks.reduce(
    (totalInvestmentValue, stock) =>
      totalInvestmentValue +
      getInvestmentValueOfStock({
        avgPrice: stock.avgPrice,
        qty: stock.quantity,
      }),
    0,
  );
};

export const getDayProfitAndLossOfAllStocks = (
  stocks?: StockItemResponse[],
): number => {
  if (!stocks) {
    return 0;
  }

  return stocks.reduce(
    (totalDayProfitAndLoss, stock) =>
      totalDayProfitAndLoss +
      getDayProfitAndLossOfStock({
        close: stock.close,
        ltp: stock.ltp,
        qty: stock.quantity,
      }),
    0,
  );
};
