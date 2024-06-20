import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../styles/global.ts';
import {Arrow} from '../Arrow.tsx';
import {getFormattedAmountString} from '../../utils/helper.ts';
import {useStockListingContext} from '../../hooks/stock-listing/useStockListingContext.ts';
import {useTotalHoldingMetaInfo} from '../../hooks/stock-listing/useTotalHoldingMetaInfo.ts';

export type HoldingViewItemType = {
  name: string;
  amount: number;
  allowAmountStyle?: boolean;
};

type HoldingViewItemProps = {
  name: string;
  amount: number;
  allowAmountStyle?: boolean;
};

const ExpandedTotalHoldings = ({data}: {data: HoldingViewItemType[]}) => {
  return (
    <View style={style.expandedHoldings}>
      {data.map((item, index) => {
        return (
          <HoldingViewItem
            key={`item-${index}`}
            name={item.name}
            amount={item.amount}
            allowAmountStyle={item.allowAmountStyle}
          />
        );
      })}
    </View>
  );
};

const HoldingViewItem = ({
  name,
  amount,
  allowAmountStyle = false,
}: HoldingViewItemProps) => {
  const {colors, textVariants} = theme;

  return (
    <View style={{...style.fieldRow, marginBottom: theme.spacing.s}}>
      <Text style={{color: colors.black, ...textVariants.title}}>{name}</Text>
      <Text
        style={{
          color: colors.black,
          ...textVariants.subHeadingBold,
          ...(allowAmountStyle
            ? {
                color:
                  amount < 0
                    ? colors.lossRed
                    : amount > 0
                    ? colors.profitGreen
                    : colors.black,
              }
            : {}),
        }}>
        {getFormattedAmountString({amount})}
      </Text>
    </View>
  );
};

export const TotalHoldingView = () => {
  const [expanded, setExpanded] = useState(false);

  const {
    stockDataResponse: {data, isLoading},
  } = useStockListingContext();

  const {currentValue, totalInvestment, expandedData} =
    useTotalHoldingMetaInfo();

  const toggleExpansion = useCallback(() => {
    setExpanded(prev => !prev);
  }, []);

  const totalProfitAndLoss = currentValue - totalInvestment;

  if (isLoading || !data) {
    return null;
  }

  return (
    <View style={style.parent}>
      <TouchableOpacity onPress={toggleExpansion} hitSlop={32}>
        <Arrow direction={expanded ? 'DOWN' : 'UP'} />
      </TouchableOpacity>
      <View style={style.container}>
        {expanded ? <ExpandedTotalHoldings data={expandedData} /> : null}
        <HoldingViewItem
          name={'Profit & Loss:'}
          amount={totalProfitAndLoss}
          allowAmountStyle={true}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopColor:theme.colors.grey,
    borderTopWidth: 3,
    backgroundColor: theme.colors.white,
    zIndex: 0,
    bottom: 0,
  },
  fieldRow: {flexDirection: 'row', justifyContent: 'space-between'},
  container: {
    paddingHorizontal: theme.spacing.r,
    paddingBottom: theme.spacing.l,
  },
  expandedHoldings: {
    marginBottom: theme.spacing.xl,
  },
});
