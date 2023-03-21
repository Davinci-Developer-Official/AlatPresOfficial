import { useEffect, useRef, useState } from "react";
import { TouchableOpacity,View,Text,Image,ScrollView, Switch } from "react-native";
import FontAwsome  from '@expo/vector-icons/FontAwesome'

import AsyncStorage from "@react-native-async-storage/async-storage";


export default function({renderSidebar}){
    const[profile,showProfile]=useState(false);
    const[faqs,showFaqs]=useState(false);
    const[alatPresWeb,showAlatPresWeb]=useState(false);
    const[serviceIntegration,showServiceIntegration]=useState(false);
    const[settings,showSettings]=useState(false);
    const[fundraiser,showFundraiser]=useState(false);
    const [refer,showreferal]=useState(false);
    const[AlatPresCommunity,showAlatPresCommunity]=useState(false);
    
    const[switchDark,setSwitchDark]=useState(false)
    const[items,setItems]=useState([])
    
    function triggerDarkmode(){
        setSwitchDark(previousState=>!previousState)
        
    }
    useEffect(()=>{
        AsyncStorage.setItem("drk",JSON.stringify(switchDark))
        
    })
    return(
        <ScrollView style={{
        position:'absolute',
        height:"100%",
        width:'95%',
        backgroundColor:'white',
        borderStyle:'solid',
        borderColor:'#1e8ee1',
        borderWidth:1.5,
        zIndex:100
    }} >
       <View style={{
        marginTop:-5,
        backgroundColor:'white',
        height:50,
        borderStyle:'solid',
        borderColor:'#1e8ee1',
        borderWidth:1.5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
        
       }}>
        <View style={{
            display:"flex",
            flexDirection:"row",
            width:"50%"
        }} >
            <Switch  value={switchDark} onValueChange={triggerDarkmode} />
            <Text style={{
               marginTop:13,
            }} >enable Darkmode</Text>
        </View>
       <View style={{
        backgroundColor:"red",
        height:'80%',
        width:"50%",
        marginTop:"2%"
       }} >
        <FontAwsome name='inbox' size={20} />
       </View>
       </View>
       <View style={{
        width:'100%',
        backgroundColor:'white',
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:1.5,
       }} >
        <Image source={require('../../assets/prof3.png')} style={{
            width:'99.7%',
            height:342,
        }} />
        <Text style={{
            textAlign:'center',
            position:'absolute',
            marginTop:292,
            marginLeft:'25%',
            fontSize:20,
            fontWeight:'bold',
            backgroundColor:"white",
            height:50,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            paddingTop:15
        }} >Edit Profile  <FontAwsome name='pencil' size={20} /> </Text>
       </View>

       <TouchableOpacity style={{
        backgroundColor:'#1e8ee1',
        width:'94%',
        marginLeft:'3%',
        height:50,
        marginTop:5,
        borderRadius:20,
        display:'flex',
        flexDirection:'column'
       }}>
        <Text style={{
            textAlign:'center',
            paddingTop:10,
        }} >Group Chatroom </Text>
        <Text style={{
             textAlign:'center',
             color:'gold'
        }} ><FontAwsome name='star' /> Premium</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{
        backgroundColor:'#1e8ee1',
        width:'94%',
        marginLeft:'3%',
        height:50,
        marginTop:5,
        borderRadius:20,

       }}>
        <Text style={{
            textAlign:'center',
            paddingTop:10,
        }} >Integrated services </Text>
         <Text style={{
             textAlign:'center',
             color:'gold'
        }} ><FontAwsome name='star' /> Premium</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{
        backgroundColor:'#1e8ee1',
        width:'94%',
        marginLeft:'3%',
        height:50,
        marginTop:5,
        borderRadius:20,

       }}>
        <Text style={{
            textAlign:'center',
            paddingTop:15,
        }} >Frequently asked questions(FAQS) </Text>
       </TouchableOpacity>

       <TouchableOpacity style={{
        backgroundColor:'#1e8ee1',
        width:'94%',
        marginLeft:'3%',
        height:50,
        marginTop:5,
        borderRadius:20,

       }}>
        <Text style={{
            textAlign:'center',
            paddingTop:15,
        }} >Payment Details</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{
        backgroundColor:'#1e8ee1',
        width:'94%',
        marginLeft:'3%',
        height:50,
        marginTop:5,
        borderRadius:20,

       }}>
        <Text style={{
            textAlign:'center',
            paddingTop:15,
            color:'gold',
        }} > <FontAwsome name='star' /> Upgrade Packages </Text>
       </TouchableOpacity>

       <TouchableOpacity style={{
        backgroundColor:'#1e8ee1',
        width:'94%',
        marginLeft:'3%',
        height:50,
        marginTop:5,
        borderRadius:20,

       }}  >
        <Text style={{
            textAlign:'center',
            paddingTop:15,
        }} >About Us </Text>
       </TouchableOpacity>

       <TouchableOpacity style={{
        backgroundColor:'#1e8ee1',
        width:'94%',
        marginLeft:'3%',
        height:50,
        marginTop:5,
        borderRadius:20,
        marginBottom:10,

       }} onPress={()=>{
        alert('link copied');
       }} >
        <Text style={{
            textAlign:'center',
            paddingTop:15,
        }} >Refer a Friend </Text>
        
       </TouchableOpacity>
        
        </ScrollView>)
}