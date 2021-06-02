import React, {useEffect,useState,useRef} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import Constants from 'expo-constants';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet= new BootstrapStyleSheet();
const {s , c} = bootstrapStyleSheet;




const EtaChart = () =>{
  return(
   <View style = {styles.container}>
     <Text>
     <View style={[s.body]}>
     <Text style={[s.text, s.textPrimary]}> Hello World</Text>
     </View>
     </Text>
     <View style={[s.progress]}>
     <View style = {[s.progressBar, s.width = "15%", s.ariaValuenow = "0"]}><Text>Hello Hello</Text></View>
     </View>

     <View
      style={{
        flexDirection: "row",
        height: 25,
        padding: 2
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    
    </View>

    <View
      style={{
        flexDirection: "row",
        height: 25,
        padding: 2
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <View style={{backgroundColor: "purple", flex: 0.2}}/>
      
    
    </View>

     <View style = {styles.progressBar}>
     <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width: "50%"}}/> 
     </View>
     <Text>50%</Text>
   </View>
   );
};
export default EtaChart;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  progressBar: {
    flexDirection:'row',
    height: 20,
    width: '100%',
    backgroundColor: "white",
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  }
});

