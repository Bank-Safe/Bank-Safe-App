import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import ProgressBar from 'react-native-progress/Bar';
import {LineChart} from 'react-native-chart-kit';
import AddMoreModal from '../components/AddMoreModal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AMComponent from '../components/AMComponent';
import {Linking} from 'react-native';
import {MoneriumClient} from '@monerium/sdk';

import * as CryptoJS from 'crypto-js';
import {URL, URLSearchParams} from 'react-native-url-polyfill';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
export default function Home({navigation}) {
  const [codeVerifier, setCodeVerifier] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [addMoneyActive, setAddMoneyActive] = useState(false);
  const [login, setLogin] = useState(false);
  const useInitialURL = () => {
    const [url, setUrl] = useState(null);
    const [processing, setProcessing] = useState(true);
   

    useEffect(() => {
      const getUrlAsync = async () => {
        // Get the deep link used to open the app
        const initialUrl = await Linking.getInitialURL();

        setUrl(initialUrl);
        setProcessing(false);
        console.log(initialUrl);
        if (initialUrl) {
          const route = initialUrl.replace(/.*?:\/\//g, '');
          const id = route.match(/\/([^\/]+)\/?$/)[1];
          console.log(id);
          Alert.alert('Deep Link called id:' + id);
        }
      };
      Linking.addEventListener('url', async data => {
        try {
          console.log(data);
          const url = new URL(data.url);
          let regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {},
            match;
          while ((match = regex.exec(data.url))) {
            params[match[1]] = match[2];
            console.log(match[1], match[2]);
          }
          const {code} = params;

          console.log('code', code);
          setLogin(true)
          const value = await AsyncStorage.getItem('codeVerifier');
          console.log(value);
          if (value !== null) {
            // await fetch('https://api.monerium.dev/auth/token', {
            //   method: 'POST',
            //   body: new URLSearchParams({
            //     client_id: 'ea68f375-0c7a-11ee-af2c-2a2ebdaf368e',
            //     code: code,
            //     redirect_uri: 'https://banksafe/1',
            //     grant_type: 'authorization_code',
            //     code_verifier: value,
            //   }),
            //   headers: new Headers({
            //     'content-type': 'application/x-www-form-urlencoded',
            //   }),
            // }).then(resp => {
            //   console.log(resp);
            // });
            // const client = new MoneriumClient();
            // await client.auth({
            //   client_id: 'ea68f375-0c7a-11ee-af2c-2a2ebdaf368e',
            //   code: code,
            //   code_verifier: client.codeVerifier,
            //   redirect_uri: 'https://banksafe/1',
            // });

            // // User is now authenticated, get authentication data

            // let auth1 = await client.getAuthContext();
            // console.log(auth1);
            // Alert.alert('code is ' + code);
          }
        } catch (err) {
          console.error(err);
        }
      });
    }, [login]);

    return {url, processing};
  };
  const {url: initialUrl, processing} = useInitialURL();

  // useEffect(() => {
  //   Linking.getInitialURL().then(url => {
  //     navigateHandler(url);
  //   });
  //   if (Platform.OS === 'ios') {
  //     Linking.addEventListener('url', handleOpenURL);
  //   }
  //   return () => {
  //     if (Platform.OS === 'ios') {
  //       Linking.removeEventListener('url', handleOpenURL);
  //     }
  //   };
  // }, []);

  const navigateHandler = async url => {
    if (url) {
      const {navigate} = navigation;
      const route = url.replace(/.*?:\/\//g, '');
      const id = route.match(/\/([^\/]+)\/?$/)[1];
      console.log(id);
      Alert.alert('Deep Link called id:' + id);
    }
  };
  return (
    <>
      <StatusBar
        backgroundColor="#F7F7F7"
        barStyle="dark-content" // Here is where you change the font-color
      />

      {!addMoneyActive && (
        <>
          <Header text={'Home'} />

          <View style={styles.container}>
            <View style={styles.cardBig}>
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 30,
                    fontFamily: 'Inter-SemiBold',
                  }}>
                  0
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 17,
                      fontFamily: 'Inter-SemiBold',
                    }}>
                    ,0 €
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#777F89',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                  }}>
                  Total Balance
                </Text>
              </View>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  display: 'flex',
                }}>
                <View
                  style={{
                    width: '53%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onPress={() => setAddMoneyActive(true)}>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#F0EDFC',
                        borderRadius: 20,
                      }}>
                      <Text style={{color: '#6C4EE3', fontSize: 20}}>+</Text>
                    </View>
                    <Text
                      style={{
                        color: '#6C4EE3',
                        fontFamily: 'Inter-Medium',
                        fontSize: 14,
                      }}>
                      Add Money
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    width: '45%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!isModalVisible)}>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        backgroundColor: '#F0EDFC',
                        borderRadius: 20,
                      }}>
                      <Text style={{color: '#6C4EE3', fontSize: 20}}>...</Text>
                    </View>
                    <Text
                      style={{
                        color: '#6C4EE3',
                        fontFamily: 'Inter-Medium',
                        fontSize: 14,
                      }}>
                      More
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', margin: 15, marginTop: 0}}>
              <View style={{}}>
                {!login && <ImageBackground
                  style={{
                    height: 220,
                    width: 330,
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                  }}
                  source={require('../assets/images/momentumConnect.png')}>
                  <TouchableOpacity
                    style={{paddingVertical: 10}}
                    onPress={async () => {
                      try {
                        const client = new MoneriumClient();
                        // Construct the authFlowUrl for your application and redirect your customer.
                        let authFlowUrl = client.getAuthFlowURI({
                          client_id: 'ea68f375-0c7a-11ee-af2c-2a2ebdaf368e',
                          redirect_uri: 'https://banksafe/1',
                          // immediately connect a wallet by adding these optional parameters:
                          address: '0x5451FcCB2F40556f225d410aBAB5bD1Ab9ff6b6f',
                          signature:
                            '0xVALID_SIGNATURE_2c23962f5a2f189b777b6ecc19a395f446c86aaf3b5d1dc0ba919ddb34372f4c9f0c8686cfc2e8266b3e4d8d1bc7bc67c34a11f9dfe8e691b',
                          chain: 'gnosis',
                          network: 'chiado',
                        });

                        const codeVerifier = client.codeVerifier;
                        setCodeVerifier(codeVerifier);
                        await AsyncStorage.setItem(
                          'codeVerifier',
                          codeVerifier,
                        );
                        console.log(authFlowUrl, codeVerifier);
                        Linking.openURL(authFlowUrl);
                        // const codeVerifier1 =
                        //   CryptoJS.lib.WordArray.random(64).toString();
                        // console.log(codeVerifier1);
                        // const codeChallenge = base64UrlEncode(
                        //   CryptoJS.SHA256(codeVerifier1),
                        // );
                        // console.log(codeChallenge);

                        // Linking.openURL(
                        //   'https://api.monerium.dev/auth?code_challenge=hiXNAJrP0JX7RAjgdaCbn_CNqxbix4JRJGSFadlxy5A&code_challenge_method=S256&response_type=code&client_id=41836f77-0a63-11ee-af2c-2a2ebdaf368e',
                        // );
                      } catch (err) {
                        console.error(err);
                      }
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        backgroundColor: '#006DDA',
                        padding: 11,
                        borderRadius: 20,
                        fontFamily: 'Inter-Regular',
                        fontSize: 14,
                        textAlign: 'center',
                        marginHorizontal: 20,
                      }}>
                      Log in to Monerium
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>}
              </View>
            </View>
            {/* <View style={{flexDirection: 'row', margin: 15, marginTop: 0}}>
              <View style={styles.cardSmall}>
                <View>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 30,
                      fontFamily: 'Inter-SemiBold',
                    }}>
                    230
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 17,
                        fontFamily: 'Inter-SemiBold',
                      }}>
                      ,39 €
                    </Text>
                  </Text>

                  <Text
                    style={{
                      color: '#777F89',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                    }}>
                    Total Balance
                  </Text>
                </View>
              </View>
              <View style={styles.cardSmall}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={styles.logo}
                      source={require('../assets/images/card1.png')}
                    />
                    <Image
                      style={styles.logo}
                      source={require('../assets/images/card2.png')}
                    />
                    <Image
                      style={styles.logo}
                      source={require('../assets/images/card3.png')}
                    />
                  </View>
                  <Text
                    style={{
                      color: '#777F89',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                      marginTop: 10,
                    }}>
                    Cards
                  </Text>
                </View>
              </View>
            </View> */}
            {/* <View style={{flexDirection: 'row', margin: 15, marginTop: 0}}>
              <View style={styles.cardSmall}>
                <View>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 30,
                      fontFamily: 'Inter-SemiBold',
                    }}>
                    507
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 17,
                        fontFamily: 'Inter-SemiBold',
                      }}>
                      ,30 €
                    </Text>
                  </Text>

                  <Text
                    style={{
                      color: '#777F89',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                    }}>
                    Personal
                  </Text>
                </View>
              </View>
              <View style={styles.cardSmall}>
                <View>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 30,
                      fontFamily: 'Inter-SemiBold',
                    }}>
                    12
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 17,
                        fontFamily: 'Inter-SemiBold',
                      }}>
                      %
                    </Text>
                  </Text>

                  <Text
                    style={{
                      color: '#777F89',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                    }}>
                    Savings
                  </Text>
                  <ProgressBar
                    progress={0.3}
                    width={130}
                    height={5}
                    unfilledColor={'#F0EDFC'}
                    color={'#6C4EE3'}
                    borderColor={'transparent'}
                  />
                </View>
              </View>
            </View> */}
            {/* <View style={styles.cardBig}>
              <LineChart
                data={data}
                width={screenWidth - 60}
                height={160}
                withInnerLines={false}
                withOuterLines={false}
                chartConfig={chartConfig}
              />
            </View> */}
          </View>
        </>
      )}

      {addMoneyActive && <AMComponent setAddMoneyActive={setAddMoneyActive} />}

      {/* footer */}
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
        <View>
          <Image
            style={{height: 40, width: 35}}
            source={require('../assets/images/home_active.png')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
          <View>
            <Image
              style={{height: 40, width: 50}}
              source={require('../assets/images/transfer.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Hub')}>
          <View>
            <Image
              style={{height: 40, width: 25}}
              source={require('../assets/images/hub.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <AddMoreModal
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
});
