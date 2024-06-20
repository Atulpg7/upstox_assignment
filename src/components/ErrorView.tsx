import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../styles/global.ts';

type ErrorViewProps = {onRetry?: () => void};

export const ErrorView = React.memo(({onRetry}: ErrorViewProps) => {
  const {textVariants, colors} = theme;

  return (
    <View style={style.container}>
      <Image
        source={require('../assets/illustrations/error.jpg')}
        style={style.image}
        resizeMode={'contain'}
      />
      <Text style={{...textVariants.title, ...style.text}}>
        Oops! this should not happen! Let's try again?
      </Text>
      <Button
        title={'Try again'}
        color={colors.primaryColor}
        onPress={onRetry}
      />
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {width: 220, height: 220, borderRadius: 256, overflow: 'hidden'},
  text: {
    textAlign: 'center',
    marginTop: theme.spacing.s,
    marginBottom: theme.spacing.s,
  },
});
