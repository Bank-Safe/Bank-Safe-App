import React, {useEffect, useMemo, useRef, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import RadioButton from '../components/RadioButton';

const PROP = [
	{
		key: 'Driver’s license',
		text: 'Driver’s license',
	},
	{
		key: 'Passport',
		text: 'Passport',
	},
	{
		key: 'Identity card',
		text: 'Identity card',
	}, 
];
const OnBoardPg7 = ({setOnBoardDataPage}) => {

const [radioSelected, setRadioSelected] = useState("");
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin:10
        }}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            color: '#000000',
            width: 300,
            padding: 10,
            paddingBottom: 0,
          }}>
          Pick an original document to upload
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Medium',
            fontSize: 14,
            color: '#777F89',
            width: 300,
            padding: 10,
            paddingBottom: 0,
          }}>
          We need a valid document to confirm that you reside in Portugal and
          verify who you are. Data is processed securely
        </Text>
      </View>
      <View
        style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={styles.container}>
          <View
            style={{
              margin: 30,
              marginTop: 30,
              backgroundColor: 'white',
              borderRadius: 28,
              padding: 15, 
            }}>
          <View style={styles.container}>
        <RadioButton   PROP={PROP} radioSelected={radioSelected} setRadioSelected={setRadioSelected} />
      </View>

             
          </View>
          <View
            style={{
              margin: 10,
              marginTop: 50,
            }}>
           
            <TouchableOpacity
              onPress={() => {
                setOnBoardDataPage(8);
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  backgroundColor: '#6C4EE3',
                  padding: 11,
                  borderRadius: 20,
                  fontFamily: 'Inter-Regular',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
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
  preview: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  camera: {
    height: 240,
    width: 240,
    overflow: 'hidden',
    borderRadius: 300,
  },
  radioButtonContainer: {
    marginBottom: 10, // Custom margin between radio buttons
  },
  radioButtonText: {
    fontSize: 16, // Custom font size
  },
});

export default OnBoardPg7;
