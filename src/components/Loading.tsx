import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../styles/global.ts';

export const Loading = React.memo(() => {
  const {textVariants} = theme;

  return (
    <View style={style.container}>
      <Image
        source={require('../assets/illustrations/loading.jpg')}
        style={style.image}
        resizeMode={'contain'}
      />
      <Text style={textVariants.title}>Fetching your holdings....</Text>
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
});
