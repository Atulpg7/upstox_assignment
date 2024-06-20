import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { StockListing } from './screens/stock-listing/StockListing.tsx';
import { Header } from './components/Header.tsx';
import { TotalHoldingView } from './components/stock-listing/TotalHoldingView.tsx';
import { StockListingProvider } from './screens/stock-listing/StockListingProvider.tsx';
import { theme } from './styles/global.ts';

function App(): React.JSX.Element {
  const { colors } = theme

  return (
    <StockListingProvider>
      <View style={style.container}>
        <StatusBar backgroundColor={colors.primaryColor} />
        <Header title={'Upstox Holding'} />
        <StockListing />
        <TotalHoldingView />
      </View>
    </StockListingProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
