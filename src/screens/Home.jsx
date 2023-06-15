import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import {Icon} from '@rneui/base';
import ProgressBar from 'react-native-progress/Bar';
import {LineChart} from 'react-native-chart-kit';
import BottomModal from '../components/AddMoreModal';
import AddMoreModal from '../components/AddMoreModal';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content" // Here is where you change the font-color
      />

      <Header />

      <View style={styles.container}>
        <View style={styles.cardBig}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 30,
                fontFamily: 'Inter-SemiBold',
              }}>
              1.337
              <Text
                style={{
                  color: '#000000',
                  fontSize: 17,
                  fontFamily: 'Inter-SemiBold',
                }}>
                ,69 €
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
        </View>
        <View style={{flexDirection: 'row', margin: 15, marginTop: 0}}>
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
        </View>
        <View style={styles.cardBig}>
          <LineChart
            data={data}
            width={screenWidth - 60}
            height={160}
            withInnerLines={false}
            withOuterLines={false}
            chartConfig={chartConfig}
          />
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
