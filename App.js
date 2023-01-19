import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button,StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native';
import{alertsList}from'./alerts.json'
import FontAwsome from '@expo/vector-icons/FontAwesome';
import CreateAlertForm from '../AlatPres/components/CreateAlertForm'
import img2 from ".././AlatPres/assets/favicon.png" 
import { SelectList } from 'react-native-dropdown-select-list';

import SideMenu from './components/SideMenu';

export default function App() {
  const [Home,setHome]=useState(true);
  const[horizontal,setHorizontal]=useState(false);
  const[cyber,setCyber]=useState(false);
  const[typez,setTypez]=useState("");
  const [alertFeeds,setAlertFeeds]=useState(true)
  const[viewMode,setViewMode]=useState(true);

  const alerts = alertsList;

  const responseSystem={
      government:{
      nationalOfficers:{
      respodent:"Dci Kenya ",
      dail:' +2547985346263 & +254765434590',
      region:"Country Wide",
      }},
      
      ngo:{
        respodent:"Red Cross",
      dail:"+2547615671209 & +25478963464510",
      region:"Country Wide",
      }
  }
  const [singleAlert,setSingleAlert]=useState(false);
  const[showMenu,setShowMenu]=useState(false)
  const [hideBar,setHideBar]=useState(true);
  const data=[
    {key:1,value:"Kamasutra"},
    {key:2,value:"Kamasutra"},
    {key:3,value:"Kamasutra"},
    {key:4,value:"Kamasutra"},
    {key:5,value:"Kamasutra"},
    {key:6,value:"Kamasutra"},
    {key:7,value:"Kamasutra"},
    {key:8,value:"Kamasutra"},
    {key:9,value:"Kamasutra"},
    {key:10,value:"Kamasutra"},
    {key:11,value:"Kamasutra"},
    {key:12,value:"Kamasutra"},

  ]
  const fd = [
      {
      "id":1,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires 40 Fires since January the 1st`,
      "statistic":`Fires Reduced by :${Math.floor(70/80)}`
    },
    {
      "id":2,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
    {
      "id":3,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
    {
      "id":4,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm"
    },
     {
      "id":5,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm"
    },
     {
      "id":6,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":7,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":8,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":9,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":10,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":11,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":12,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":13,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":14,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    },
     {
      "id":15,
      "type":"child abduction",
      "area":"Mombasa",
      "reportedtime":"12:00pm",
      "header":"Saika child abduction",
      "date":"22/04/2022",
      "timesent":"12:00pm",
      "location":"144N 200W 400E 322S",
      "Description":"Kids were out playing but a van pulled over and abducted them.",
      "alertlevel":"Emergecy",
      "frequency":`Rate of fires:${Math.floor()}`
    }

    ];
    const [single,setSingle]=useState("")
    const[header,setHeader]=useState(true)
  return (
    
    <View style={styles.container}>

      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <View style={styles.headbar}></View>
      {header&&<View style={{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        height:60,
        justifyContent:'space-evenly',
        backgroundColor:'white',
        color:'white'
        
        
        
      }} >
     {hideBar&&(<Text style={{
        marginTop:20,
        marginLeft:10,
        marginRight:10
      }}
       onPress={()=>{
        console.log(`qweest`)
        setShowMenu(true);
        setHideBar(false);
        setViewMode(false);
        setAlertFeeds(false)
        
      }} > <FontAwsome size={30} name='bars' style={{
        marginLeft:'-150px',
        color:'blue'
      }}  /></Text>)}
      <Image style={{
        width:'80%',
        height:52,
        
        borderRadius:5,
        

      }} source={require('../AlatPres/assets/name_alatpre.png')} />
     
      <Image style={{
        width:40,
        height:40,
        borderRadius:100,                     
        marginTop:5,
        marginRight:5,
      }} source={require('./assets/alatpres_logo.png')}/>
     </View>}
      {viewMode&&(
        <View  style={{
          backgroundColor:'white',
          height:80,
          width:'100%',
        }} >
          <View style={{
        marginTop:5,
        backgroundColor:'white',
        height:50,
        width:'98%',
        marginLeft:"1%",
        borderRadius:10,
        marginBottom:5,
        display:'flex',
        flexDirection:'row',
     
      }}>
          <TouchableOpacity style={styles.veiwfeed} onPress={
            ()=>{
             setAlertFeeds(true);
             setHorizontal(false) 
            }
          } >
            
            <Text style={{
              marginTop:20,
            }}>Alerts</Text>
            <FontAwsome name='bell-o' size={30} style={{
              marginTop:15
            }}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addalert} onPress={
            ()=>{
              setHorizontal(true)
              setAlertFeeds(false);
              
            }
          } >
            <Text style={{
              marginTop:20,
               color:'white'
            }}>Make Alert</Text>
            <FontAwsome name='bullhorn' size={30} style={{
              marginTop:15,
               color:'white'
            }} />
          </TouchableOpacity>
        </View>

     
        </View>
      )}
     
        {horizontal&&(<ScrollView style={styles.basebody} >
          <View>
          <SelectList data={data}
            boxStyles={{
              zIndex:2,
              backgroundColor:'gray',
              marginBottom:5,
              
             
            }}
            placeholder='filter alerts'
          />
         
        </View>
         {alerts.map(alert=>(
        <TouchableOpacity key={alert.id} onPress={()=>{
          setCyber(true)
          setTypez(alert.type)
          }} 
          style={{
            backgroundColor:"white"
          }}
          >
          <Text style={{
            marginLeft:20,
            marginTop:2
            
            }} >post {alert.type} ALert</Text>
          <View style={styles.alertsI}>
            <Text style={{
              marginTop:15,
              marginLeft:20,
              }} >Add {alert.type} alert here</Text>
            <FontAwsome name="caret-down" style={{
              marginTop:20,
              marginLeft:5,

            }}  />
            <Text style={{
              marginTop:17,
              marginLeft:10,
              color:'blue',
            }}> Location  </Text>
            <View style={{
              display:'flex',
              flexDirection:'row',
              backgroundColor:'black',
              color:'white',
              marginLeft:2,
              borderRadius:50,
              width:95,
              height:40,
              marginTop:5,
            }}>
            <FontAwsome name="location-arrow" style={{
              marginLeft:5,
              marginRight:5,
              marginTop:10,
              color:'white'
            }}/>
            
            <Text style={{
              marginTop:10,
              color:'white'
            }} >{alert.locale}</Text></View>
          </View>
        </TouchableOpacity>
      ))}
    
      </ScrollView>)}

      {alertFeeds&&(<ScrollView>
           <View>
          <SelectList data={data}
            boxStyles={{
              zIndex:2,
              backgroundColor:'gray',
              marginBottom:5,
              
            }}
            placeholder='filter alerts'
            style={{
              color:'white'
            }}
          />
         
        </View>
        <View style={{
          display:'flex',
          flexDirection: 'row',
          
          backgroundColor:'white',
        }} >
          <Text style={{
            backgroundColor:'white',
            width:'20%',
            marginLeft:'2%',
            padding:10,
          }}>Alert level</Text>
          <Text style={{
            backgroundColor:'white',
            width:'20%',
            marginLeft:'5%',
            padding:10,
          }}>Alert Type</Text>
          <Text style={{
            backgroundColor:'white',
            width:'20%',
            marginLeft:'5%',
            padding:10,
          }} >Alert Region</Text>
          <Text style={{
            backgroundColor:'white',
            width:'20%',
            marginLeft:'5%',
            padding:10,
          }} >Reported Time</Text>
          </View>
        {fd.map(feed=>(
          <TouchableOpacity key={feed.id} 
          style={{
            backgroundColor:'#ACBEA3',
            marginTop:4,
            width:400,
            marginLeft:5,
            marginRight:5,
            display:'flex',
            flexDirection:'row',
            height:50,
            borderRadius:5,
            justifyContent:'space-evenly'
          
          }} onPress={()=>{
            setSingleAlert(true)
            setSingle(feed.type)
          }}
          >
            <FontAwsome name='warning' style={{
              marginTop:15,
              color:'red'
            }} size={30} />
            <Text style={{
              marginTop:15
            }}>{feed.type}</Text>
            <Text style={{
              marginTop:15
            }}>{feed.area}</Text>
            <Text style={{
              marginTop:15
            }}>{feed.reportedtime} </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>)}
        
         
         {showMenu&&(<SideMenu setHeader={setHeader} setShowMenu={setShowMenu} setHideBar={setHideBar} setViewMode={setViewMode} setAlertFeeds={setAlertFeeds} />)}
      
       {cyber&&(
      <View style={{
        height:'100%',
        width:410,
        backgroundColor:'white',
        position:'absolute',
        display:'flex',
        flexDirection:'column',
        

        
      }}>
        <FontAwsome size={20} name='times' onPress={()=>{setCyber(false)}}
        style={{
          marginLeft:10,
          marginTop:20,
          height:20,
          marginBottom:10,
  
        }}
        />
        
        <CreateAlertForm typez={typez} />
      <Text style={
        {
          color:'white',
          backgroundColor:"black",
          height:50,
          width:100,
          marginLeft:20,
          textAlign:'center',
          justifyContent:'space-evenly',
          padding:12,
          borderRadius:5,
          marginTop:2,
          marginBottom:2,
         
        }
      } onPress={()=>setCyber(false)} >
        <FontAwsome name='arrow-left'   />
        Go Back</Text>
        <View
        style={{
          backgroundColor:'#6A8E7F',
          height:200,
        }}
        >
          <Text style={{
            color:'red',
            fontFamily:'monospace',
          }} >Important Emergency Hotline  Numbers:</Text>
          <Text style={{
            color:'black',
            fontFamily:'monospace',
            marginTop:5,
            marginLeft:5,
          }} >{responseSystem.government.nationalOfficers.respodent}:{responseSystem.government.nationalOfficers.dail} </Text>
          <Text style={{
            color:'black',
            fontFamily:'monospace',
            marginTop:3,
            marginLeft:5,
          }} >{responseSystem.ngo.respodent}:{responseSystem.ngo.dail} </Text>
        </View>
      </View>
     )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    color:'red',
    justifyContent: 'center',
  },
  headbar:{
    width:'100%',
    height:1,
    backgroundColor:'white',
    color:'black',
    marginTop:40,
    marginBottom:1
  
  },
  standardTextHeader:{
    color:'white',
    width:178,
    backgroundColor:'darkblue',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    height:50,
    padding:13,
    fontFamily:'monospace',
    
    
   
  },
  basebody:{
    backgroundColor:'#ACBEA3',
    width:'100%',
    height:750,
    marginTop:1,
    flex:4,
  },
  alertsI:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#ACBEA3',
    marginTop:5,
    marginLeft:'1%',
    width:"98%",
    height:50,
    marginBottom:2,
    borderRadius:50,
    
    borderColor:'black',
    borderStyle:'solid',
    
  },
  veiwfeed:{
    width:'46%',
    backgroundColor:'red',
    marginLeft:'2%',
    marginRight:'2%',
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  
  addalert:{
    width:'46%',
    backgroundColor:'black',
    marginLeft:'2%',
    marginRight:'2%',
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
   
  }
  
});
