import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
} from 'react-native'; 
import Header from '../components/Header';
 
import NewTransactionModal from '../components/NewTransactionModal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Path, Svg} from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const data = {
  labels: ['1', '6', '11', '16', '21', '26', '31'],
  datasets: [
    {
      data: [10, 6, 31, 26, 21, 46, 31],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity - 0.5})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};
const chartConfig = {
  fillShadowGradientFrom: '#6C4EE3',
  fillShadowGradientFromOpacity: 0.5,

  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(124, 132, 141, ${opacity})`,
  strokeWidth: 0.4, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  propsForDots: {
    r: '2',
    strokeWidth: '2',
  },
};
export default function Transfer({navigation}) {
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchText, onSearchText] = React.useState('');

  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content" // Here is where you change the font-color
      />

      <Header
        text={'Transfer'}
        rightComponent={
          <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <Text
              style={{
                color: '#FFFFFF',
                backgroundColor: '#6C4EE3',
                padding: 8,
                borderRadius: 20,
                fontFamily: 'Inter',
                fontSize: 16,
              }}>
              + New
            </Text>
          </TouchableOpacity>
        }
      />

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onSearchText}
          value={searchText}
          placeholder={'🔍 Name, phone, email, @handle'}
        />
        <View style={styles.cardBig}>
          <View style={{width: '100%'}}>
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  marginVertical: 5,
                }}>
                Transactions
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
                    color: '#777F89',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                  }}>
                  <Svg
                    width={13}
                    height={13}
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M7.15 6.24V3.9a.629.629 0 00-.187-.463.629.629 0 00-.463-.187.629.629 0 00-.463.187.629.629 0 00-.187.463v2.584a.672.672 0 00.195.471L8.19 9.1c.12.12.27.179.455.179.184 0 .336-.06.455-.179.12-.12.179-.27.179-.455A.616.616 0 009.1 8.19L7.15 6.24zM6.5 13c-.9 0-1.744-.17-2.535-.512a6.563 6.563 0 01-2.064-1.39 6.564 6.564 0 01-1.39-2.063A6.33 6.33 0 010 6.5c0-.9.17-1.744.512-2.535a6.564 6.564 0 011.39-2.064A6.564 6.564 0 013.964.511 6.33 6.33 0 016.5 0c.9 0 1.744.17 2.535.512.79.341 1.479.804 2.064 1.39a6.563 6.563 0 011.39 2.063c.34.79.511 1.636.511 2.535 0 .9-.17 1.744-.512 2.535a6.563 6.563 0 01-1.39 2.064 6.563 6.563 0 01-2.063 1.39A6.329 6.329 0 016.5 13zm0-1.3c1.44 0 2.668-.506 3.68-1.52 1.014-1.012 1.52-2.24 1.52-3.68s-.506-2.668-1.52-3.68C9.169 1.805 7.94 1.3 6.5 1.3s-2.668.506-3.68 1.52C1.805 3.831 1.3 5.06 1.3 6.5s.506 2.668 1.52 3.68c1.012 1.014 2.24 1.52 3.68 1.52z"
                      fill="#777F89"
                    />
                  </Svg>{' '}
                  No transactions yet
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View>
            <Image
              style={{height: 40, width: 35}}
              source={require('../assets/images/home.png')}
            />
          </View>
        </TouchableOpacity>

        <View>
          <Image
            style={{height: 40, width: 50}}
            source={require('../assets/images/transfer_active.png')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Hub')}>
          <View>
            <Image
              style={{height: 40, width: 25}}
              source={require('../assets/images/hub.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <NewTransactionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F7F7F7',
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
