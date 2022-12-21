import React, { Component ,useState} from 'react'
import { Text, View,StyleSheet, ScrollView,Image, TouchableOpacity } from 'react-native'
import FontAwsome from '@expo/vector-icons/FontAwesome';
import img1 from '../assets/favicon.png'
import images from '../assets/images/Images';
import { SelectList } from 'react-native-dropdown-select-list';
import Packages from './Packages';
import Fundraiser from './Fundraiser';
import Reports from './Reports';
import AlertTracker from './AlertTracker';

const groups=[
  { id:1,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'Govt org'
 },
   { id:2,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'NGO org'
 },
   { id:3,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'Community org'
 },
   { id:4,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'NGO org'
 },
   { id:5,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'Govt org'
 },
   { id:6,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'Community org'
 },
   { id:7,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'Govt org'
 },
   { id:8,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'NGO org'
 },
   { id:9,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'Govt org'
 },
   { id:10,
  groupname:'Umoja nyumba kumi Group',
  memberstotal:22,
  locale:'Umoja',
  alerttype:'Fire',
  branch:'Community org'
 },
]

export default function CreateAlertForm({setShowMenu,setHideBar,setViewMode,setAlertFeeds}) {
    const [resGroup,setResGroup]=useState(false);
    const [resGroupTrigger,setResGroupTrigger]=useState(true);
    const[packagesTrigger,setPackagesTrigger]=useState(false);
    const [fundraiserTrigger,setFundraiserTrigger]=useState(false);
    const[reportTrigger,setReportTrigger]=useState(false);
    const[trackerTrigger,settrackerTrigger]=useState(false);
    return (
      <ScrollView style={styles.container} >
        <View style={{
          backgroundColor:'red',
          
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-evenly',
          height:50,
        }} >
             <FontAwsome size={30}  name='times' onPress={()=>{
              setShowMenu(false);
              console.log(`exit side menu`)
              setHideBar(true);
              setViewMode(true);
              setAlertFeeds(true)
             }} style={{
              marginTop:10, 
             }} />
            <Text style={{
              marginTop:15,
              fontSize:20,
              fontFamily:'monospace'
            }} >Hello Thomas</Text>
            <FontAwsome size={30} name='gear' style={{
              marginTop:15,
            }} />
        </View>
        <View style={{
            height:250,
            
            marginBottom:10,
            display: 'flex',
            flexDirection:'column'
        }} >
          <Image source={img1} style={{
            width:"100%",
            height:220,
            
          }} />
           <Text style={{
              padding:10,
              textAlign:'center',
              backgroundColor:'black',
              fontFamily:'monospace',
              height:40,
              color:'white',
            }} > Edit your profile <FontAwsome name="pencil" /> </Text>
          </View>
          
          {resGroupTrigger&&<TouchableOpacity onPress={()=>{
            setResGroup(true);
            setResGroupTrigger(false);
          }} 
          style={{
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#ACBEA3',
            marginTop:5,
            width:'96%',
            borderRadius:5,
            marginLeft:'2%',
            padding:10,
            textAlign:'center',
            marginTop:15,
          }}
          >
           
            <Text>
              <FontAwsome name='group' size={30} style={{
               
              }} />  Response Groups</Text>
        
          </TouchableOpacity>}

              {resGroup&&(<ScrollView style={{
              height:180,
               display:'flex',
            flexDirection:'column',
            backgroundColor:'#ACBEA3',
            marginTop:5,
            width:'96%',
            borderRadius:5,
            marginLeft:'2%',
            padding:10,
            textAlign:'center',
            }} >
              <FontAwsome name='times' size={20} onPress={()=>{
                setResGroup(false);
                setResGroupTrigger(true);
              }} />
              <Text style={{
                backgroundColor:'green',
                textAlign:'center',
                padding:2,
                marginTop:2,
              }} >Available Response Groups</Text>
              {groups.map(group=>(
                <View key={group.id} style={{
                  display:'flex',
                  flexDirection:'row',
                  height:30,
                  backgroundColor:'white',
                  marginTop:5,
                  borderRadius:5,
                }} >
                  <Text>{group.groupname} </Text>
                  <Text>  {group.alerttype} </Text>
                  <Text>{group.locale} </Text>
                  <Text>{group.memberstotal} </Text>
                  <Text>{group.branch}</Text>

                </View>
              ))}
              
            </ScrollView>)}
            <TouchableOpacity style={{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#ACBEA3',
            marginTop:5,
            width:'96%',
            borderRadius:5,
            marginLeft:'2%',
            padding:10,
            textAlign:'center',
            }} onPress={()=>{
              setPackagesTrigger(true);
            }} >
              <FontAwsome name='gift' size={30} />
              <Text style={{
                marginLeft:15,
                marginTop:5,
              }} >Packages</Text>
            </TouchableOpacity>
            {packagesTrigger&&(<Packages/>)}


              <TouchableOpacity style={{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#ACBEA3',
            marginTop:5,
            width:'96%',
            borderRadius:5,
            marginLeft:'2%',
            padding:10,
            textAlign:'center',
              }} onPress={()=>{
                setFundraiserTrigger(true);
              }} >
                <FontAwsome name='money'  size={30}  style={{

                }}  />
                <Text style={{
                  marginTop:10,
                  marginLeft:10,
                }}>Fundraisers</Text>
              </TouchableOpacity>
            {fundraiserTrigger&&(
              <Fundraiser/>
            )}

            <TouchableOpacity style={{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#ACBEA3',
            marginTop:5,
            width:'96%',
            borderRadius:5,
            marginLeft:'2%',
            padding:10,
            textAlign:'center',
              }} onPress={()=>{
                setReportTrigger(true)
              }} >
                <FontAwsome name='files-o'  size={30}  />
                <Text style={{
                  marginLeft:10,
                  marginTop:10,
                }} >Official Report</Text>
              </TouchableOpacity>
            {reportTrigger&&(
              <Reports/>
            )}

          <TouchableOpacity style={{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#ACBEA3',
            marginTop:5,
            width:'96%',
            borderRadius:5,
            marginLeft:'2%',
            padding:10,
            textAlign:'center',
              }} onPress={()=>{
                settrackerTrigger(true);
              }} >
                <FontAwsome name='hacker-news'  size={30}  />
                <Text style={{
                  marginLeft:10,
                  marginTop:10,
                }} >Track Alert</Text>
              </TouchableOpacity>
          {trackerTrigger&&(
             <AlertTracker/>
          )}

          <TouchableOpacity style={{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#ACBEA3',
            marginTop:5,
            width:'96%',
            borderRadius:5,
            marginLeft:'2%',
            padding:10,
            textAlign:'center',
              }} >
                <FontAwsome name='gears'  size={30}  />
                <Text style={{
                  marginLeft:10,
                  marginTop:10,
                }} >Settings</Text>
              </TouchableOpacity>

             <TouchableOpacity style={{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#ACBEA3',
            marginTop:5,
            width:'96%',
            borderRadius:5,
            marginLeft:'2%',
            padding:10,
            textAlign:'center',
              }} >
                <FontAwsome name='globe'  size={30}  />
                <Text style={{
                  marginLeft:10,
                  marginTop:10,
                }} >AlatPres Web</Text>
              </TouchableOpacity>

              <Text style={{
                textAlign:'center',
                fontSize:20,
              }}>Alatpres </Text>
      </ScrollView>
    )
  }


const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:"100%",
       display:'flex',
       flexDirection:'column',
        backgroundColor:"white",
        marginTop:-56,
        
        
        
    }
})
