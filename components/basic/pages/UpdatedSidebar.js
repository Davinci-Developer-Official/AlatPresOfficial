import { View,Text, TouchableOpacity,Image } from "react-native";
import FontAwsome  from '@expo/vector-icons/FontAwesome'
import Profile from "./Profile";
import { useState } from "react";


export default function UpdatedSidebar({setsideBar,setShowBars,setUpdatedDash}){
    const[profile,showProfile]=useState(false);
    return(
        <View style={{
        position:'absolute',
        height:"100%",
        width:'95%',
        backgroundColor:'white',
        borderStyle:'solid',
        borderColor:'#1e8ee1',
        borderWidth:1.5,
        }} >
            <Text>..</Text>
        <View style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }} >
            <Text style={{
                marginLeft:10,
                marginTop:10,
                fontSize:20,
                
            }}>  </Text> 
            <TouchableOpacity style={{
                marginRight:10,
                marginTop:10,
            }} onPress={()=>{
                setsideBar(false)
                setShowBars(true)
            }} >
            <FontAwsome name='chevron-circle-left' size={30} />
            </TouchableOpacity>
        </View>
        <View style={{
            marginTop:30,
           
        }}>
            <Image source={require("../../../assets/alatpres_logo.png")} style={{
                height:60,
                width:60,
                marginLeft:"40%",
            }} />
            <Text style={{
                 marginLeft:"20%"
            }}>A Reliable Public Response Partner</Text>
        </View>
        <TouchableOpacity style={{
            display:"flex",
            flexDirection:"row",
            borderRadius:60,
            borderWidth:1.5,
            borderColor:"#1e8ee1",
            width:"80%",
            marginLeft:"10%",
            marginTop:70,
            

        }} onPress={()=>{
            showProfile(true)
            //setsideBar(false)
             //setUpdatedDash(false)
            
        }}>
           <Image source={require("../../../assets/prof1.png")} style={{
            borderRadius:50,
            height:50,
            width:50,
           }} />
           <Text style={{
            marginTop:15,
            marginLeft:30,
            color:"#1e8ee1"
           }} >Profile Data</Text> 
           <FontAwsome name="pencil" size={20} style={{
            marginLeft:100,
            marginTop:10,
            color:"#1e8ee1"
           }} />
        </TouchableOpacity>
        <TouchableOpacity style={{
            display:"flex",
            flexDirection:"row",
            borderRadius:70,
            borderWidth:1.5,
            borderColor:"#1e8ee1",
            width:"80%",
            marginLeft:"10%",
            marginTop:30,
            height:50

        }}>
          
           <Text style={{
            marginTop:15,
            marginLeft:50,
            color:"#1e8ee1"
           }} >Integrated Services</Text> 
           <FontAwsome name="handshake-o" size={20} style={{
            marginLeft:105,
            marginTop:10,
            color:"#1e8ee1"
           }} />
        </TouchableOpacity>
        <TouchableOpacity style={{
            display:"flex",
            flexDirection:"row",
            borderRadius:70,
            borderWidth:1.5,
            borderColor:"#1e8ee1",
            width:"80%",
            marginLeft:"10%",
            marginTop:30,
            height:50

        }}>
          
           <Text style={{
            marginTop:15,
            marginLeft:50,
            color:"#1e8ee1"
           }} >Payment Services</Text> 
           <FontAwsome name="money" size={20} style={{
            marginLeft:110,
            marginTop:10,
            color:"#1e8ee1"
           }} />
        </TouchableOpacity>
        <TouchableOpacity style={{
            display:"flex",
            flexDirection:"row",
            borderRadius:70,
            borderWidth:1.5,
            borderColor:"#1e8ee1",
            width:"80%",
            marginLeft:"10%",
            marginTop:30,
            height:50

        }}>
          
           <Text style={{
            marginTop:15,
            marginLeft:90,
            color:"#1e8ee1"
           }} >About Us</Text> 
           <FontAwsome name="info" size={30} style={{
            marginLeft:130,
            marginTop:10,
            color:"#1e8ee1"
           }} />
        </TouchableOpacity>
        <TouchableOpacity style={{
            display:"flex",
            flexDirection:"row",
            borderRadius:70,
            borderWidth:1.5,
            borderColor:"#1e8ee1",
            width:"80%",
            marginLeft:"10%",
            marginTop:30,
            height:50

        }}>
          
           <Text style={{
            marginTop:15,
            marginLeft:50,
            color:"#1e8ee1"
           }} >FAQS</Text> 
           <FontAwsome name="question" size={30} style={{
            marginLeft:190,
            marginTop:10,
            color:"#1e8ee1"
           }} />
        </TouchableOpacity>

       {profile &&(<Profile  setsideBar={setsideBar} showProfile={showProfile} /> )}


        </View>
    )
}