import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';

const Detail = ({navigation}) => {
  return (
    <View>
      <Header
        type="secondary"
        title="Detail Harga Udang"
        onPressLeftIcon={() => navigation.goBack()}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
