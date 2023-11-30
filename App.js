import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Navigator from './src/Navigator/index';

function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
