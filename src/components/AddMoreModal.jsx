import React, {useEffect, useState} from 'react';

import {Button, View, Text, StyleSheet, Image} from 'react-native';

import Modal from 'react-native-modal';

const AddMoreModal = ({isModalVisible, setModalVisible}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isModalVisible}
        style={{flexDirection: 'column', justifyContent: 'flex-end', margin: 0}}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            height: 350,
            backgroundColor: '#F7F7F7',
            borderTopEndRadius: 28,
            borderTopStartRadius: 28,
          }}>
          <View
            style={{
              height: 300,
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 28,
            }}>
            <View
              style={{margin: 20, flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.logo}
                source={require('../assets/images/card.png')}
              />
              <Text
                style={{
                  color: '#6C4EE3',
                  fontFamily: 'Inter-Medium',
                  fontSize: 17,
                  marginLeft: 20,
                  marginBottom:5
                }}>
                Add Card
              </Text>
            </View>
            <View
              style={{margin: 20, marginTop:0,flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.logo}
                source={require('../assets/images/plus.png')}
              />
              <Text
                style={{
                  color: '#6C4EE3',
                  fontFamily: 'Inter-Medium',
                  fontSize: 17,
                  marginLeft: 20,
                }}>
                Add Sub-Account
              </Text>
            </View>
            <View
              style={{margin: 20, marginTop:0,flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.logo}
                source={require('../assets/images/statement.png')}
              />
              <Text
                style={{
                  color: '#6C4EE3',
                  fontFamily: 'Inter-Medium',
                  fontSize: 17,
                  marginLeft: 20,
                }}>
                Statement
              </Text>
            </View>
            <View
              style={{margin: 20, marginTop:0,flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.logo}
                source={require('../assets/images/support.png')}
              />
              <Text
                style={{
                  color: '#6C4EE3',
                  fontFamily: 'Inter-Medium',
                  fontSize: 17,
                  marginLeft: 20,
                }}>
                  Support
              </Text>
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

export default AddMoreModal;
