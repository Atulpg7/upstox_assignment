import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../styles/global.ts';
import {StockItemResponse} from '../../utils/apis.ts';
import {
  getCurrentValueOfStock,
  getFormattedAmountString,
  getInvestmentValueOfStock,
  getProfitAndLossOfStock,
} from '../../utils/helper.ts';
import {BoldText} from '../BoldText.tsx';

export const StockItem = ({item}: {item: StockItemResponse}) => {
  const {symbol, avgPrice, ltp, quantity} = item;
  const {colors, textVariants, spacing} = theme;

  const currentStockValue = getCurrentValueOfStock({ltp, qty: quantity});
  const investmentValue = getInvestmentValueOfStock({avgPrice, qty: quantity});
  const profitAndLoss = getProfitAndLossOfStock({
    currentValue: currentStockValue,
    investmentValue: investmentValue,
  });

  return (
    <View style={style.parent}>
      <View style={style.fieldRow}>
        <Text style={{color: colors.black, ...textVariants.title}}>
          {symbol.toUpperCase()}
        </Text>
        <BoldText
          normalText={'LTP:'}
          boldText={getFormattedAmountString({amount: ltp})}
          style={{normalText: textVariants.subHeading}}
        />
      </View>

      <View style={{...style.fieldRow, marginTop: spacing.m}}>
        <Text style={textVariants.subHeading}>Qty: {quantity}</Text>
        <BoldText
          normalText={'P/L:'}
          boldText={getFormattedAmountString({amount: profitAndLoss})}
          style={{
            boldText: {
              color:
                profitAndLoss < 0
                  ? colors.lossRed
                  : profitAndLoss > 0
                  ? colors.profitGreen
                  : colors.black,
            },
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.s,
    backgroundColor: theme.colors.white,
  },
  fieldRow: {flexDirection: 'row', justifyContent: 'space-between'},
});
