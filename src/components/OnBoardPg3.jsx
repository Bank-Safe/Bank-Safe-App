import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
const OnBoardPg3 = ({setOnBoardDataPage}) => {
  const [email, setEmail] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin:10}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            color: '#000000',
            width: 220,
            padding: 10,
            paddingBottom: 0,
          }}>
          Email
        </Text>
      </View>
      <View
        style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholderTextColor={"#26292D"}
            placeholder={'Email'}
          />
          <View
            style={{
              margin: 20,
              marginTop: 30,
              backgroundColor: 'white',
              borderRadius: 28,
              padding: 15,
            }}>
            <View style={{margin: 8}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    tintColors={{true: '#6C4EE3'}}
                    onCheckColor="#6C4EE3"
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                </View>

                <Text
                  style={{
                    color: '#26292D',
                    fontSize: 14,
                    fontFamily: 'Inter-Medium',
                    marginVertical: 5,
                  }}>
                  Keep me up to date about personalised offers, products and
                  services
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => setOnBoardDataPage(4)}>
            <Text
              style={{
                color: '#FFFFFF',
                backgroundColor: '#B1A2ED',
                padding: 11,
                borderRadius: 20,
                fontFamily: 'Inter-Regular',
                fontSize: 14,
                textAlign: 'center',
                margin: 10,
                marginTop: 50,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  logo: {height: 50, width: 50},
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 50,
    color:"#26292D",
    borderRadius: 17,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#EBEBEB',
    marginHorizontal: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dropdownContainer: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    justifyContent: 'center',

    marginRight: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default OnBoardPg3;
