import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image,Switch, TouchableOpacity } from 'react-native';
import Dashboard from './components/basic/Dashboard'
import Registration from "./components/basic/Registration"

export default function App() {
  //Sidebar config
  const[sidebar,renderSidebar]=useState(false) 
  //headbar config
  const[header,setHeader]=useState(true);
 
  const[acessLocation,setAccessLocation]=useState();
  //Basic Dashboard config
  const[basicDashboard,setBasicDashboard]=useState(true);//xhange to true later

  //registration
  const[registrationPage,showRegistrationPage]=useState(false)
  
  return (
   <View  >
   
    
    {registrationPage && <Registration showRegistrationPage={showRegistrationPage} setBasicDashboard={setBasicDashboard} />}

    {basicDashboard&&<Dashboard setBasicDashboard={setBasicDashboard} setAccessLocation={setAccessLocation}  showRegistrationPage={showRegistrationPage} />}
   
    
   
   </View> 
   
  );
}


