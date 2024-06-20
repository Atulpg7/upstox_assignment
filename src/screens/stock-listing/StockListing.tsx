import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {StockItem} from '../../components/stock-listing/StockItem.tsx';
import {Loading} from '../../components/Loading.tsx';
import {ErrorView} from '../../components/ErrorView.tsx';
import {theme} from '../../styles/global.ts';
import {useStockListingContext} from '../../hooks/stock-listing/useStockListingContext.ts';
import {getListSeprarator} from '../../utils/ui.utils.tsx';
import NoHoldinFoundView from '../../components/stock-listing/NoHoldingFoundView.tsx';

export const StockListing = () => {
  const {stockDataResponse} = useStockListingContext();
  const {isLoading, data, error, mutate} = stockDataResponse;

  if (isLoading) {
    return <Loading />;
  }

  if (!data && error && !isLoading) {
    return <ErrorView onRetry={mutate} />;
  }

  if(data?.length === 0){
    return <NoHoldinFoundView/>
  }

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <StockItem item={item} />;
        }}
        ItemSeparatorComponent={getListSeprarator}
        ListEmptyComponent={<NoHoldinFoundView />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
  },
});
