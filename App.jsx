import React, {useEffect} from 'react';
import {Linking, Platform, StyleSheet, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Transfer from './src/screens/Transfer';
import Home from './src/screens/Home';
import Hub from './src/screens/Hub';
import OnBoard from './src/screens/OnBoard';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export const cryp = require('crypto');

function App() {
  
  return (
    <SafeAreaProvider>
      <View style={{flex: 1, backgroundColor: '#050203'}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              // ...TransitionPresets.SlideFromRightIOS,
              transitionSpec: {
                open: config,
                close: config,
              },
              cardStyleInterpolator: ({current: {progress}}) => {
                return {
                  cardStyle: {
                    opacity: progress,
                  },
                };
              },
            }}>
            <Stack.Screen
              name="Home"
              options={{headerShown: false}}
              component={Home}
            />
            <Stack.Screen
              name="OnBoard"
              options={{headerShown: false}}
              component={OnBoard}
            />

            <Stack.Screen
              name="Transfer"
              options={{headerShown: false}}
              component={Transfer}
            />

            <Stack.Screen
              name="Hub"
              options={{headerShown: false}}
              component={Hub}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
