import React from 'react';
import { SafeAreaView } from 'react-native';
import { Stack } from 'expo-router'; // Replace with your navigation library

import { COLORS } from '../constants'; // Import your color constants or replace with your own logic

const SafeAreaDash = ({ children }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerShadowVisible: false,
      }}
    />
      {children}
    
  </SafeAreaView>
);

export default SafeAreaDash;
