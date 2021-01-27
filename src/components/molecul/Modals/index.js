/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {colors} from '../../../utils';
import {TextInput, Button} from '../../atom';

const Modals = ({isVisible, onPress, animationOutTiming}) => {
  const [select, setSelect] = useState(false);
  const [icon, SetIcon] = useState(false);
  const [search, setSearch] = useState(false);

  const onSelect = () => {
    setSelect(true);
    SetIcon(!icon);
    setSearch(!search);
  };

  return (
    <View>
      <Modal
        useNativeDriver
        animationInTiming={500}
        swipeDirection="down"
        isVisible={isVisible}
        animationOutTiming={animationOutTiming}
        style={styles.container}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.titleBtnBack}>Batal</Text>
          </TouchableOpacity>
          <View style={styles.wrapperProvince}>
            <Text style={styles.titleProvince}>Provinsi :</Text>
            <TouchableOpacity style={styles.box} onPress={onSelect}>
              <Text
                style={[styles.titleProvince, {color: colors.title.tertiary}]}>
                Pilih Provinsi
              </Text>
              <AntDesign
                name={icon ? 'down' : 'up'}
                color={colors.icon.primary}
              />
            </TouchableOpacity>
          </View>
          {search && (
            <View style={styles.card}>
              <View style={styles.input}>
                <TextInput placeholder="Cari Provinsi" />
              </View>
              <View style={styles.content}>
                <View style={styles.wrapperContent}>
                  <Text style={styles.titleProvince}>Pencarian Terakhir:</Text>
                  <ScrollView>
                    <View>
                      <TouchableOpacity>
                        <Text style={styles.titleContent}>Jawa Tengah</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.titleContent}>Jawa Tengah</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.titleContent}>Jawa Tengah</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.titleContent}>Jawa Tengah</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.titleContent}>Jawa Tengah</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.titleContent}>Jawa Tengah</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.titleContent}>Jawa Tengah</Text>
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={styles.footer}>
          <Button
            type="detail"
            title="Reset Filter"
            borderRadius={5}
            borderWidth={1}
            backgroundColor={colors.background.tertiary}
            // onPress={toggleModal}
          />
          <View style={{width: 10}} />
          <Button
            type="detail"
            title="Filter Lokasi"
            borderRadius={5}
            borderWidth={1}
            backgroundColor={colors.background.quaternary}
            // onPress={toggleModal}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '50%',
    justifyContent: 'flex-end',
    margin: 0,
  },
  titleBtnBack: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: colors.title.tertiary,
    marginLeft: 'auto',
  },
  modal: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#3515ae',
  },
  wrapperProvince: {
    paddingTop: 5,
  },
  titleProvince: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: colors.title.secondary,
  },
  box: {
    marginTop: 5,
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#ADB2D5',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderRadius: 3,
    paddingVertical: 10,
    borderColor: '#ADB2D5',
    borderWidth: 1,
    height: 375,
  },
  input: {
    paddingHorizontal: 10,
  },
  content: {
    borderTopWidth: 0.5,
    borderColor: '#ADB2D5',
  },
  wrapperContent: {
    height: 270,
    padding: 10,
  },
  titleContent: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    paddingVertical: 12,
  },
  footer: {
    backgroundColor: colors.background.tertiary,
    flexDirection: 'row',
    marginTop: 'auto',
    padding: 10,
  },
});
