import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/Navigation/TabNavigation';



export default function App() {
  return (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
