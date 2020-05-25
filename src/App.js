/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Router from './config/router';


export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      )
  }
}

/**
 * navbar
 * <bottom nav>
 *  <bttom screen>
 * </bottom nav
 */