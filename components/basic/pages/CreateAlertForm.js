import{ StyleSheet,View,Text,TextInput,ScrollView,TouchableOpacity,Image, } from 'react-native';
import FontAwsome from '@expo/vector-icons/FontAwesome';
import { SelectList,MultipleSelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';
import { alertTypes,responseProvider,responseGroups } from '../../../mockData/metrics';
import axios from 'axios';

export default function CreateAlertForm({renderCreateAlert}){

  const[inpuData,setInputData]=useState({
    type:"",
    description:"",
    responders:"",
    groups:"", 
    audio:"",
    video:"",
    file:"",
  })
  const [response,setResponse]=useState([])
  const[responderList,setResponderList]=useState(false)
  const[groups,setGroups]=useState(true)
  const[responderz,setResponders]=useState(true)
  const[media,showMedia]=useState(false);
  

  const url = 'http://127.0.0.1:3500/alatpres/api/alerts'
  function postToApi(){
    const sendData ={
      type:inpuData.type,
      description:inpuData.description,
      responders:inpuData.responders, 
      audio:inpuData.audio,
      video:inpuData.video,
      file:inpuData.file,
    }
    
    //fetch(url,{
    //  method: 'POST',
    //  headers: {
    //    Accept: 'application/json',
    //    'Content-Type': 'application/json',
    //  },body:JSON.stringify(sendData)})
    axios
    .post("http://192.168.100.35:3500/alatpres/api/alerts",sendData)
    .then(res=>{setResponse(res)})
    .catch(error=>{console.info(error)})
  }


  const data=[...alertTypes]
  const grp=[...responseGroups]
  const providers=[...responseProvider]
  

  return(
    <View style={{
      position:'absolute',
      height:'100%',
      width:'100%',
      backgroundColor:'white'
    }} >

    <FontAwsome name='times' size={30} onPress={()=>{
        renderCreateAlert(false);
      }} />

    <ScrollView style={{
      width:'96%',
      marginLeft:'2%',
      backgroundColor:'white',
      borderStyle:'solid',
      borderColor:'black',
      borderWidth:1.5,
    }} >
      

      <Text style={{
        textAlign:'center'
      }} >Create Alert</Text>

      <SelectList data={data}
              placeholder=" Choose Alert Type"
              setSelected={val=>{setInputData({type:val})}}
              boxStyles={{
                backgroundColor:'white',
                width:'96%',
                marginLeft:'2%',
                fontFamily:'monospace',
                marginTop:0,
                borderStyle:'solid',
                borderColor:'black',
                borderWidth:1.5,
                backgroundColor:'#1e8ee1'
                
              }}
              save="value"
              onSelect={()=>{
                //alert(choosenAlert)
              }}
              
          />
      
     
      <TouchableOpacity style={{
        backgroundColor:'#1e8ee1',
        borderStyle:'solid',
         borderColor:'black',
         borderWidth:1.5,
         width:'96%',
         marginLeft:'2%',
         marginTop:15,
        display:'flex',
        flexDirection:'row',
        height:50,
        paddingTop:12,
        paddingLeft:5,
        justifyContent:'space-between'
      }} onPress={()=>{
        setResponderList(true)
      }} >
        <Text>Choose Response providers/groups</Text>
        <FontAwsome name='caret-down' size={20} style={{
          marginRight:10
        }} />
      </TouchableOpacity>
      
      {responderList&&(
        <View style={{
          borderStyle:'solid',
         borderColor:'black',
         borderWidth:1.5,
         width:'96%',
         marginLeft:'2%',
        
        }} >
        
        <FontAwsome name='times' size={30} onPress={()=>{
          setResponderList(false)
        }} />
          {groups&&(
             <MultipleSelectList data={grp}
             placeholder=" Choose Response Group"
             setSelected={vals=>{setInputData({groups:vals})}}
             boxStyles={{
               backgroundColor:'white',
               width:'96%',
               marginLeft:'2%',
               fontFamily:'monospace',
               marginTop:5,
               borderStyle:'solid',
               borderColor:'black',
               borderWidth:1.5,
               backgroundColor:'white',
               
             }}
             save="value"
             onSelect={()=>{
              //alert(choosenResponseGroups)
             }}
             />
          )}
          {responderz&&(
             <MultipleSelectList data={providers}
             placeholder=" Choose Responder"
             setSelected={vals=>{setInputData({responders:vals})}}
             boxStyles={{
               backgroundColor:'white',
               width:'96%',
               marginLeft:'2%',
               fontFamily:'monospace',
               marginTop:5,
               borderStyle:'solid',
               borderColor:'black',
               borderWidth:1.5,
               backgroundColor:'white',
               marginBottom:5
             }}  
             save="value"
             onSelect={()=>{
              //alert(choosenResponder)
             }}           
         />
          )}
        </View>
      )}
     
   

      <View style={{
        backgroundColor:'red',
        width:'96%',
        marginLeft:'2%',
        marginTop:15,
        height:250,
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:1.5,
      }} >
        <Text style={{
          backgroundColor:'#1e8ee1',
          height:40,
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
          paddingTop:12,
          paddingLeft:12,
        }} >Describe the situation</Text>
        <TextInput style={{
          backgroundColor:'white',
          height:208,
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
        }} placeholder=" Describe here"  onChangeText={val=>{
          setInputData({description:val})
        }}  />
      </View>
      
     

          <View style={{
            backgroundColor:'#1e8ee1',
            height:40,
            width:'96%',
            marginLeft:'2%',
            display:'flex',
            flexDirection:'row', 
            
            marginTop:15,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.5,
            marginBottom:5
          }} >
            <Text style={{
              backgroundColor:'#1e8ee1',
              height:36,
              
              paddingTop:10,
              paddingLeft:12,
              width:'40%'
            }} onPress={()=>{
              showMedia(true)
            }} >Attach Media 
            <FontAwsome name='paperclip' size={20}  onPress={()=>{
              showMedia(true)
            }} />        <FontAwsome name='caret-right' size={21} style={{
              paddingLeft:2
            }}   /> </Text>
            {media&&(<View style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'space-evenly',
              width:'60%',
              backgroundColor:'white',
              borderStyle:'solid',
              borderColor:'black',
              borderWidth:1.5,
            }} >
              <FontAwsome name='microphone'  size={30} style={{
                paddingTop:2,
              }} />
              <FontAwsome name='video-camera' size={30} style={{
                paddingTop:2,
              }}  />
              <FontAwsome name='image' size={30} style={{
                paddingTop:2,
              }}  />
              <FontAwsome name='file' size={30} style={{
                paddingTop:2,
              }} />
            </View>)}
          </View>

        
    </ScrollView>

    <TouchableOpacity style={{
            backgroundColor:'#1e8ee1',
            width:120,
            height:40,
            marginTop:4,
            marginLeft:'35%',
            paddingTop:12,
            paddingLeft:25,
            borderRadius:30,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.5,
          }} onPress={()=>{
            //renderCreateAlert(false);
            postToApi()
          }}  >
            <Text>Make Alert</Text>
          </TouchableOpacity>

    </View>
  )
}