import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../utils';

const Card = ({type, price, location, time, onPress}) => {
  if (type === 'spesies') {
    return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.title(type)}>Spesies : {price}</Text>
        <Text style={styles.titleLocation(type)}>{location}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'price') {
    return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.title(type)}>Harga Ukuran {price}</Text>
        <Text style={styles.titleLocation(type)}>{location}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title(type)}>{price}</Text>
          <Text style={styles.titleLocation(type)}>{location}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="share-social-outline"
            size={22}
            color={colors.icon.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBottom}>
        <Text style={styles.titleTime}>{time}</Text>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.titleNext}>Harga Lengkap</Text>
          <MaterialIcons
            name="navigate-next"
            size={22}
            color={colors.icon.primary}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: colors.background.primary,
    paddingHorizontal: 20,
    paddingVertical: type === 'spesies' ? 15 : 10,
    marginBottom: 1,
    justifyContent: type !== 'price' ? null : 'space-between',
    flexDirection: type !== 'price' ? null : 'row',
    alignItems: type !== 'price' ? null : 'center',
  }),
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentBottom: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: (type) => ({
    fontFamily:
      type === 'spesies' || 'price' ? 'Poppins-Regular' : 'Poppins-Bold',
    fontSize: type === 'spesies' ? 12 : 'price' ? 14 : 18,
    color: colors.title.primary,
  }),
  titleLocation: (type) => ({
    fontFamily: 'Poppins-Bold',
    fontSize: type === 'spesies' || 'price' ? 18 : 12,
    marginTop: 3,
    color: type === 'price' ? colors.title.primary : colors.title.tertiary,
  }),
  titleTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: colors.title.secondary,
    marginTop: 20,
  },
  icon: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  titleNext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: colors.title.secondary,
  },
});
