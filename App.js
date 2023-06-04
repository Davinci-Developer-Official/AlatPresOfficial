import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
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
  const[registrationPage,showRegistrationPage]=useState(true)
  //intro slider
  const[intro,setIntro]=useState(false)
  const [UserCredentials,setUserCredentials]=useState([])
  const[updatedDash,setUpdatedDash]=useState(false)

  //const[userRegistered,setUserRegistered]=useState(true)
  const[]=useState()


 
  return (
   <View  >
   
    
    {registrationPage && <Registration UserCredentials={UserCredentials}  setUserCredentials={setUserCredentials} showRegistrationPage={showRegistrationPage} setUpdatedDash={setUpdatedDash} setIntro={setIntro} />}

    {basicDashboard&&<Dashboard setBasicDashboard={setBasicDashboard} setAccessLocation={setAccessLocation}  showRegistrationPage={showRegistrationPage} />}
   
    {showSearch&&<Searchbar/>}

    {intro && <Infoslider setIntro={setIntro} showRegistrationPage={showRegistrationPage} />}

    {updatedDash&&<UpdatedDashboard  UserCredentials={UserCredentials} showRegistrationPage={showRegistrationPage} setUpdatedDash={setUpdatedDash} />}
   
   </View> 
   
  );
}


