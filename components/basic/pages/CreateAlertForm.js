import{ StyleSheet,View,Text,TextInput,ScrollView,TouchableOpacity,Image, } from 'react-native';
import FontAwsome from '@expo/vector-icons/FontAwesome';
import { SelectList,MultipleSelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';
import { alertTypes,responseProvider,responseGroups, alerts } from '../../../mockData/metrics';
import axios from 'axios';
import { useEffect } from 'react';
import env_variables from '../../../env';


export default function CreateAlertForm({renderCreateAlert,setcreatealertpage,renderalertssegment,rendersegmentselector}){

  //data
  const[alerttype,setalerttype]=useState("");
  const[responseprovider,setresponseprovider]=useState("");
  const[alertlocation,setalertlocation]=useState("");
  const[alertdescription,setalertdescription]=useState("");
  const[alertaudio,setalertaudio]=useState("");
  const[alertvideo,setalertvideo]=useState("");
  const[alertfile,setalertfile]=useState("");
  const[alertsender,setalertsender]=useState("");
  //
  const [ responsegroups,setresponsegroups]=useState([])
  const  [responseproviders,setresponseproviders]=useState([])
  const [response,setResponse]=useState([])
  const[responderList,setResponderList]=useState(false)
  const[groups,setGroups]=useState(true)
  const[responderz,setResponders]=useState(true)
  const[media,showMedia]=useState(true);
  

  const baseUrl = env_variables.API_URL
  function postToApi(){
    const sendData ={
      type:inpuData.type,
      description:inpuData.description,
      responders:inpuData.responders, 
      audio:inpuData.audio,
      video:inpuData.video,
      file:inpuData.file,
    }
    
    fetch(`${baseUrl}/alerts`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },body:JSON.stringify(sendData)})
    //axios
    //.post(`${baseUrl}/api/alerts",sendData`)
    //.then(res=>{setResponse(res)})
    //.catch(error=>{console.info(error)})
  }
  
  function postData(){
    const data = {
      type: alerttype,
      responders: responseprovider,
      location: alertlocation,
      description: alertdescription,
      audio: alertaudio,
      file:alertfile,
      video: alertvideo,
      sender:"Thomas"
    }
    axios.post(env_variables.ALERTS_API,data)
    .then(res=>{
      console.log(res.data)
      
    })
    .catch(error=>{
      console.error(error)
      alert(error)
    })

  }

  const data=[...alertTypes]
  const grp=[...responseGroups]
  const provider=[...responseProvider]
  const providers = grp.concat(provider)
  

  return(
    <View style={{
      position:'absolute',
      height:'100%',
      width:'100%',
      backgroundColor:'white'
    }} >

    <FontAwsome name='times' size={30} onPress={()=>{
        //renderCreateAlert(false);
        setcreatealertpage(false)
        renderalertssegment(true)
        rendersegmentselector(true)
      }} />

    <ScrollView style={{
      width:'96%',
      marginLeft:'2%',
      backgroundColor:'white',
     
    }} >
      

      <Text style={{
        textAlign:'center',
        fontSize:20,
      }} >Create Alert</Text>

      <SelectList data={data}
              placeholder=" Choose Alert Type"
              setSelected={val=>{setalerttype(val) }}
              boxStyles={{
                backgroundColor:'white',
                width:'96%',
                marginLeft:'2%',
                fontFamily:'monospace',
                marginTop:20,
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
      <SelectList data={providers}
             placeholder=" Choose Responder"
             setSelected={vals=>{setresponseprovider(vals)}}
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
     
      <View style={{
        backgroundColor:'white',
        width:'96%',
        marginLeft:'2%',
        marginTop:15,       
      }}>
      <Text style={{
          backgroundColor:"#1e8ee1",
          height:40,
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
          paddingTop:12,
          paddingLeft:12,
        }} >alert location</Text>
        <TextInput style={{
          backgroundColor:'white',
          paddingLeft:5,
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
          marginBottom:10,
          
        }} placeholder='location of the alert' onChangeText={val=>{
         setalertlocation(val)
        }} />
      </View>       
     
   

      <View style={{
        backgroundColor:'white',
        width:'96%',
        marginLeft:'2%',
        marginTop:15,
        
       
       
      }} >
        <Text style={{
          backgroundColor:"#1e8ee1",
          height:40,
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
          paddingTop:12,
          paddingLeft:12,
        }} >Describe the situation</Text>
        <TextInput style={{
          backgroundColor:'white',
          height:80,
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
          marginBottom:10,
          paddingLeft:5,
          
        }} placeholder=" Describe here"  onChangeText={val=>{
         setalertdescription(val)
        }} multiline={true} maxLength={400}  />
      </View>
      
    <View style={{
      height:200,
      backgroundColor:"white",
      width:"96%",
      marginLeft:"2%",
      marginTop:10,

    }} >
      <Text style={{
          backgroundColor:"#1e8ee1",
          height:40,
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
          paddingTop:12,
          paddingLeft:12,
        }}>Attach files</Text>
      <View style={{
        display:"flex",
        flexDirection:"row",
        borderWidth:1.5,
        borderColor:"#1e8ee1",
        justifyContent:"space-evenly"
      }} >
        <TouchableOpacity style={{
          height:70,
          width:70,
          backgroundColor:"white",
          display:"flex",
          flexDirection:"column",
          marginLeft:10,
          marginTop:10,
          borderRadius:10,
          borderWidth:1.5,
          borderColor:"#1e8ee1",
          marginBottom:10,
        }}  >
          <Text style={{
            marginLeft:15,
          }} >Audio</Text>
          <FontAwsome name="file-audio-o" size={30} style={{
            marginLeft:20,
            marginTop:2,
          }} />
        </TouchableOpacity>
        <TouchableOpacity style={{
          height:70,
          width:70,
          backgroundColor:"white",
          display:"flex",
          flexDirection:"column",
          marginLeft:10,
          marginTop:10,
          borderRadius:10,
          borderWidth:1.5,
          borderColor:"#1e8ee1",
          marginBottom:10,
        }}  >
          <Text style={{
            marginLeft:15,
          }} >Video</Text>
          <FontAwsome name="file-video-o" size={30} style={{
            marginLeft:20,
            marginTop:2,
          }} />
        </TouchableOpacity>
        <TouchableOpacity style={{
          height:70,
          width:70,
          backgroundColor:"white",
          display:"flex",
          flexDirection:"column",
          marginLeft:10,
          marginTop:10,
          borderRadius:10,
          borderWidth:1.5,
          borderColor:"#1e8ee1",
          marginBottom:10,
        }}  >
          <Text style={{
            marginLeft:15,
          }} >File</Text>
          <FontAwsome name="file" size={30} style={{
            marginLeft:20,
            marginTop:2,
          }} />
        </TouchableOpacity>
      </View>
    </View> 

    

        
    </ScrollView>

    <TouchableOpacity style={{
            backgroundColor:'#1e8ee1',
            width:120,
            height:40,
            marginTop:4,
            marginLeft:'35%',
            paddingTop:10,
            paddingLeft:25,
            borderRadius:30,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.5,
            marginBottom:15,
          }} onPress={()=>{
            //renderCreateAlert(false);
            //postToApi()
            postData()

            

            setTimeout(()=>{
              setcreatealertpage(false)
              renderalertssegment(true)
              rendersegmentselector(true)
            },2000)
          }}  >
            <Text>Make Alert</Text>
          </TouchableOpacity>

    </View>
  )
}