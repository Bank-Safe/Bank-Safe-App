import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
export default function RadioButton({PROP,radioSelected,setRadioSelected}) {



  return (
    <View>
      {PROP.map(res => {
        return (
          <View key={res.key} style={styles.container}>
			   <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
				setRadioSelected(res.key)
                
              }}>
              {radioSelected === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
			<TouchableOpacity
              onPress={() => {
				setRadioSelected(res.key)
                
              }}>
            <Text style={styles.radioText}>{res.text}</Text>
			</TouchableOpacity>
         
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
	padding:15

  },
  radioText: {
    marginLeft: 35,
    fontSize: 16,
    color: '#6C4EE3',
	fontFamily:"Inter-Medium"
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#6C4EE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: '#6C4EE3',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});
