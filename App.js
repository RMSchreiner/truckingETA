import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';;
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import EtaChart from './src/ETAChart'
import MyComponent from './src/Appbar';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'blue',
    accent: 'purple,'
  }
}

const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];


export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <EtaChart/>
    <View style={styles.container}>
      <Text>This is a Trucking App</Text>
      <MyComponent/>
      
    </View>
   
   
    
    </PaperProvider>
  );
}

AppRegistry.registerComponent("trucking_eta", () => Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
