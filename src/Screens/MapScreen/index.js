/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapViewControl from '../../components/MapViewControl';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapViewControl />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
