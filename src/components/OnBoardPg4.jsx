import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import {Path, Svg} from 'react-native-svg';
const OnBoardPg4 = ({setOnBoardDataPage}) => {
  const [email, setEmail] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <View
        style={{
          flex: 1,
          margin:10,
          marginTop: 130,
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            color: '#000000',
            width: 390,
            padding: 10,
            paddingBottom: 0,
          }}>
          About our services
        </Text>
        <View
          style={{
            margin: 30,
            marginTop: 30,
            backgroundColor: 'white',
            borderRadius: 28,
            padding: 15,
            width: '95%',
          }}>
          <View style={{margin: 8}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Svg
                width={15}
                height={18}
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M3.578 14.175h7.244v-1.35H3.579v1.35zm0-3.825h7.244V9H3.579v1.35zM1.35 18c-.36 0-.675-.135-.945-.405A1.295 1.295 0 010 16.65V1.35C0 .99.135.675.405.405.675.135.99 0 1.35 0h8.123L14.4 4.928V16.65c0 .36-.135.675-.405.945-.27.27-.585.405-.945.405H1.35zM8.797 5.535V1.35H1.35v15.3h11.7V5.535H8.797z"
                  fill="#8971E9"
                />
              </Svg>
              <Text
                style={{
                  color: '#6C4EE3',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                  marginLeft: 20,
                }}>
                Deposit Insurance Information
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Svg
                width={15}
                height={18}
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M3.578 14.175h7.244v-1.35H3.579v1.35zm0-3.825h7.244V9H3.579v1.35zM1.35 18c-.36 0-.675-.135-.945-.405A1.295 1.295 0 010 16.65V1.35C0 .99.135.675.405.405.675.135.99 0 1.35 0h8.123L14.4 4.928V16.65c0 .36-.135.675-.405.945-.27.27-.585.405-.945.405H1.35zM8.797 5.535V1.35H1.35v15.3h11.7V5.535H8.797z"
                  fill="#8971E9"
                />
              </Svg>
              <Text
                style={{
                  color: '#6C4EE3',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                  marginLeft: 20,
                }}>
                Personal Terms
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Svg
                width={15}
                height={18}
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M3.578 14.175h7.244v-1.35H3.579v1.35zm0-3.825h7.244V9H3.579v1.35zM1.35 18c-.36 0-.675-.135-.945-.405A1.295 1.295 0 010 16.65V1.35C0 .99.135.675.405.405.675.135.99 0 1.35 0h8.123L14.4 4.928V16.65c0 .36-.135.675-.405.945-.27.27-.585.405-.945.405H1.35zM8.797 5.535V1.35H1.35v15.3h11.7V5.535H8.797z"
                  fill="#8971E9"
                />
              </Svg>
              <Text
                style={{
                  color: '#6C4EE3',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                  marginLeft: 20,
                }}>
                Privacy policy and notice
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <Text
            style={{
              padding: 11,
              borderRadius: 20,
              fontFamily: 'Inter-Regular',
              fontSize: 10,
              textAlign: 'center',

              color: '#26292D',
              marginTop: 50,
            }}>
            By tapping “Accept and continue”, you agree that you have received
            by email, read and understood these documents.
          </Text>
          <TouchableOpacity onPress={() => setOnBoardDataPage(5)}>
            <Text
              style={{
                color: '#FFFFFF',
                backgroundColor: '#6C4EE3',
                padding: 11,
                borderRadius: 20,
                fontFamily: 'Inter-Regular',
                fontSize: 14,
                textAlign: 'center',
                margin: 10,
                marginTop: 0,
              }}>
              Accept and continue
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

export default OnBoardPg4;
