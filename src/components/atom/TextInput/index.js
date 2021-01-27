import React from 'react';
import {Text, View, TextInput as TextInputRN} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../utils';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View style={styles.container}>
      <TextInputRN
        {...restProps}
        placeholder={placeholder}
        style={styles.input}
      />
      <View style={styles.icon}>
        <FontAwesome name="search" color={colors.icon.primary} size={18} />
      </View>
    </View>
  );
};

export default TextInput;

const styles = EStyleSheet.create({
  container: {},
  input: {
    backgroundColor: '#E9E9E9',
    borderRadius: 5,
    padding: 10,
    marginTop: 8,
    fontSize: 11,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 10,
  },
  icon: {
    marginLeft: 'auto',
    bottom: 32,
    marginRight: 10,
  },
});
