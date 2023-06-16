import React, {useEffect, useState} from 'react';

import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const OnBoardPg2 = ({setOnBoardDataPage}) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Function to handle the selection of day
  const handleDayChange = value => {
    setDay(value);
  };

  // Function to handle the selection of month
  const handleMonthChange = value => {
    setMonth(value);
  };

  // Function to handle the selection of year
  const handleYearChange = value => {
    setYear(value);
  };
  const months = [
    {label: 'Month', value: ''},
    {label: 'January', value: '1'},
    {label: 'February', value: '2'},
    {label: 'March', value: '3'},
    {label: 'April', value: '4'},
    {label: 'May', value: '5'},
    {label: 'June', value: '6'},
    {label: 'July', value: '7'},
    {label: 'August', value: '8'},
    {label: 'September', value: '9'},
    {label: 'October', value: '10'},
    {label: 'November', value: '11'},
    {label: 'December', value: '12'},
  ];

  return (
    <>
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            color: '#000000',
            width: 220,
            padding: 10,
            paddingBottom: 0,
          }}>
          Date of birth
        </Text>
      </View>
      <View
        style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={styles.container}>
          <View style={styles.dropdownContainer}>
            {/* Month dropdown */}
            <Picker
              selectedValue={month}
              style={{
                width: 130,
                backgroundColor: '#EBEBEB',
                margin: 4,
                padding: 10,
                color: '#26292D',

            
              }}
              onValueChange={handleMonthChange}>
              {months.map(monthOption => (
                <Picker.Item
                  label={monthOption.label}
                  value={monthOption.value}
                  key={monthOption.value}
                />
              ))}
            </Picker>

            {/* Day dropdown */}
            <Picker
              selectedValue={day}
              style={{
                width: 110,
                backgroundColor: '#EBEBEB',
                margin: 4,
                padding: 10,

                color: '#26292D',
              }}
              onValueChange={handleDayChange}>
              <Picker.Item label="Day" value="" />
              {/* Render day options */}
              {Array.from({length: 31}, (_, index) => (
                <Picker.Item
                  label={(index + 1).toString()}
                  value={(index + 1).toString()}
                  key={index}
                />
              ))}
            </Picker>

            {/* Year dropdown */}
            <Picker
              selectedValue={year}
              style={{
                width: 120,
                backgroundColor: '#EBEBEB',
                margin: 4,
                padding: 10,
                color: '#26292D',
              }}
              onValueChange={handleYearChange}>
              <Picker.Item label="Year" value="" />
              {/* Render year options */}
              {Array.from({length: 100}, (_, index) => {
                const currentYear = new Date().getFullYear();
                const yearValue = currentYear - index;
                return (
                  <Picker.Item
                    label={yearValue.toString()}
                    value={yearValue.toString()}
                    key={index}
                  />
                );
              })}
            </Picker>
          </View>
          <TouchableOpacity onPress={() => setOnBoardDataPage(3)}>
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
                marginTop: 50,
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
});

export default OnBoardPg2;
