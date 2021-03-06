import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {colors} from '../../../utils';

const Gap = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Gap;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    paddingHorizontal: '20rem',
    paddingVertical: '10rem',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: '12rem',
    color: colors.title.secondary,
  },
});
