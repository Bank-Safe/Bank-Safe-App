import React, {useEffect, useState} from 'react';

import {Button, View, Text, StyleSheet, Picker} from 'react-native';
 
const OnBoardPg2 = ({setOnBoardDataPage}) => {
   const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Function to handle the selection of day
  const handleDayChange = (value) => {
    setDay(value);
  };

  // Function to handle the selection of month
  const handleMonthChange = (value) => {
    setMonth(value);
  };

  // Function to handle the selection of year
  const handleYearChange = (value) => {
    setYear(value);
  };
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
          <Text style={styles.label}>Date of Birth</Text>
          <View style={styles.dropdownContainer}>
            {/* Day dropdown */}
            <Picker
              selectedValue={day}
              style={styles.dropdown}
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

            {/* Month dropdown */}
            <Picker
              selectedValue={month}
              style={styles.dropdown}
              onValueChange={handleMonthChange}>
              <Picker.Item label="Month" value="" />
              <Picker.Item label="January" value="January" />
              <Picker.Item label="February" value="February" />
              {/* Render month options for the remaining months */}
            </Picker>

            {/* Year dropdown */}
            <Picker
              selectedValue={year}
              style={styles.dropdown}
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
  dropdown: {
    flex: 1,
    margin: 4,
  },
});

export default OnBoardPg2;
