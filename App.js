import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image,Switch, TouchableOpacity } from 'react-native';
import Dashboard from './components/basic/Dashboard'
import Registration from "./components/basic/Registration"
import Searchbar from './components/Searchbar'
import Infoslider from './components/basic/pages/Infoslider';
import UpdatedDashboard from './components/basic/UpdatedDashboard';

export default function App() {
  //Sidebar config
  const[sidebar,renderSidebar]=useState(false) 
  //headbar config
  const[header,setHeader]=useState(true);
 
  const[acessLocation,setAccessLocation]=useState();
  //Basic Dashboard config
  const[basicDashboard,setBasicDashboard]=useState(false);//change to true later
  /*search area test */
  const[showSearch,setShowSearch]=useState(false)//default false
  //registration
  const[registrationPage,showRegistrationPage]=useState(false)
  //intro slider
  const[intro,setIntro]=useState(false)

  const[updatedDash,setUpdatedDash]=useState(true)
  
  return (
   <View  >
   
    
    {registrationPage && <Registration showRegistrationPage={showRegistrationPage} setUpdatedDash={setUpdatedDash} setIntro={setIntro} />}

    {basicDashboard&&<Dashboard setBasicDashboard={setBasicDashboard} setAccessLocation={setAccessLocation}  showRegistrationPage={showRegistrationPage} />}
   
    {showSearch&&<Searchbar/>}

    {intro && <Infoslider setIntro={setIntro} showRegistrationPage={showRegistrationPage} />}

    {updatedDash&&<UpdatedDashboard showRegistrationPage={showRegistrationPage} setUpdatedDash={setUpdatedDash} />}
   
   </View> 
   
  );
}


