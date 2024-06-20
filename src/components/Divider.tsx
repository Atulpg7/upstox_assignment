import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../styles/global.ts';

type DividerProps = {
  height?: number;
};

export const Divider = ({height = 1}: DividerProps) => {
  return <View style={{...style.container, height}} />;
};

const style = StyleSheet.create({
  container: {width: '100%', backgroundColor: theme.colors.dividerVertical},
});
