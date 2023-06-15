import React, {useEffect, useState} from 'react';

import {Button, View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import {Path, Svg} from 'react-native-svg';

const NewTransferModal = ({isModalVisible, setModalVisible}) => {
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
              marginLeft: 20,
            }}>
            Add New
          </Text>
          <View
            style={{
              margin: 20,
              marginTop: 0,
              backgroundColor: 'white',
              borderRadius: 28,
              padding: 15,
            }}>
            <View style={{margin: 5}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M3.6 14.175a.87.87 0 01-.641-.259.87.87 0 01-.259-.641V8.752c0-.255.086-.465.259-.63a.892.892 0 01.641-.247.87.87 0 01.641.259.87.87 0 01.259.641v4.522a.834.834 0 01-.259.63.892.892 0 01-.641.248zm5.4 0a.87.87 0 01-.641-.259.87.87 0 01-.259-.641V8.752c0-.255.086-.465.259-.63A.892.892 0 019 7.876a.87.87 0 01.641.259.87.87 0 01.259.641v4.522a.834.834 0 01-.259.63.892.892 0 01-.641.248zm-8.123 3.6a.834.834 0 01-.63-.259.892.892 0 01-.247-.641.87.87 0 01.259-.641.87.87 0 01.641-.259h16.223c.255 0 .464.086.63.259a.892.892 0 01.247.641.87.87 0 01-.259.641.871.871 0 01-.641.259H.877zm13.523-3.6a.87.87 0 01-.641-.259.87.87 0 01-.259-.641V8.752c0-.255.086-.465.259-.63a.892.892 0 01.641-.247.87.87 0 01.641.259.871.871 0 01.259.641v4.522a.834.834 0 01-.259.63.892.892 0 01-.641.248zM9.81.18l7.582 3.78c.195.105.346.251.45.439.106.187.158.394.158.619 0 .3-.109.55-.326.753a1.1 1.1 0 01-.776.304H1.125c-.3 0-.563-.101-.787-.304A.973.973 0 010 5.018c0-.225.049-.432.146-.62a.898.898 0 01.462-.415L8.19.18C8.445.06 8.715 0 9 0c.285 0 .555.06.81.18z"
                    fill="#8971E9"
                  />
                </Svg>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontFamily: 'Inter-Medium',
                    paddingLeft: 20,
                  }}>
                  Bank recipient
                </Text>
              </View>
              <Text
                style={{
                  color: '#75808A',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                  paddingLeft: 40,
                }}>
                Transfer money to any bank account
              </Text>
            </View>
            <View style={{margin: 5}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Svg
                  width={18}
                  height={15}
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M18 1.35v11.7c0 .36-.135.675-.405.945-.27.27-.585.405-.945.405H1.35c-.36 0-.675-.135-.945-.405A1.295 1.295 0 010 13.05V1.35C0 .99.135.675.405.405.675.135.99 0 1.35 0h15.3c.36 0 .675.135.945.405.27.27.405.585.405.945zM1.35 3.803h15.3V1.35H1.35v2.453zm0 2.902v6.345h15.3V6.705H1.35z"
                    fill="#8971E9"
                  />
                </Svg>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontFamily: 'Inter-Medium',
                    paddingLeft: 20,
                  }}>
                  Card recipent
                </Text>
              </View>
              <Text
                style={{
                  color: '#75808A',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                  paddingLeft: 40,
                }}>
                Transfer money to any card account{' '}
              </Text>
            </View>
            <View style={{margin: 5}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Svg
                  width={18}
                  height={15}
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M3.678 14.454c-1.014 0-1.88-.36-2.6-1.079A3.543 3.543 0 010 10.775V3.685C0 2.67.36 1.802 1.079 1.08 1.798.361 2.664 0 3.679 0h10.637c1.014 0 1.882.36 2.603 1.081C17.639 1.802 18 2.67 18 3.684v7.092c0 1.014-.36 1.88-1.081 2.6a3.552 3.552 0 01-2.603 1.078H3.678zm.133-10.602h10.4c.435 0 .846.069 1.234.205.387.137.734.33 1.04.582v-.955c0-.607-.21-1.12-.63-1.54-.42-.419-.932-.629-1.539-.629H3.678c-.606 0-1.119.21-1.539.63-.42.42-.63.932-.63 1.539v.965a3.45 3.45 0 011.052-.59c.39-.137.807-.207 1.25-.207z"
                    fill="#8971E9"
                  />
                </Svg>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontFamily: 'Inter-Medium',
                    paddingLeft: 20,
                  }}>
                  Crypto Wallet
                </Text>
              </View>
              <Text
                style={{
                  color: '#75808A',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                  paddingLeft: 40,
                }}>
                Transfer money to a crypto wallet{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 20,
              marginTop: 0,
              backgroundColor: 'white',
              borderRadius: 28,
              padding: 15,
            }}>
            <View style={{margin: 5}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M9.002 18a8.751 8.751 0 01-3.507-.709 9.12 9.12 0 01-2.86-1.925A9.079 9.079 0 01.708 12.51 8.75 8.75 0 010 9.002C0 7.76.236 6.59.708 5.496A9.08 9.08 0 012.635 2.64 9.153 9.153 0 015.495.711 8.73 8.73 0 019.004 0c1.244 0 2.413.237 3.505.711a9.162 9.162 0 012.856 1.927 9.078 9.078 0 011.926 2.857A8.753 8.753 0 0118 9.002a8.757 8.757 0 01-.708 3.508 9.083 9.083 0 01-1.926 2.858 9.096 9.096 0 01-2.859 1.924A8.756 8.756 0 019.002 18zm-.947-1.532v-1.812c-.517 0-.951-.191-1.302-.573a1.923 1.923 0 01-.527-1.345v-.97l-4.511-4.51a6.248 6.248 0 00-.155.87 8.39 8.39 0 00-.045.866c0 1.908.62 3.576 1.86 5.004 1.24 1.429 2.8 2.252 4.68 2.47zm6.473-2.378c.322-.35.604-.725.845-1.122.243-.397.448-.813.616-1.247.168-.434.293-.879.374-1.335.081-.455.122-.92.122-1.394a7.441 7.441 0 00-1.275-4.231 7.42 7.42 0 00-3.409-2.786v.394c0 .513-.177.96-.532 1.34-.355.382-.79.572-1.302.572H8.055v1.916a.76.76 0 01-.3.62c-.199.16-.425.24-.677.24H5.256v1.935h5.682c.25 0 .456.096.619.289a.996.996 0 01.244.663v2.794h.943c.425 0 .799.126 1.123.377.323.251.544.576.661.975z"
                    fill="#8971E9"
                  />
                </Svg>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontFamily: 'Inter-Medium',
                    paddingLeft: 20,
                  }}>
                  Send International
                </Text>
              </View>
              <Text
                style={{
                  color: '#75808A',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                  paddingLeft: 40,
                }}>
                Find the best way to transfer abroad
              </Text>
            </View>
            <View style={{margin: 5}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Svg
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M4.565 9.135c-1.292 0-2.375-.438-3.251-1.314C.438 6.946 0 5.862 0 4.571c0-1.292.438-2.376 1.314-3.254C2.19.439 3.274 0 4.564 0H7.52c.213 0 .392.074.538.221a.745.745 0 01.217.543.735.735 0 01-.755.751H4.565c-.876 0-1.604.29-2.185.87-.58.581-.87 1.31-.87 2.185 0 .876.29 1.604.87 2.185.58.58 1.309.87 2.185.87h2.954c.213 0 .392.073.538.219a.736.736 0 01.217.54.735.735 0 01-.755.751H4.565zm1.604-3.868a.682.682 0 01-.697-.7.669.669 0 01.697-.693h5.657a.682.682 0 01.697.7.67.67 0 01-.697.693H6.169zm4.312 3.868a.734.734 0 01-.543-.219.736.736 0 01-.218-.54.741.741 0 01.76-.751h2.95c.876 0 1.604-.29 2.184-.87.58-.58.87-1.309.87-2.185 0-.876-.29-1.604-.87-2.184-.58-.58-1.308-.87-2.184-.87h-2.95a.734.734 0 01-.542-.22.736.736 0 01-.218-.54c0-.214.073-.393.218-.538A.737.737 0 0110.481 0h2.949c1.291 0 2.376.439 3.254 1.316C17.56 2.194 18 3.278 18 4.57c0 1.291-.439 2.375-1.316 3.251-.878.876-1.963 1.314-3.254 1.314h-2.95z"
                    fill="#8971E9"
                  />
                </Svg>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontFamily: 'Inter-Medium',
                    paddingLeft: 20,
                  }}>
                  Create a payment link{' '}
                </Text>
              </View>
              <Text
                style={{
                  color: '#75808A',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                  paddingLeft: 40,
                }}>
                Transfer without account details{' '}
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

export default NewTransferModal;
