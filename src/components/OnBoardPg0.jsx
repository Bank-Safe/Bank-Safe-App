import React, {useEffect, useState} from 'react';

import {Button, View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import {Path, Svg} from 'react-native-svg';

const OnBoardPg0 = ({setOnBoardDataPage}) => {
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin:10}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            color: '#000000',
            width: 200,
            textAlign: 'center',
          }}>
          Your money, one app
        </Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setOnBoardDataPage(1)}>
            <Text
              style={{
                color: '#FFFFFF',
                backgroundColor: '#6C4EE3',
                padding: 11,
                borderRadius: 20,
                fontFamily: 'Inter-Regular',
                fontSize: 14,
                textAlign: 'center',
                marginHorizontal: 10,
              }}>
              Create a free account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOnBoardDataPage(1)}>
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
              }}>
              I already have an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container:{
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
});

export default OnBoardPg0;
