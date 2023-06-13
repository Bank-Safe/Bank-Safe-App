import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import {Icon} from '@rneui/base';

export default function Onboarding({navigation}) {
  return (
    <>
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
                width: '50%',
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
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F7F7F7',
  },
  text: {
    fontFamily: 'Inter-Bold',
  },
  cardBig: {
    backgroundColor: 'white',
    padding: 17,
    margin: 15,
    borderRadius: 16,
    marginTop: 5,
    flexDirection: 'row',
  },
  cardSmall: {
    backgroundColor: 'white',
    padding: 17,
    marginRight: 15,
    borderRadius: 16,
    marginTop: 0,
    flexDirection: 'row',
    width: '48%',
  },
});
