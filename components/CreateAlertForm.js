import{ StyleSheet,View,Text,TextInput,ScrollView,TouchableOpacity,Image, Button } from 'react-native'
import{useForm,Controller, set}from'react-hook-form';
import img1 from '../assets/favicon.png'
import FontAwsome from '@expo/vector-icons/FontAwesome'
import { SelectList } from 'react-native-dropdown-select-list';
import RadioGroup from 'react-native-radio-buttons-group';
import { useState } from 'react';
import {responseGroups}from '../components/CreateAlertForm'
const radioButtonsData=[{
  id:'1',
  label:"Response Providers",
  value:"Response Providers",
},
{
  id:'2',
  label:"Response Groups",
  value:"Response Groups",
}]

export default function CreateAlertForm({typez})  {
  const[radioButtons,setRadioButtons]=useState(radioButtonsData);
  const{control,handleSubmit, errors,reset }=useForm({
    defaultValues:{
      'location':'',
      'description':'',
      'callnumber':'',
    }
  });
    const tr1={
      id:[1,2,3,4,5],
      provider:["DCI Bungoma County","DCI Marsabit County","DCI Nairobi County","DCI Kisumu County","DCI Mombasa County"],
      number:["+0128897832649"],
    }
    const onsubmit=()=>{
      console.log("yep")
    }
    const data=[
      {key:tr1.id[0],
       value:tr1.provider[0],
      },
      {key:tr1.id[1],
       value:tr1.provider[1],
      },
      {key:tr1.id[2],
       value:tr1.provider[2]
      },
      {key:tr1.id[3],
       value:tr1.provider[3]
      },
      {key:tr1.id[4],
       value:tr1.provider[4]
      }
    ]
    function onPressRadioButton(radioButtonArray){
      setRadioButtons(radioButtonArray);
    };
    const [response,setResponse]=useState(true)
    return (
      <View style={{
        height:600,
      }}>
      <ScrollView style={styles.container} >
        <Text style={{
          marginLeft:'30%',
          marginBottom:20,
          fontSize:20,
          fontWeight:'100',
          fontFamily:'monospace', 
          color:'red'
        }} >{typez} Alert</Text>
        <Image style={styles.image1} 
         source={img1} />
        <Text style={{
          marginLeft:10,
          fontSize:15,
          marginTop:10,
          color:'green',
          fontFamily:'monospace',
        }} >Report </Text>
      <View>
        <View style={styles.labelcontaionerLoc}  >
            <Text style={styles.labelsLoc}>Verify your Location</Text>
         <Controller
      control={control}
      name='location'
      defaultValue='Thailand'
      render={({onChangeText,value})=>(
        <TextInput style={styles.inputDataLoc}
        placeholder='  Add your location or set on map  '
        
        onChange={()=>{}}
          /> 
        )}
      />
        <FontAwsome name='map-marker' size={20} style={styles.mapIcon} onPress={()=>{
          console.log(`feching location services`)
        }} />
        </View>
      <View>

      <View style={{
            height:230,
            width:410,
            display:'flex',
          flexDirection:'column',
            
        }} >
        <Text style={{fontFamily:'monospace',}} >choose response Teams  </Text>
       
         <View style={{
          height:300,
          width:410,
          
          
         }}>
          {(<View style={{
            
            
            width:410,
            
          }}>
            <SelectList data={data}
              placeholder="Responders and Groups"
              boxStyles={{
                backgroundColor:'white',
                width:400,
                marginLeft:5,
                fontFamily:'monospace',
                
              }}
          />
          </View>)}
          <View style={{
            backgroundColor:'#9ABD97',
            height:70,
            width:'94%',
            marginLeft:'2%',
            display:'flex',
            flexDirection:'column',
            borderRadius:10,
            marginTop:5,
            marginTop:10,
          }}>
            <Text style={{fontFamily:'monospace',}}> Call Responder</Text>
            
            <View style={{
              display:'flex',
              flexDirection:'row',
              height:40,
              
            }}>
              <TextInput 
                placeholder=' +2575126346236'
               style={{
              backgroundColor:'#F4F4F4',
              width:300,
              marginLeft:5,
              marginTop:5,
              borderRadius:5,
            }} />
            <Text style={{
              backgroundColor:'green',
              marginLeft:10,
              marginTop:5,
              width:70,
              borderRadius:5,
              padding:7,
            }} onPress={()=>{
              console.log(`Call Made successful`)
            }} > <FontAwsome name="phone" /> Call</Text>
            </View>
          </View>

         </View>
        </View>
         <View style={{
             width:'94%',
            marginLeft:'2%',
            backgroundColor:'#9ABD97',
            display:'flex',
            flexDirection:'column'
          }}>
            <Text style={{fontFamily:'monospace',}}>Describe the situation</Text>
            <Controller
            control={control}
            name='description'
            render={({onChangeText,value})=>(
              <TextInput  
              style={{
                backgroundColor:'white',
                height:200,
           
              }} placeholder="Quid Quid recipitur recipientis recipitur"
              onChangeText={onChangeText}
              />
            )}
            />
            
          </View>
          <View style={{
            marginTop:5,
            height:100,
            backgroundColor:'#9ABD97',
            width:'94%',
            marginLeft:'2%',
           
            
          }} >
            <Text style={{fontFamily:'monospace',}} >Additional Data</Text>
            <View
            style={{
              backgroundColor:'white',
              height:76,
              display:'flex',
              flexDirection:'row',
              borderRadius:5
            }}
            >
              <Text style={{
                width:'20%',
                backgroundColor:"black",
                color:'white',
                height:50,
                marginLeft:"2%",
                marginTop:10,
                marginRight:"2%",
                padding:3,
                borderRadius:5,
                fontFamily:'monospace',
              }} onPress={()=>{
                console.log(`video fetching`)
              }} >Video Clips <FontAwsome name='video-camera'  /></Text>
              <Text style={{
                width:'20%',
                backgroundColor:"black",
                color:'white',
                height:50,
                marginLeft:"5%",
                marginTop:10,
                padding:10,
                borderRadius:5,
                fontFamily:'monospace',
              }}  onPress={()=>{
                console.log(`Image fetching`)
              }}>Images <FontAwsome name='image' /></Text>
              <Text style={{
                width:'20%',
                backgroundColor:"black",
                color:'white',
                height:50,
                marginLeft:"5%",
                marginTop:10,
                padding:5,
                borderRadius:5,
                fontFamily:'monospace',
              }}  onPress={()=>{
                console.log(`Audio fetching`)
              }} >Add Audio <FontAwsome name='microphone'  /></Text>
               <Text style={{
                width:'20%',
                backgroundColor:"black",
                color:'white',
                height:50,
                marginLeft:"3%",
                marginTop:10,
                marginRight:"2%",
                padding:7,
                borderRadius:5,
                fontFamily:'monospace',
              }}  onPress={()=>{
                console.log(`file fetching`)
              }} >Add File <FontAwsome name='file'  /></Text>
            </View>
            
          </View>
          <Text
          style={{
            height:40,
            width:'90%',
            backgroundColor:'red',
            borderRadius:5,
            marginTop:10,
            marginBottom:10,
            marginLeft:'5%',
            padding:10,
            textAlign:'center',
            fontFamily:'monospace',

          }} onPress={()=>{
            console.log(`Alert sent successful`)
          }}
          >Send Alert <FontAwsome name='fire-extinguisher' /> </Text>
      </View>
   
     

      </View>
     
      </ScrollView>
</View>
    )
   
 
}
 const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#9ABD97'
    },
    image1:{
      height:120,
      width:120,
      marginLeft:'35%',
      borderRadius:50,


    },
    inputDataLoc:{
      backgroundColor: 'white',
      height:60,
      width:'60%',
      marginLeft:'2%',
      marginTop: 10,
      borderRadius:40,

    },
    labelsLoc:{
      marginLeft:5,
      marginTop:25,
      fontFamily:'monospace',
    },
    labelcontaionerLoc:{
      display:'flex',
      flexDirection: 'column',
      marginBottom:20,
      
    },
    mapIcon:{
      position:'absolute',
      marginLeft:'55%',
      marginTop:75,
      color:'black'
    },
   
 })

