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
const OnBoardPg6 = ({setOnBoardDataPage}) => {
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
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
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
          Verify your identity with a quick photo
        </Text>
      </View>
      <View
        style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
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
                type={RNCamera.Constants.Type.front}
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
              marginTop: 10,
              backgroundColor: 'white',
              borderRadius: 28,
              padding: 10,
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
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Circle cx={20} cy={20} r={20} fill="#E4DFFA" />
                  <Path
                    d="M19.5 23.762c.9 0 1.656-.306 2.269-.918.612-.613.919-1.369.919-2.269 0-.912-.307-1.672-.92-2.278-.612-.606-1.368-.91-2.268-.91-.913 0-1.672.304-2.278.91-.606.606-.91 1.366-.91 2.278 0 .9.304 1.656.91 2.269.606.612 1.365.918 2.278.918zM13.125 26.5c-.3 0-.563-.113-.787-.337a1.08 1.08 0 01-.338-.788v-9.619c0-.287.113-.547.338-.778.225-.231.487-.347.787-.347h2.756L17.25 13h4.5l1.369 1.631h2.756c.288 0 .547.116.778.347.231.231.347.49.347.778v9.619c0 .3-.116.563-.347.788-.231.224-.49.337-.778.337h-12.75z"
                    fill="#6C4EE3"
                  />
                </Svg>
                <Text
                  style={{
                    color: '#6C4EE3',
                    fontSize: 13,
                    fontFamily: 'Inter-Medium',
                    marginVertical: 5,
                    marginLeft: 20,
                  }}>
                  It wont be your profile picture{' '}
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
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Circle cx={20} cy={20} r={20} fill="#E4DFFA" />
                  <Path
                    d="M19.5 23.516c.39 0 .723-.137.996-.41.274-.274.41-.606.41-.997v-.937h.938c.39 0 .722-.137.996-.41.273-.274.41-.606.41-.996 0-.391-.137-.723-.41-.996a1.356 1.356 0 00-.996-.41h-.938v-.938c0-.39-.136-.723-.41-.996a1.356 1.356 0 00-.996-.41c-.39 0-.723.136-.996.41-.274.273-.41.605-.41.996v.937h-.938c-.39 0-.722.137-.996.41-.273.274-.41.606-.41.997 0 .39.137.722.41.996.274.273.606.41.996.41h.938v.937c0 .391.136.723.41.996.273.274.605.41.996.41zm0 6.023h-.234a.466.466 0 01-.211-.047c-2.047-.64-3.735-1.91-5.063-3.808C12.664 23.785 12 21.687 12 19.39v-4.43c0-.39.113-.742.34-1.055.226-.312.52-.539.879-.68l5.625-2.109A1.94 1.94 0 0119.5 11c.219 0 .438.04.656.117l5.625 2.11c.36.14.653.367.88.68.226.312.339.663.339 1.054v4.43c0 2.297-.664 4.394-1.992 6.293-1.328 1.898-3.016 3.168-5.063 3.808-.078.031-.226.047-.445.047zm0-1.898c1.625-.516 2.969-1.547 4.031-3.094a8.904 8.904 0 001.594-5.156v-4.43L19.5 12.85l-5.625 2.11v4.43c0 1.89.531 3.609 1.594 5.156 1.062 1.547 2.406 2.578 4.031 3.094z"
                    fill="#6C4EE3"
                  />
                </Svg>
                <Text
                  style={{
                    color: '#6C4EE3',
                    fontSize: 13,
                    fontFamily: 'Inter-Medium',
                    marginVertical: 5,
                    marginLeft: 20,
                  }}>
                  Your photo is secure and is only used for verification
                  purposes
                </Text>
              </View>
            </View>
          </View>
          {!imageClicked && (
            <TouchableOpacity
              onPress={() => {
                takePicture();
                //setOnBoardDataPage(5)
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
                  margin: 10,
                  marginTop: 0,
                }}>
                Capture Face
              </Text>
            </TouchableOpacity>
          )}
          {imageClicked && (
            <TouchableOpacity
              onPress={() => {
                setOnBoardDataPage(6);
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
                  margin: 10,
                  marginTop: 0,
                }}>
                Accept and continue
              </Text>
            </TouchableOpacity>
          )}
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
});

export default OnBoardPg6;
