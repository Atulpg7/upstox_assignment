import {Text, TextStyle} from 'react-native';
import React from 'react';
import {theme} from '../styles/global.ts';

type BoldTextProps = {
  normalText: string;
  boldText: string;
  style?: {
    normalText?: TextStyle;
    boldText?: TextStyle;
  };
};

export const BoldText = ({normalText, boldText, style = {}}: BoldTextProps) => {
  const {colors, textVariants} = theme;

  return (
    <Text style={{color: colors.black, ...style.normalText}}>
      {`${normalText} `}
      <Text
        style={{
          color: colors.black,
          ...style.boldText,
          ...textVariants.title,
        }}>
        {boldText}
      </Text>
    </Text>
  );
};
