import React, {useEffect, useState} from 'react';

import {Button, View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import {Path, Svg} from 'react-native-svg';

const OnBoardPg1 = ({setOnBoardDataPage}) => {
    const [firstName, setFirstName] =  useState('');
    const [lastName, setLastName] =  useState('');

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin:10}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            color: '#000000',
            width: 220,
            padding:10,
            paddingBottom:0
          }}>
          Name as in ID
       
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Medium',
            fontSize: 16,
            color: '#777F89',
            width: 300,
            padding:10,
            paddingTop:0
          }}>
          Name as in your offical document
          </Text>
          
      </View>
      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
          placeholder={'First Name'}
          placeholderTextColor={"#26292D"}

        />
         <Text
          style={{
            fontFamily: 'Inter-Medium',
            fontSize: 11,
            color: '#777F89',
            width: 300,
            padding:10,
            paddingTop:0,
            paddingLeft:20
          }}>e.g., Katherine not “Kate”</Text>
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
          placeholderTextColor={"#26292D"}
          placeholder={'Last Name'}
        />
          <TouchableOpacity onPress={() => setOnBoardDataPage(2)}>
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
              Continue
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
  input: {
    height: 50,
    color:"#26292D",
    borderRadius: 17,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#EBEBEB',
    marginHorizontal: 15,
  },
});

export default OnBoardPg1;
