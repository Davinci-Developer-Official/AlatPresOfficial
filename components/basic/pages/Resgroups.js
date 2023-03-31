import { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView, TouchableOpacity, View ,Text } from "react-native";
import Searchbar from "../../Searchbar";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import socketIO from "socket.io-client"

export default function Resgroups({renderJoinResponseGroup,}){
    const socket = socketIO("https://cfca-102-219-208-195.in.ngrok.io")

    const msg = "exited"
    function socketTrigger (){
        socket.on("groups",(args)=>{
          console.log(`${args}`) 
          setsearchTittles(args)
          //setresgroups(true)
          socket.emit("statusgroups",resgroups);

            
        })
       }

    const[resgroups,setresgroups]=useState(true)
    const [searchTittles,setsearchTittles]=useState("")
    
    function exit(){
      
        
        socket.emit("statusgroups",false)
        setTimeout(()=>{
            renderJoinResponseGroup(false)
            setresgroups(false)
          
        },2000)
    }

    useEffect(()=>{

        
        if(resgroups){
            socketTrigger()
        }
        
        
    },[])
    const[showoptions,setshowoptions]=useState(false)
    const[allgroups,setallgroups]=useState(true)
    const[recommended,setrecommended]=useState(false)
    const[popular,setpopular]=useState(false)
    return(
        <SafeAreaView style={{
            position:"absolute",
            height:"100%",
            width:"100%",
            backgroundColor:"white",
            display:"flex",
            flexDirection:"column"
        }} >
             <View style={{
            backgroundColor:'white',
            height:50,
            borderStyle:"solid",
            borderWidth:1.0,
            borderColor:"#1e8ee1",
            display:"flex",
            flexDirection:"row",
                }} >
            <TouchableOpacity style={{
                width:"10%",
            }} >
                <Text style={{
                    padding:8,
                }} >
                   <FontAwsome name="times" size={30} onPress={()=>{
                    exit()
                   }} /> 
                </Text>
            </TouchableOpacity>
           {showoptions&&( <View style={{
                width:"90%",
                backgroundColor:"#1e8ee1",
                display:"flex",
                flexDirection:"row",
                borderStyle:"solid",
                borderWidth:1.0,
                borderColor:"#1e8ee1",
                justifyContent:"space-evenly"
            }} >
                <FontAwsome name="caret-right" size={30}  style={{
                    
                    marginTop:9,
                }} onPress={()=>{
                    setshowoptions(false)
                }} />
                <TouchableOpacity style={allgroups?{
                    backgroundColor:"black",
                    height:40,
                    marginTop:4,
                    
                    borderRadius:5,
                    borderStyle:"solid",
                    borderWidth:1.0,
                    borderColor:"white",
                }:{
                    backgroundColor:"#1e8ee1",
                    height:40,
                    marginTop:4,
                    
                    borderRadius:5,
                    borderStyle:"solid",
                    borderWidth:1.0,
                    borderColor:"white",
                }} onPress={()=>{
                    setallgroups(true)
                    setrecommended(false)
                    setpopular(false)
                }}  >
                    <Text style={allgroups ? {
                         padding:10,
                         color:"white"
                    }:{
                        padding:10,
                        color:"white"
                    }} >All groups</Text>
                </TouchableOpacity>
                <TouchableOpacity style={recommended?{
                    backgroundColor:"black",
                    height:40,
                    marginTop:4,
                    
                    borderRadius:5,
                    borderStyle:"solid",
                    borderWidth:1.0,
                    borderColor:"white",
                }:{
                    backgroundColor:"#1e8ee1",
                    height:40,
                    marginTop:4,
                    
                    borderRadius:5,
                    borderStyle:"solid",
                    borderWidth:1.0,
                    borderColor:"white",
                }} onPress={()=>{
                    setallgroups(false);
                    setrecommended(true);
                    setpopular(false)
                }} >
                    <Text style={recommended?{
                        padding:10,
                        color:"white"
                    }:{
                        padding:10,
                        color:"white"
                    }} >Recommended  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={popular?{
                    backgroundColor:"black",
                    height:40,
                    marginTop:4,
                    
                    borderRadius:5,
                    borderStyle:"solid",
                    borderWidth:1.0,
                    borderColor:"white",
                }:{
                    backgroundColor:"#1e8ee1",
                    height:40,
                    marginTop:4,
                   
                    borderRadius:5,
                    borderStyle:"solid",
                    borderWidth:1.0,
                    borderColor:"white",
                }} onPress={()=>{
                    setallgroups(false);
                    setrecommended(false);
                    setpopular(true)
                }} >
                    <Text style={popular?{
                        padding:10,
                        color:"white"
                    }:{
                        padding:10,
                        color:"white"
                    }} >popular groups</Text>
                </TouchableOpacity>
            </View>)}
            {!showoptions &&<View style={{
                width:"70%",
            }} >
                <Text style={{
                    textAlign:"center",
                    paddingTop:15,
                    letterSpacing:2,
                }} >{searchTittles}</Text>
            </View>}
            {!showoptions &&(<TouchableOpacity style={{
                height:40,
                backgroundColor:"#1e8ee1",
                width:"18%",
                borderRadius:10,
                marginTop:5,
                marginLeft:"1%"
            }} onPress={()=>{
                setshowoptions(true)
            }} >
                <Text style={{
                    padding:10,
                    color:"white"
                }} >Options</Text>
            </TouchableOpacity>)}
        </View>
            {allgroups&&(<Searchbar searchTittle={searchTittles} resgroup={resgroups} />)}
       
        </SafeAreaView>
    )
}