/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeModules } from 'react-native';
import { RNHyperTrack as RNHyperTrackImport } from 'react-native-hypertrack';

if (NativeModules.RNHyperTrack != undefined) {
  var RNHyperTrack = NativeModules.RNHyperTrack;
} else {
  var RNHyperTrack = RNHyperTrackImport;
};

export default class App extends Component {
  constructor(props) {
    super(props);
    RNHyperTrack.initialize('pk_test_f898ad1a09558cd87a86c0ee5bf5df68f0ee8287');
    RNHyperTrack.requestAlwaysLocationAuthorization('Location', 'Asking for Location Permission');
    // RNHyperTrack.requestAlwaysLocationAuthorization(title, message);
    if (Platform.os === 'ios') {
      RNHyperTrack.requestMotionAuthorization();
    };
  }

  localAuthorization() {
    RNHyperTrack.locationAuthorizationStatus().then((status) => {
      // Handle locationAuthorizationStatus API promise here
      console.log('locationAuthorizationStatus: ', status);
    });
  }

  checkLocationService() {
    RNHyperTrack.locationServicesEnabled().then(
      (callback) => {
        // Handle locationServicesEnabled API callback here
        console.log('locationServicesEnabled: ', callback);
      }
    );
  }

  render() {
    this.checkLocationService();
    this.localAuthorization();
    return (
      <Text>hihi</Text>
    );
  }
}
