import { useEffect, useState } from "react"
import{
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    Platform,
    Linking,
    FlatList,
    Switch
}from "react-native"
import Checkbox from 'expo-checkbox';
import email from "react-native-email"
import * as SMS from 'expo-sms';
import { TOA } from "../../mockData/metrics";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import countries from '../../mockData/CountryCodes.json'
import Infoslider from "./pages/Infoslider";

import axios from "axios";
import env_variables from "../../env";
import { Terms } from "../../mockData/TermsOfAgreement";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from "react";


export const UserContext = createContext();

export default function RegistrationOptions({userRegistered,setUserCredentials,showRegistrationPage,setUpdatedDash,setIntro}){    
    
    //data
    const[agreed,setAgreed]=useState(false)
    const[isToa,setIsToa]=useState(false)
    const[termsOfAgreement,setTermsOfAgreement]=useState(false);
    const[identity,setIdentity]=useState(true)
    const[termsArea,setTermArea]=useState(true)
    const[notBot,setNotBot]=useState(false)
    const[subsribe,setSubscribe]=useState(false)
    const[showTerms,setShowTerms]=useState(false)
    //proceed
    const [quickAccess,setQuickAccess]=useState(true)
    const[Username,setUsername]=useState(null)
    const[Password,setPassword]=useState(null)
    const[confirmpassword,setconfirmpass]=useState(null)
    const[finalPassword,setFinalPassword]=useState(null)
    const[storedUsername,setStoredUsername]=useState(null)
    const[storedPassword,setStoredPassword]=useState(null)
    const[usernameExists,setusernameExists]=useState(false)
    const[registering,setRegistering]=useState(false)
    const[login,setLogin]=useState(true)
    const[registrationRequest,setRegistrationRequest]=useState(false)
    const[incorrectUsername,setIncorrectUsername]=useState(false)
    const[incorrectPassword,setIncorrectPassword]=useState(false)
    const[welcomeMsg,setWelcomeMsg]=useState(false)
    const[guestMode,setQuestMode]=useState(false)
    const[existingUser,setExistingUser]=useState(null)
    const [isValid, setValid] = useState(false);
    const [isValidconf, setValidconf] = useState(false);
    const[matchingPass,setMatchingPass]=useState(true)
    const[proceedBtn,setProceedBtn]=useState(false)
     // Regular expression pattern for password
    const pattern = /^(?=.*[A-Z])[A-Za-z\d]{8,}$/;
    const[fetchedUsers,setFetchedUsers]=useState([]);
    const[isEnabled,setIsEnabled]=useState(false)
    const [secure, setSecure]=useState(true)
    const[showpass,setShowPass]=useState(false)
    const[confirmAgreement,setConfigureAgreement]=useState(false)
    const[triggerAgreement,setTriggerAgreement]=useState(false)
    const[nullName,setNullName]=useState(false)
    const[loginUsername,setLoginUsername]=useState(null)
    const[loginPassword,setLoginPassword]=useState(null)
    const[doesntExist,setDoesntExist]=useState(false)
    const[showLogPass,setShowLogPass]=useState(false)

    function checkPass(){
        if(showpass){
            setSecure(true)
        }else{
            setSecure(false)
        }
    }
    function showPassLog(){
        if(showLogPass){
            setSecure(true)
        }else{
            setSecure(false)
        }
    }
    function fetchUsers(){
        axios.get(env_variables.Access_Api)
        .then(res=>{
            const data =res.data;
            const arr = [...data];
            setFetchedUsers(arr);
            
            
        })
        
    }
    function checkStatus(){
       
        if(isEnabled == false){
            setRegistering(true )
            setLogin(false)
            //setTermsOfAgreement(true)
            //setQuickAccess(true )
        }else if(isEnabled == true) {
            setLogin(true)
            setRegistering(false)
        }
    }

    
   
    function Register(){
        //alert(JSON.stringify(fetchedUsers));
        const profArr =[...fetchedUsers]  
        const findArr = profArr.find(user=>user.username == Username)
       // alert(JSON.stringify(findArr))
        if(findArr){
           setusernameExists(true)
           setExistingUser(JSON.stringify(findArr.username));
           setUsername(null)
        }
                  
        if(Password !== confirmpassword ){
            setMatchingPass(false)
        }else{
            setFinalPassword(confirmpassword)
            
            setMatchingPass(true)               
        }

        if(Username == null){
            setNullName(true)
            setExistingUser(true)
        }
        if(Username !== null && finalPassword !== null && !findArr ){
         const data= {
            username:Username,
            password:Password
         }
           axios.post(env_variables.Access_Api,data)
           .then(res=>console.log(res.data))
           setUserCredentials(data)
            showRegistrationPage(false)
            setUpdatedDash(true)
            
        }     
    }

    

    function Login(){
        //alert(JSON.stringify(fetchedUsers));
        const profArr =[...fetchedUsers]  
        const findArr = profArr.find(user=>user.username == loginUsername)
        const findPass = profArr.find(pass=>pass.password == loginPassword)
       // alert(JSON.stringify(findArr))
        if(findArr){
           setWelcomeMsg(true)
           setExistingUser(JSON.stringify(findArr.username));
           
        }else{
            setDoesntExist(true)
            //setLoginUsername(null)
        }
       if(!findPass){
            setIncorrectPassword(true)
            
        }
        if(loginUsername !== null && loginPassword !== null && findArr && findPass ){
            console.log(`information is correct`)
            showRegistrationPage(false)
            setUpdatedDash(true)
        }
    }

    function conditions(){
       setTermsOfAgreement(false)
       if(isToa){
        setAgreed(true)
       }
    }
    useEffect(()=>{    
        fetchUsers()
        if(agreed){
            setProceedBtn(true)
            AsyncStorage.setItem(Username,"")
            //AsyncStorage.setItem(Password,"")
        }
     },[])

    return(
        <SafeAreaView style={{
            backgroundColor:'white',
            height:"100%",
            
        }} >
       
        {identity&&(
            <View style={{
                display:'flex',
                flexDirection:"row",
                marginTop:"12%",
                marginBottom:10,
                width:"99%",
                marginLeft:".5%",
                backgroundColor:"white",
                height:50,

                borderStyle:"solid",
                borderBottomWidth:1.0,
                borderBottomColor:"#1e8ee1",
                justifyContent:"space-between"
            }} >
                <Image source={require('../../assets/alatpres_logo.png')} style={{
                    height:50,
                    width:50,
                    marginLeft:"1%",
                    borderRadius:60,
                    borderStyle:"solid",
                    borderWidth:1.0,
                   
                   
                }} />
                <Text style={{
                    color:"#1e8ee1",
                    marginTop:20,
                    marginLeft:20,
                }} >A Reliable Public Response Partner</Text>

                <FontAwsome name="info" size={30} style={{
                    marginRight:5,
                    marginTop:15,
                    color:"#1e8ee1",
                }} onPress={()=>{
                    showRegistrationPage(false)
                    setIntro(true)
                }} />
               
            </View>
        )}
        
   

        {quickAccess&&(
            <View  style={{
                    marginTop:"30%",
                   
                    
                    width:"90%",
                    marginLeft:"5%",
                    textAlign:'center',
                    color:'white',
            }} >
            <View>
                
                <View style={{
                    width:100,
                    height:50,
                    display:"flex",
                    flexDirection:"row",
                }}>
                <Text style={{
                    paddingTop:15,
                }}>Login</Text>
                <Switch style={{
                    paddingTop:15,
                }}
                trackColor={{false:'#767577', true:"#81b0ff"}} 
                onValueChange={(value)=>{
                    setIsEnabled(value)
                    checkStatus()
                }}
                value={isEnabled}
                thumbColor={isEnabled?"#f5ddb":"#f4f3f7"}
                />
                <Text style={{
                    paddingTop:15,
                }}>register</Text>
                </View>
               
            </View>
                {registering  &&(<View>
                    <Text style={{textAlign:"center"}} >New Account</Text>
                    {existingUser?(<Text style={{color:"red",fontSize:13}} > username:{existingUser} already taken </Text>):""}
                    {nullName&&(<Text>username cannot be null</Text>)}
                    
                    <TextInput placeholder="username"  style={{
                    borderBottomColor:"#1e8ee1",
                    borderBottomWidth:1,
                    }} 
                    value={Username}
                    onChangeText={value=>{
                        setUsername(value)
                        setNullName(false)
                    }} />
                
                <View style={{
                    width:100,
                    height:50,
                    display:"flex",
                    flexDirection:"row",
                }}>
                
                <Switch style={{
                    paddingTop:15,
                }}
                trackColor={{false:'#767577', true:"#81b0ff"}} 
                onValueChange={(value)=>{
                    setShowPass(value)
                    checkPass()
                }}
                value={showpass}
                thumbColor={showpass?"#f5ddb":"#f4f3f7"}
                />
                <Text style={{
                    paddingTop:15,
                }}>show password</Text>
                </View>

                <TextInput placeholder="password"  style={{
                    borderBottomColor:"#1e8ee1",
                    borderBottomWidth:1,
                    marginTop:5,
                    
                }} secureTextEntry={secure}
                 onChangeText={value=>{
                    setPassword(value)
                    setValid(pattern.test(value));
                    }} />
                 {!isValid && (
                    <Text style={{ color: 'green' }}>
                        Password must have 8 characters or more, include at least one capital letter.
                    </Text>
                  )}
                <TextInput placeholder="confirm password"  style={{
                    borderBottomColor:"#1e8ee1",
                    borderBottomWidth:1,
                    marginTop:5,
                    
                }} secureTextEntry={secure}
                 onChangeText={value=>{
                    setconfirmpass(value)
                    setValidconf(pattern.test(value));
                    if(isValidconf){
                       setTriggerAgreement(true)
                       setShowTerms(true)
                    }
                    
                    }} />
                 {!isValidconf && (
                     <Text style={{ color: 'green' }}>
                        Password must have 8 characters or more, include at least one capital letter.
                     </Text>
                   )}
                 {!matchingPass?<Text style={{ color: 'red',marginTop:10, }} >Passwords do not match</Text> :""}
                
                {triggerAgreement&&(<TouchableOpacity style={{
                    marginTop:10,
                }} onPress={()=>{
                    setTermsOfAgreement(true)
                }} >
                    <Text style={{
                        color:"#1e8ee1"
                    }}>Terms Of Agreement</Text>
                </TouchableOpacity>)}

                {showTerms&&(<View style={{
                display:"flex",
                flexDirection:"row",
                marginTop:10,}} >
                <Checkbox  style={{
                    marginLeft:10,
                }} value={agreed} onValueChange={()=>{
                    setAgreed(true)
                    setProceedBtn(true)
                    setIsToa(true)


                }} />
                <Text style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }} >I have read the Agree Terms Of Agreement</Text>
            </View>)}
                
                { proceedBtn  &&(<TouchableOpacity  style={{
                    marginLeft:"80%",
                    backgroundColor:"#1e8ee1",
                    marginTop:10,
                    marginBottom:5,
                    marginRight:10,
                    borderRadius:5,

                }} onPress={()=>{
                    Register()
                    
                }} >
                    <Text style={{
                        paddingTop:5,
                        paddingBottom:5,
                        paddingLeft:10,
                    }} >Sign Up</Text>
                </TouchableOpacity>)}
                </View>)}
                {login&&(<View>
                    {doesntExist&&(<Text>User doesn't exist place sign up to create user or use correct username</Text>)}
                    <TextInput placeholder="username"  style={{
                    borderBottomColor:"#1e8ee1",
                    borderBottomWidth:1,
                    
                }} onChangeText={value=>{
                        setLoginUsername(value)
                        setNullName(false)
                    }} />
                <View style={{
                    width:100,
                    height:50,
                    display:"flex",
                    flexDirection:"row",
                }}>
                
                <Switch style={{
                    paddingTop:15,
                }}
                trackColor={{false:'#767577', true:"#81b0ff"}} 
                onValueChange={(value)=>{
                    setShowLogPass(value)
                    showPassLog()
                    
                }}
                value={showLogPass}
                thumbColor={showpass?"#f5ddb":"#f4f3f7"}
                />
                <Text style={{
                    paddingTop:15,
                }}>show password</Text>
                </View>
                {incorrectPassword&&(<Text>incorrect password</Text>)}
                <TextInput placeholder="password"  style={{
                    borderBottomColor:"#1e8ee1",
                    borderBottomWidth:1,
                    marginTop:5,
                    
                }} secureTextEntry={secure}
                 onChangeText={value=>{
                    setLoginPassword(value)
                    setValid(pattern.test(value));
                    }} />
                {welcomeMsg&&(<Text>welcome {existingUser}</Text>)}
                <TouchableOpacity style={{
                    marginLeft:"80%",
                    backgroundColor:"#1e8ee1",
                    marginTop:10,
                    marginBottom:5,
                    marginRight:10,
                    borderRadius:5,

                }} onPress={()=>{
                    Login()
                }} >
                    <Text style={{
                        paddingTop:5,
                        paddingBottom:5,
                        paddingLeft:10,
                    }} >Sign In</Text>
                </TouchableOpacity>
                </View>)}
            </View>
        )}

        {termsOfAgreement&&(
        <View style={{
            backgroundColor:"white",
            borderColor:"#1e8ee1",
            borderStyle:"solid",
            borderWidth:1.5,
            width:"98%",
            marginLeft:"1%",
            position:"absolute",
            height:"95%",
            marginTop:5,
        }} >
            <Text style={{
                textAlign:"center",
                color:"#1e8ee1"
            }}>Term Of Agreement</Text>
            {termsArea&&(
                <ScrollView style={{
                    backgroundColor:"white",
                    borderColor:"#1e8ee1",
                    borderStyle:"solid",
                    borderWidth:1.5,
                    
                   
                    height:"65%",
                }} >
                    <Text style={{
                        padding:"5%",
                        
                    }} >{Terms}</Text>
                </ScrollView>
            )}
            <View style={{
                display:"flex",
                flexDirection:"row",
                marginTop:10,

            }} >
                <Checkbox  style={{
                    marginLeft:10,
                }} value={isToa} onValueChange={()=>{
                    setIsToa(true)
                    setConfigureAgreement(true)
                    }} />
                <Text style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }} >Agree Terms Of Agreement</Text>
            </View>
            <View style={{
                display:"flex",
                flexDirection:"row",
                marginTop:10,

            }} >
                <Checkbox  style={{
                    marginLeft:10,
                }} value={notBot} onValueChange={()=>setNotBot(true)} />
                <Text style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }} >Confirm you are not a robot</Text>
            </View>
            {confirmAgreement &&(<TouchableOpacity style={{
                            backgroundColor:"#1e8ee1",
                            marginBottom:5,
                            height:40,
                            width:80,
                            marginLeft:"75%",
                            borderRadius:20,
                            
            }} onPress={conditions} >
                <Text style={{
                    paddingTop:10,
                    paddingLeft:15,
               }} >Confirm</Text></TouchableOpacity>)}
        </View>)}
      
        
        </SafeAreaView>
    )
}