import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header, Gap, Card, Button} from '../../components';
import {colors} from '../../utils';
import {Footer} from '../../components/molecul';

const Home = ({navigation}) => {
  const data = [
    {
      id: 1,
      price: 'Rp 67,000',
      location: 'Jawa Timur',
      time: '21 Oktober, 2018 oleh Syauq Aziz',
    },
    {
      id: 2,
      price: 'Rp 65,000',
      location: 'Jawa Barat',
      time: '21 Oktober, 2018 oleh Syauq Aziz',
    },
    {
      id: 3,
      price: 'Rp 66,000',
      location: 'Bali',
      time: '21 Oktober, 2018 oleh Syauq Aziz',
    },
    {
      id: 4,
      price: 'Rp 68,000',
      location: 'Jawa Tengah',
      time: '21 Oktober, 2018 oleh Syauq Aziz',
    },
    {
      id: 5,
      price: 'Rp 67,000',
      location: 'Banten',
      time: '21 Oktober, 2018 oleh Syauq Aziz',
    },
  ];
  return (
    <View style={styles.page}>
      <Header title="Harga Udang" subTitle="Ukuran 100" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap title="Harga Udang di kota anda" />
        <Card
          price="Rp 66,000"
          location="Kab Purworejo, Jawa Tengah"
          time="21 Oktober, 2018 oleh Syauq Aziz"
        />
        <Gap title="Harga Udang di kota terdekat" />

        {data.map((item, index) => {
          return (
            <Card
              key={index}
              price={item.price}
              location={item.location}
              time={item.time}
              onPress={() => navigation.navigate('Detail')}
            />
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Filter Lokasi"
          subTitle="2 filter diterapkan"
          icon="filter-list"
          backgroundColor={colors.background.tertiary}
        />
        <Button
          title="Urutkan"
          subTitle="Terdekat"
          icon="arrow-drop-down-circle"
          backgroundColor={colors.background.quaternary}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = EStyleSheet.create({
  page: {
    backgroundColor: colors.background.secondary,
    paddingBottom: '110rem',
  },
  footer: {
    flexDirection: 'row',
  },
});
