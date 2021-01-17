import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './app/Common/AppButtons/PrimaryButton';
import AppText from './app/Common/AppText/AppText';
import ProductCard from './app/Components/ProductCard/ProductCard';
import ProductScreen from './app/Screen/ProductScreen';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    // </View>
    // <ProductScreen />
    <ProductScreen />

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
