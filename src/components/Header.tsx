import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../styles/global.ts';

type HeaderProps = {title: string};

export const Header = ({title}: HeaderProps) => {
  const {spacing, colors, textVariants} = theme;

  return (
    <View
      style={{
        ...style.container,
        paddingVertical: spacing.r,
        paddingHorizontal: spacing.s,
        backgroundColor: colors.primaryColor,
      }}>
      <Text style={{color: colors.white, ...textVariants.title}}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {width: '100%'},
});
