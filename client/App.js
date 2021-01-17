import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './app/Components/AppButtons/PrimaryButton';


export default function App() {
  return (
    <View style={styles.container}>

      <Text>Hello</Text>
     <PrimaryButton inverted title='Hello' />
      <StatusBar style="auto" />
    </View>

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
