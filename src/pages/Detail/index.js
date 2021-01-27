import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Card} from '../../components';

const Detail = ({navigation}) => {
  return (
    <View>
      <Header
        type="secondary"
        title="Detail Harga Udang"
        onPressLeftIcon={() => navigation.goBack()}
      />
      <View style={styles.divider} />
      <Card
        type="spesies"
        price="Vennamei"
        location="Kab. Purworejo, Jawa Tengah"
      />
      <View style={styles.divider} />
      <View>
        <Card type="price" price="100" location="Rp. 66,000" />
        <Card type="price" price="90" location="Rp. 66,000" />
        <Card type="price" price="80" location="Rp. 66,000" />
        <Card type="price" price="70" location="Rp. 66,000" />
        <Card type="price" price="60" location="Rp. 66,000" />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  divider: {
    height: 10,
  },
});
