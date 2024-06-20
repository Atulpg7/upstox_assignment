import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type ArrowProps = {direction?: 'UP' | 'DOWN'};

export const Arrow = React.memo(({direction = 'UP'}: ArrowProps) => {
  return (
    <View style={style.container}>
      <Image
        source={require('../assets/icons/arrow.png')}
        style={{
          ...style.image,
          // Using this temporary otherwise we'll have different icons for both up and down
          transform: [{rotate: direction === 'UP' ? '180deg' : '0deg'}],
        }}
      />
    </View>
  );
});

const style = StyleSheet.create({
  container: {alignContent: 'center', alignItems: 'center'},
  image: {width: 24, height: 24},
});
