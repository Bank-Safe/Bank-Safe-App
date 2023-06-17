/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './shim.js'
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import 'react-native-url-polyfill';

AppRegistry.registerComponent(appName, () => App);
