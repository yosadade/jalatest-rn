import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../atom';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button />
      </View>
      <View>
        <Button />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
