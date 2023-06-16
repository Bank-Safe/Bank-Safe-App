import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import {Circle, Path, Svg} from 'react-native-svg';
import {RNCamera} from 'react-native-camera';
const OnBoardPg8 = ({setOnBoardDataPage}) => {
  const [imageData, setImageData] = useState({});
  const [imageClicked, setImageClicked] = useState(false);
  const cameraRef = useRef();

  takePicture = async () => {
    const options = {quality: 0.5, base64: true};
    const data = await cameraRef.current.takePictureAsync(options);
    setImageData(data);
    setImageClicked(true);
  };
  return (
    <>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: imageClicked ? '#FFFFFF' : '#000000',
        }}>
        <View style={styles.container}>
          <View style={styles.preview}>
            {!imageClicked && (
              <RNCamera
                ref={cameraRef}
                autoFocus={'on'}
                zoom={0}
                whiteBalance={'auto'}
                focusDepth={0}
                trackingEnabled
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                style={styles.camera}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                ratio={'16:9'}
              />
            )}
            {imageClicked && (
              <Image source={{uri: imageData.uri}} style={styles.camera} />
            )}
          </View>
          <View
            style={{
              margin: 15,
              borderRadius: 28,
              padding: 10,
            }}>
            <View style={{}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 13,
                    fontFamily: 'Inter-Medium',

                    marginLeft: 20,
                  }}>
                  Front of card
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 13,
                    fontFamily: 'Inter-Medium',
                    textAlign: 'center',
                  }}>
                  Position all four corners of the FRONT clearly in the frame
                  and remove any cover.
                </Text>
                {imageClicked && (
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 13,
                      fontFamily: 'Inter-Medium',
                      textAlign: 'center',
                    }}>
                    Make sure your document is clear to read
                  </Text>
                )}
                {!imageClicked && (
                  <TouchableOpacity
                    onPress={() => {
                      takePicture();
                      //setOnBoardDataPage(5)
                    }}>
                    <Image
                      style={styles.logo}
                      source={require('../assets/images/shutter.png')}
                    />
                  </TouchableOpacity>
                )}
                {imageClicked && (
                  <>
                    <TouchableOpacity
                      style={{width: '100%'}}
                      onPress={() => {
                        setOnBoardDataPage(9);
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

                          marginTop: 30,
                          marginBottom: 10,
                        }}>
                        My card is readable
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{width: '100%'}}
                      onPress={() => {
                        setOnBoardDataPage(9);
                      }}>
                      <Text
                        style={{
                          color: '#6C4EE3',
                          borderColor: '#6C4EE3',
                          borderWidth:1,
                          padding: 11,
                          borderRadius: 20,
                          fontFamily: 'Inter-Regular',
                          fontSize: 14,
                          textAlign: 'center',
                        }}>
                       Take a new picture
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
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
  logo: {height: 50, width: 50, marginTop: 200},
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
    width: 340,
    overflow: 'hidden',
  },
});

export default OnBoardPg8;
