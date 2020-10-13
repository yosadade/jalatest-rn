import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../utils';

const Card = ({price, location, time, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{price}</Text>
          <Text style={styles.titleLocation}>{location}</Text>
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

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    paddingHorizontal: '20rem',
    paddingVertical: '10rem',
    marginBottom: '1rem',
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentBottom: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: '16rem',
    color: colors.title.primary,
    fontWeight: 'bold',
  },
  titleLocation: {
    fontSize: '12rem',
    color: colors.title.tertiary,
    fontWeight: 'bold',
  },
  titleTime: {
    fontSize: '10rem',
    color: colors.title.secondary,
    fontWeight: '800',
    marginTop: '20rem',
  },
  icon: {
    flexDirection: 'row',
    marginTop: '10rem',
    alignItems: 'center',
  },
  titleNext: {
    fontSize: '13rem',
    color: colors.title.secondary,
    fontWeight: '800',
  },
});
