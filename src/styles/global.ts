import {StyleSheet} from 'react-native';

//Ideally this should be generated via library or specs, hence putting it in this way
const colorToken = Object.freeze({
  primaryColor: 'purple',
  dividerVertical: '#e6e6e6',
  white: '#ffffff',
  lossRed: 'red',
  grey: '#d9d9d9',
  profitGreen: 'green',
  black: '#000000',
});

const spacingTokens = Object.freeze({
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  r: 16,
  l: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
});

const fontTokens = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subHeading: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: 14,
  },
  subHeadingBold: {
    fontFamily: 'Arial',
    fontWeight: '600',
    fontSize: 14,
  },
  tag: {
    fontFamily: 'System',
    fontSize: 10,
  },
  body: {
    fontFamily: 'Roboto',
    fontSize: 12,
  },
});

//Actual theme will be in this way
export const theme = Object.freeze({
  spacing: {
    xxs: spacingTokens.xxs,
    xs: spacingTokens.xs,
    s: spacingTokens.s,
    m: spacingTokens.m,
    r: spacingTokens.r,
    l: spacingTokens.l,
    xl: spacingTokens.xl,
    xxl: spacingTokens.xxl,
    xxxl: spacingTokens.xxxl,
  },
  colors: {
    primaryColor: colorToken.primaryColor,
    dividerVertical: colorToken.dividerVertical,
    white: colorToken.white,
    lossRed: colorToken.lossRed,
    profitGreen: colorToken.profitGreen,
    black: colorToken.black,
    grey: colorToken.grey,
  },
  textVariants: {
    title: fontTokens.title,
    subHeading: fontTokens.subHeading,
    subHeadingBold: fontTokens.subHeadingBold,
    tag: fontTokens.tag,
    body: fontTokens.body,
  },
});
