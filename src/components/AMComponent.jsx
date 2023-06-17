import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AMHeader from '../components/AMHeader';
import Clipboard from '@react-native-community/clipboard';

export default function AMComponent({setAddMoneyActive}) {
  return (
    <>
      <AMHeader setAddMoneyActive={setAddMoneyActive} />

      <View style={{flex: 10, paddingBottom: 20}}>
        <ScrollView>
          <Text style={{textAlign: 'center',color:"#000000"}}>
            Use these details to{'\n'} transfer funds from your Bank account.
          </Text>
          <View style={styles.cardBig}>
            <View style={{width: '100%'}}>
              <View>
                <Text
                  style={{
                    color: '#777F89',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                    marginVertical: 5,
                  }}>
                  Beneficiary
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
                      color: '#6C4EE3',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                    }}>
                    Hemang Vora
                  </Text>
                  <TouchableOpacity
                    onPress={() => Clipboard.setString('Fname Lname')}>
                    <Image
                      style={{height: 15, width: 13}}
                      source={require('../assets/images/copy.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* ROW2 */}
              <View style={{marginVertical: 10}}>
                <Text
                  style={{
                    color: '#777F89',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                    marginVertical: 5,
                  }}>
                  IBAN
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
                      color: '#6C4EE3',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                    }}>
                    ES33 1237 1347 1337 1337 1337
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      Clipboard.setString('ES33 1337 1337 1337 1337 1337')
                    }>
                    <Image
                      style={{height: 15, width: 13}}
                      source={require('../assets/images/copy.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* ROW3 */}
              <View style={{}}>
                <Text
                  style={{
                    color: '#777F89',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                    marginVertical: 5,
                  }}>
                  BIC
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
                      color: '#6C4EE3',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                    }}>
                    EAPFESM2XXX
                  </Text>
                  <TouchableOpacity
                    onPress={() => Clipboard.setString('EAPFESM2XXX')}>
                    <Image
                      style={{height: 15, width: 13}}
                      source={require('../assets/images/copy.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Text style={{textAlign: 'center',color:"#000000"}}>
            Use this wallet address to receive funds {'\n'}
            from a Gnosis Chain wallet.
            <Text
              style={{
                color: '#6C4EE3',
              }}>
              {' '}
              Learn more.
            </Text>
          </Text>
          <View style={styles.cardBig}>
            <View style={{width: '100%'}}>
              <View>
                <Text
                  style={{
                    color: '#777F89',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                    marginVertical: 5,
                  }}>
                  Wallet Address
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
                      color: '#6C4EE3',
                      fontSize: 10,
                      fontFamily: 'Inter-Regular',
                    }}>
                    0x5451FcCB2F40556f225d410aBAB5bD1Ab9ff6b6f
                  </Text>
                  <TouchableOpacity
                    onPress={() => Clipboard.setString('0x123..ABC')}>
                    <Image
                      style={{height: 15, width: 13}}
                      source={require('../assets/images/copy.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* ROW2 */}
              <View style={{marginVertical: 10}}>
                <Text
                  style={{
                    color: '#777F89',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                    marginVertical: 5,
                  }}>
                  Blockchain
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
                      color: '#6C4EE3',
                      fontSize: 14,
                      fontFamily: 'Inter-Regular',
                    }}>
                    Gnosis Chain
                  </Text>
                  <TouchableOpacity
                    onPress={() => Clipboard.setString('Gnosis Chain')}>
                    <Image
                      style={{height: 15, width: 13}}
                      source={require('../assets/images/copy.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardBig}>
            <View style={{width: '100%'}}>
              <View>
                <ScrollView horizontal={true}>
                  <FlatList
                    data={[
                      {
                        key: 'Your money is protected by the Islandic\n Electronic Money Act.',
                        img: require('../assets/images/schield.png'),
                        width: {height: 30, width: 24},
                      },
                      {
                        key: 'Use these details to receive transfers \nfrom domestric and cross-border transfers.',
                        img: require('../assets/images/bank.png'),
                        width: {height: 30, width: 24},
                      },
                      {
                        key: 'Domestic transfers process within 1 to 5 \ndays, SWIFT may take 3 to 5 days.',
                        img: require('../assets/images/clock.png'),
                        width: {height: 24, width: 24},
                      },
                      {
                        key: 'Intermediary or sender’s bank may \ncharge you for international payments.',
                        img: require('../assets/images/card_black.png'),
                        width: {height: 20, width: 25},
                      },
                    ]}
                    renderItem={({item}) => (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingVertical: 10,
                        }}>
                        <Image style={item.width} source={item.img} />

                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 13,
                            fontFamily: 'Inter-Regular',
                            textAlign: 'justify',
                            marginLeft: 15,
                          }}>
                          {item.key}
                        </Text>
                      </View>
                    )}
                  />
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
