import {useStockListingContext} from './useStockListingContext.ts';
import {
  getCurrentValueOfAllStocks,
  getDayProfitAndLossOfAllStocks,
  getInvestmentValueOfAllStocks,
} from '../../utils/helper.ts';
import {HoldingViewItemType} from '../../components/stock-listing/TotalHoldingView.tsx';

export const useTotalHoldingMetaInfo = () => {
  const {
    stockDataResponse: {data: stocksData},
  } = useStockListingContext();

  const currentValue = getCurrentValueOfAllStocks(stocksData);
  const totalInvestment = getInvestmentValueOfAllStocks(stocksData);
  const dayProfitAndLoss = getDayProfitAndLossOfAllStocks(stocksData);

  const expandedData: HoldingViewItemType[] = [
    {name: 'Current Value:', amount: currentValue},
    {name: 'Total Investment:', amount: totalInvestment},
    {
      name: "Today's Profit & Loss:",
      amount: dayProfitAndLoss,
      allowAmountStyle: true,
    },
  ];

  return {currentValue, totalInvestment, expandedData};
};
