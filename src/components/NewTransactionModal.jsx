import React, {useEffect, useState} from 'react';

import {Button, View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';

const NewTransactionModal = ({isModalVisible, setModalVisible}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isModalVisible}
        style={{flexDirection: 'column', justifyContent: 'flex-end', margin: 0}}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            height: 700,
            backgroundColor: '#F7F7F7',
            borderTopEndRadius: 28,
            borderTopStartRadius: 28,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text
                style={{
                  fontFamily: 'Inter-Medium',
                  color: '#777F89',
                  fontSize: 17,
                  paddingLeft: 10,
                  paddingTop: 20,
                }}>
                X
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Inter-Medium',
                color: '#777F89',
                fontSize: 17,
                textAlign: 'center',
                paddingTop: 20,
                marginLeft: 130,
              }}>
              New Transfer
            </Text>
          </View>
          <Text
              style={{
                fontFamily: 'Inter-Medium',
                color: '#000000',
                fontSize: 19,
                paddingTop: 20,
                marginLeft:20
              }}>
              Add New
            </Text>
          <View
            style={{
              height: 300,
              margin: 20,
              marginTop:0,
              backgroundColor: 'white',
              borderRadius: 28,
            }}>
            
            
            <View style={{margin:20}}>
                <Text
                  style={{
                    color: '#777F89',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                    marginVertical: 5,
                  }}>
                  Beneficiary
                </Text>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#6C4EE3',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                    }}>
                    Fname Lname
                  </Text>
                  <TouchableOpacity
                    onPress={() => Clipboard.setString('Fname Lname')}>
                    <Image
                      style={{height: 15, width: 13}}
                      source={require('../assets/images/copy.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default NewTransactionModal;
