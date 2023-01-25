import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Dashboard from './components/basic/Dashboard'
import FontAwsome from '@expo/vector-icons/FontAwesome'

export default function App() {
  //Sidebar config
  const[header,setHeader]=useState(true);


  //Basic Dashboard config
  const[basicDashboard,setBasicDashboard]=useState(true);
  
  return (
   <View  >
    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#1e8ee1" translucent={true} />
    {header&&(
        <View  style={{
          width:'100%',
          display:'flex',
          flexDirection:'row',
          height:60,        
          backgroundColor:'#1e8ee1',
          marginTop:'5.8%',
          textAlign:'center',
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
        }} >
          <View style={{
            width:'5%',
            backgroundColor:'white',
            height:57,
          }} >
            <FontAwsome name='bars' style={{
              marginTop:20,
              marginLeft:5,
            }} size={20} />
          </View>
           <View style={{
            width:'80%',
            height:57,
           }} >
            <Image source={require('./assets/name_alatpre.png')} style={{
              width:'100%',
              height:57,
              padding:5,
            }} />
           </View>
           <View style={{
            width:'15%',
            backgroundColor:'#1e8ee1',
            height:57,
          }} >
            <Image source={require('./assets/alatpres_logo.png')} 
            style={{
              width:'100%',
              height:57
            }} />
          </View>
        </View>)}
    {basicDashboard&&<Dashboard/>}

   </View> 
   
  );
}


