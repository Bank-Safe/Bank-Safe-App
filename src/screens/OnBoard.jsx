import React, {useState} from 'react';

import {StyleSheet, Text, View, StatusBar} from 'react-native';
import OnBoardPg0 from '../components/OnBoardPg0';
import OnBoardPg1 from '../components/OnBoardPg1';
import OnBoardPg2 from '../components/OnBoardPg2';
import OnBoardPg3 from '../components/OnBoardPg3';
import OnBoardPg4 from '../components/OnBoardPg4';
import OnBoardPg5 from '../components/OnBoardPg5';
import OnBoardPg6 from '../components/OnBoardPg6';


export default function OnBoard({navigation}) {
  const [OnBoardDataPage, setOnBoardDataPage] = useState(0);

  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content" // Here is where you change the font-color
      />
      {(() => {
        switch (OnBoardDataPage) {
          case 0:
            return <OnBoardPg0 setOnBoardDataPage={setOnBoardDataPage}/>
          case 1:
            return  <OnBoardPg1 setOnBoardDataPage={setOnBoardDataPage}/>
          case 2:
            return  <OnBoardPg2 setOnBoardDataPage={setOnBoardDataPage}/>
          case 3:
            return  <OnBoardPg3 setOnBoardDataPage={setOnBoardDataPage}/>
          case 4:
            return  <OnBoardPg4 setOnBoardDataPage={setOnBoardDataPage}/>
          case 5:
            return  <OnBoardPg5 setOnBoardDataPage={setOnBoardDataPage}/>
          case 6:
            return  <OnBoardPg6 setOnBoardDataPage={setOnBoardDataPage}/>
          case 'lost':
            return <Text>Hello</Text>;
          default:
            return null;
        }
      })()}
       
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F7F7F7',
    width: '100%',
  },
  logo: {
    height: 30,
    width: 30,
    margin: 2,
  },
  text: {
    fontFamily: 'Inter-Bold',
  },
  cardBig: {
    backgroundColor: 'white',
    padding: 20,
    margin: 15,
    borderRadius: 16,
    marginTop: 5,
    flexDirection: 'row',
  },
  cardSmall: {
    backgroundColor: 'white',
    padding: 20,
    marginRight: 15,
    borderRadius: 16,
    marginTop: 0,
    flexDirection: 'row',
    width: '48%',
  },
  input: {
    height: 30,
    borderWidth: 0.1,
    borderRadius: 30,
    padding: 4,
    paddingHorizontal: 10,
    backgroundColor: '#EDEFF2',
    marginHorizontal: 15,
  },
});
