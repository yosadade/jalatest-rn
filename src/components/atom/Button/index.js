import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../utils';

const Button = ({onPress, icon, backgroundColor, title, subTitle}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <MaterialIcons
        name={icon}
        size={30}
        color={colors.icon.primary}
        style={styles.icon}
      />
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '10rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10rem',
  },
  title: {
    fontSize: '18rem',
    color: colors.title.quaternary,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: '9rem',
    color: colors.title.quaternary,
    fontWeight: 'bold',
  },
});
