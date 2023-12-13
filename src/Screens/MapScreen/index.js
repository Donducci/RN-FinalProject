/* eslint-disable no-undef */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text index />
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
