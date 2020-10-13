import React from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import {colors} from '../../../utils';

const Header = ({type, onPressLeftIcon, onPressRightIcon, title, subTitle}) => {
  if (type === 'secondary') {
    return (
      <View style={styles.containerSecondary}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <TouchableOpacity onPress={onPressLeftIcon}>
          <MaterialIcons
            name="arrow-back-ios"
            size={22}
            color={colors.icon.primary}
          />
        </TouchableOpacity>
        <View style={styles.lead}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity onPress={onPressRightIcon}>
          <Ionicons
            name="share-social-outline"
            size={22}
            color={colors.icon.primary}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TouchableOpacity onPressLeftIcon={onPressLeftIcon}>
        <MaterialIcons
          name="arrow-back-ios"
          size={22}
          color={colors.icon.primary}
        />
      </TouchableOpacity>
      <View style={styles.lead}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <TouchableOpacity onPressRightIcon={onPressRightIcon}>
        <Ionicons
          name="share-social-outline"
          size={22}
          color={colors.icon.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '20rem',
    paddingVertical: '10rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background.primary,
  },
  containerSecondary: {
    paddingHorizontal: '20rem',
    paddingVertical: '15rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background.primary,
  },
  lead: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '16rem',
    color: colors.title.primary,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: '12rem',
    color: colors.title.secondary,
    fontWeight: 'bold',
  },
});
