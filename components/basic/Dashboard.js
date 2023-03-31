
import { useEffect, useState } from "react";
import {
     View,ScrollView,
      TouchableOpacity,
      Text, 
      Button,
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Image,
    StatusBar,
    Switch,
    BackHandler
 } from "react-native";
import {stats,geoData,top,alerts,groups} from "../../mockData/metrics";
import Mapview from "../Mapview";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import CreateResponseGroup from "./pages/CreateResponseGroup";
import JoinResponseGroup from "./pages/JoinResponseGroup";
import CreateAlertForm from "./pages/CreateAlertForm";
import ResponseProviders from "./pages/ResponseProviders";
import axios from "axios";
import Sidebar from "./Sidebar";
import Resgroups from "./pages/Resgroups";



export default function Dashboard({setAccessLocation,showRegistrationPage,setBasicDashboard}){
    const[fecthedAlerts,setFetchedAlerts]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    async function fetchAlerts(){
      await axios.get("http://192.168.100.35:3500/alatpres/api/alerts")
      .then(response=>{setFetchedAlerts(response.data)})
      .catch(error=>{alert(error)})
      .finally(()=>{setIsLoading(true)})
        
           
    }

  const[timeOfDay,setTimeOfDay]=useState([])
  const [ampm,setAmPm]=useState("")
  const [accurateTime,setAccurateTime]=useState([])
  const[user,setUser]=useState("Joe")
  async function timing(){
    
    const date = await new Date();
    const hours = await date.getHours();
    const minutes= await date.getMinutes()
    const seconds = await date.getSeconds()
    const time = `${hours}:${minutes}`
    setAccurateTime(time)
    //alert(`${accurateTime}`)

    if (hours < 12) {
       setTimeOfDay("morning")
       setAmPm("AM")
       //alert(`${timeOfDay}`)  
      } else if (hours >= 12 && hours < 17) {
       setTimeOfDay("Afternoon")
       setAmPm("NOON")
       //alert(`${timeOfDay}`)  
      } else if(hours >= 17 && hours < 20) {
        setTimeOfDay("Evening")
        //alert(`${timeOfDay}`)
        setAmPm("PM")  
      }
      else {
        setTimeOfDay(Night)
        setAmPm('PM')
      }
    
  }

//useEffect
useEffect(()=>{
    //fetchAlerts()
    timing()
    userLocation()
    setAccessLocation(async()=>{
        let{status}= await Location.requestForegroundPermissionsAsync()  ;
    if(status !== 'granted'){
        setPermissionDenied(`Permission to access location was denied`);
    }
    
    });
},[]);
//useStates
const[offlineMsg,showOgglineMsg]=useState(false)
const[header,setHeader]=useState(true);

//location services
const[userRegion,setUserRegion]=useState({
    latitude:37.78825,
    longitude:-122.4324,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421,
});
const[permissionDenied,setPermissionDenied]=useState();

async function userLocation(){
    //alert(`Obtaining you Location, Enable location services if it is off`)
    let{status}= await Location.requestForegroundPermissionsAsync()  ;
    if(status !== 'granted'){
        setPermissionDenied(`Permission to access location was denied`);
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
    setUserRegion({
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta:0,
        longitudeDelta:0.0421,
    })
    
}


//segment1
const[segment1,setSegemnt1]=useState(true);
const[geoInfo,setGeoInfo]=useState(true);
const[showMetrics,setShowMetrics]=useState(true);
const[ tp5metrics,setTp5Metrics]=useState(true)
const[allMetrics,setAllMetrics]=useState(false)
const[areaMap,setAreaMap]=useState(true)
const[map,setMap]=useState(true)
//segment 2
const[segment2,setSegemnt2]=useState(true);
const[showAlerts,setShowAlerts]=useState(false);
//segment 3
const[segment3,setSegemnt3]=useState(true);
const[tab1,setTab1]=useState(true);
const[tab2,setTab2]=useState(true);
const[tab3,setTab3]=useState(true);
const [createResponseGroup,renderCreateResponseGroup]=useState(false);
const [joinResponseGroup,renderJoinResponseGroup]=useState(false);
const [responseProviders,renderResponseProviders]=useState(false);
const [createAlert,renderCreateAlert]=useState(false);
const [allResponseGroups,renderAllResponseGroups]=useState(false);

//segment 4
const[segment4,setSegemnt4]=useState(false);
const[reportsContainer,setReportsContainer]=useState(true);
const[showOfficialReports,setShowOfficialReports]=useState(true);
const[showLocalReports,setShowLocalReports]=useState(true);
const[showGeneratedReports,setShowGeneratedReports]=useState(true);
//segment5
const[segment5,setSegemnt5]=useState(true);
const[showResponseContacts,setShowResponseContacts]=useState(true)
const[overView,setOverView]=useState(false);//setable to true
const[statusBar,setStatusBar]=useState(true)
const[sidebar,renderSidebar]=useState(false) //change to false
const[dropU,setDropU]=useState(false)
const[dropD,setDropD]=useState(true)
const[notificationArea,setNotificationArea]=useState(false)
const[bell,setBell]=useState(true)
const[timesNotification,seTimesNotification]=useState(false)

const[showBars,setShowBars]=useState(true)
const[closeS,setCloseS]=useState(false)

//switch
const[drkMode,setDrkMode]=useState(true)
const[incMode,setIncMode]=useState(true)
const[sosArea,setSosArea]=useState(true)
const[SwitchLocation,setSwitchLocation ]=useState(true)
const[enableDark,setEnableDark]=useState(false)
const[enableLoc,setEnableLoc]=useState(false)
const[enableInc,setEnableInc]=useState(false)
const[enableSOS,setEnableSOS]=useState(false)

function toogleSwitchDrk(){
    
   setEnableDark(previousState=>!previousState);
   
    
}

const[]=useState(false)
function toogleSwitchLLoc(){
    
    
    setEnableLoc(previousState=>!previousState)
     
 }
 function toogleSwitchLInc(){
    
    
    setEnableInc(previousState=>!previousState)
     
 }
 function toogleSwitchSOS(){
    
    
    setEnableSOS(previousState=>!previousState)
     
 }
    return(
        
       <SafeAreaView>
        {statusBar&& <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#1e8ee1" translucent={true} />}

        <View  style={{
          width:'100%',
          display:'flex',
          flexDirection:'row',
          height:60,        
          backgroundColor:'white',
          marginTop:'5.8%',
          textAlign:'center',
          borderStyle:'solid',
          borderColor:'black',
          borderWidth:1.5,
        }} >
          <TouchableOpacity style={{
            width:'5%',
            backgroundColor:'white',
            height:57,
          }} >
            {showBars&&(<FontAwsome name='bars' style={{
              marginTop:20,
              marginLeft:5,
            }} size={20} onPress={()=>{
              renderSidebar(true);
              setCloseS(true)
              setShowBars(false)
              setOverView(false)
              setDropU(false)
              setDropD(true)
            }} />)}
            {closeS&&(<FontAwsome name='times' style={{
              marginTop:20,
              marginLeft:5,
            }} size={20} onPress={()=>{
              renderSidebar(false);
              setCloseS(false)
              setShowBars(true)

            }} />)}
          </TouchableOpacity>
           <View style={{
            width:'78%',
            height:57,
           }} >
            <Image source={require('../../assets/name_alatpre.png')} style={{
              width:'99.9%',
              height:57,
              padding:5,
            }} />
           </View>
           <View style={{
            width:'10%',
            backgroundColor:'white',
            height:57,
          }} >
            {dropU&&(<FontAwsome name='angle-up' size={35} style={{
            paddingTop:10,
            paddingLeft:10,
           }} onPress={()=>{
            setOverView(false)
            setDropU(false)
            setDropD(true);
           }} />)}
           {dropD&&(<FontAwsome name='angle-down' size={35} style={{
            paddingTop:10,
            paddingLeft:10,
           }} onPress={()=>{
            setOverView(true)
            setDropU(true)
            setDropD(false)
            renderSidebar(false)
            setCloseS(false)
            setShowBars(true)
           }} />)}
            
          </View>
        {bell&&( <View style={{
            backgroundColor:"white",
            width:"10%"
         }} ><FontAwsome name='bell' size={20} style={{
            paddingTop:15,
            paddingLeft:3,
            color:"#1e8ee1"
           }} onPress={()=>{
           setNotificationArea(true)
           seTimesNotification(true)
           setBell(false)
           }} /></View>)}
           {timesNotification&&( <View style={{
            backgroundColor:"white",
            width:"10%"
         }} ><FontAwsome name='times' size={20} style={{
            paddingTop:22,
            paddingLeft:6,
           }} onPress={()=>{
           setNotificationArea(false)
           seTimesNotification(false)
           setBell(true)
           }} /></View>)}
        </View>
        {overView&&(
            <View style={{
                marginBottom:5,
                backgroundColor:'#1e8ee1', 
                borderWidth:1.5,
                borderColor:"white"               
                
            }} >
               
               <View style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-evenly"
               }} >
                {drkMode&&(
                    <View style={{
                        display:"flex",
                        flexDirection:"row",
                       
                        marginTop:5,
                        
                        
                        width:"40%",
                       }} >
                        <Switch value={enableDark} onValueChange={toogleSwitchDrk} style={{
                           
                        }} />
                        <Text style={{
                            marginTop:14,
                            marginLeft:10,
                            fontSize:15,
                        }} >Turn on Dark  mode</Text>
                       </View>
                )}
                {SwitchLocation&&(<View style={{
                display:"flex",
                flexDirection:"row",
                marginLeft:"10%",
                marginTop:5,
                
                
                width:"40%",
               }} >
                <Switch value={enableLoc} onValueChange={toogleSwitchLLoc} style={{
                   
                }} />
                <Text style={{
                    marginTop:14,
                    marginLeft:10,
                    fontSize:15,
                }} >Enable Location</Text>
               </View>)}
               </View>
               
               <View style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-evenly"
               }} >
                {incMode&&(
                    <View style={{
                        display:"flex",
                        flexDirection:"row",
                       
                        marginTop:5,
                        
                        
                        width:"40%",
                       }} >
                        <Switch value={enableInc} onValueChange={toogleSwitchLInc} style={{
                           
                        }} />
                        <Text style={{
                            marginTop:14,
                            marginLeft:10,
                            fontSize:15,
                        }} >Enable Incognito Mode</Text>
                       </View>
                )}
                {sosArea&&(<View style={{
                display:"flex",
                flexDirection:"row",
                marginLeft:"10%",
                marginTop:5,
                
                
                width:"40%",
               }} >
                <Switch value={enableSOS} onValueChange={toogleSwitchSOS} style={{
                   
                }} />
                <Text style={{
                    marginTop:14,
                    marginLeft:10,
                    fontSize:15,
                }} >Send SOS</Text>
               </View>)}
               </View>

               <View style={{
                display:"flex",
                flexDirection:"row",
                marginTop:10,
                marginLeft:"10%",
                
                width:"60%",
               }}>
               <Text> Create new account ?  <Text style={{
                color:"white"
               }} onPress={()=>{
                showRegistrationPage(true);
                setBasicDashboard(false);
                setStatusBar(false);
            }} >Sign up</Text></Text>
               </View>
               <View style={{
                display:"flex",
                flexDirection:"row",
                marginTop:10,
                marginLeft:"10%",
                marginBottom:10,
                width:"60%",
               }}>
               <Text> Already have an account ? <Text style={{
                color:"white"
               }} >Sign in</Text></Text>
               </View>


              
            </View>
        )}
         <ScrollView  style={{
            backgroundColor:'white',
            height:'90%',
            backgroundColor:"white",
            borderColor:"#1e8ee1",
            borderStyle:"solid",
            borderWidth:1.0
            
            
         }} >
        
         
   

        {segment3&&(<View style={{
            
            backgroundColor:'white',
            marginTop:5,
            width:'98%',
            marginLeft:'1%'
            
        }} >
               <View style={{
                display:"flex",
                flexDirection:'row',
               

               }} >
               <Text style={{
                    backgroundColor:'white',
                    paddingLeft:"5%",
                   
                }} >Good {timeOfDay} {user} </Text>
              
                 <Text style={{
                    backgroundColor:'white',
                    textAlign:'center',
                    paddingLeft:"50%"
                }} >{accurateTime} {ampm} </Text>
               </View>
               <Text style={{
                    backgroundColor:'#1e8ee1',
                    textAlign:'center',
                    borderStyle:'solid',
                    borderWidth:2,
                    borderColor:'black',

                }} >Dashboard </Text>
                {tab1&&(<View style={{
                    backgroundColor:'white',
                    height:70,
                    borderStyle:'solid',
                    borderWidth:2,
                    borderColor:'black',
                    display:'flex',
                    flexDirection:'row'
                }} >
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        width:'40%',
                        marginLeft:'5%',
                        marginTop:5,
                        marginBottom:5,
                        borderRadius:20,
                        borderStyle:'solid',
                        borderWidth:1.5,
                    }} onPress={()=>{
                        renderCreateResponseGroup(true);
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:18,
                        }}>Create Response Group </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        width:'40%',
                        marginLeft:'10%',
                        marginRight:'5%',
                        marginTop:5,
                        marginBottom:5,
                        borderRadius:20,
                        borderStyle:'solid',
                        borderWidth:1.5,
                    }} onPress={()=>{
                        renderJoinResponseGroup(true);
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:12,
                        }}>View/Join Response Group</Text>
                    </TouchableOpacity>
                </View>)}

                {tab2&&(<View style={{
                    backgroundColor:'white',
                    height:70,
                    borderStyle:'solid',
                    borderWidth:2,
                    borderColor:'black',
                    display:'flex',
                    flexDirection:'row'
                }}>
                    <TouchableOpacity style={{
                         backgroundColor:'#1e8ee1',
                         width:'40%',
                         marginLeft:'5%',
                         marginTop:5,
                         marginBottom:5,
                         borderRadius:20,
                         borderStyle:'solid',
                         borderWidth:1.5,
                    }}  onPress={()=>{
                        renderCreateAlert(true);
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:18,
                        }} >Create Alert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                         backgroundColor:'#1e8ee1',
                         width:'40%',
                         marginLeft:'10%',
                         marginRight:'5%',
                         marginTop:5,
                         marginBottom:5,
                         borderRadius:20,
                         borderStyle:'solid',
                         borderWidth:1.5,
                    }} onPress={()=>{
                        renderResponseProviders(true)
                    }}>
                        <Text style={{
                         paddingTop:20,
                         textAlign:'center',
                         fontSize:13, 
                            
                        }}  >Response Providers</Text>
                    </TouchableOpacity>
                </View>)}

                {tab3&&(<View style={{
                    backgroundColor:'white',
                    height:70,
                    borderStyle:'solid',
                    borderWidth:2,
                    borderColor:'black'
                }}>
                    <TouchableOpacity style={{
                         backgroundColor:'#1e8ee1',
                         width:'96%',
                         marginLeft:'2%',
                         height:50,
                         marginTop:5,
                         marginBottom:5,
                         borderRadius:20,
                         display:'flex',
                         flexDirection:'row',
                        justifyContent:'space-between',
                        borderStyle:'solid',
                        borderWidth:1.5,

                    }} onPress={()=>{
                        setSegemnt4(true);
                        
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:15,
                            paddingLeft:35,
                        }} >Report</Text>
                        <FontAwsome name='caret-down' size={30} style={{
                             paddingTop:10,
                             paddingRight:15,
                        }} />
                    </TouchableOpacity>
                   
                    
                </View>)}
                {segment4&&(
            <View style={{
                
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-evenly',
                backgroundColor:'white',
               
                height:120,
                borderStyle:'solid',
                borderWidth:1.5,
                marginBottom:5,
            }} >
                <FontAwsome  name='times' size={30} style={{
                    paddingLeft:10,
                }}  onPress={()=>{
                    setSegemnt4(false);
                    
                }} />
                <Text style={{
                    height:20,
                    textAlign:'center',
                   
                }} >Alerts Reports</Text>
                {reportsContainer&&(
                    <View style={{
                        display:'flex',
                        flexDirection:'row',
                        backgroundColor:'white',
                        height:80,
                        borderStyle:'solid',
                        borderWidth:1.5,
                    }} >
                           {showOfficialReports&&(
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        height:65,
                        marginTop:7.5,
                        width:'30%',
                        marginLeft:'3%',
                        borderRadius:10,
                        borderStyle:'solid',
                        borderWidth:1.5,
                    }} >
                        <Text style={{
                            paddingTop:20,
                            paddingLeft:10,
                        }} >Official Reports</Text>
                    </TouchableOpacity>
                )}
                {showLocalReports&&(
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        height:65,
                        marginTop:7.5,
                        width:'30%',
                        marginLeft:'2%',
                        borderRadius:10,
                        borderStyle:'solid',
                        borderWidth:1.5,
                    }}>
                        <Text style={{
                            paddingTop:20,
                            paddingLeft:10,
                        }} >Other Reports</Text>
                    </TouchableOpacity>
                )}
                {showGeneratedReports&&(
                     <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        height:65,
                        marginTop:7.5,
                        width:'30%',
                        marginLeft:'2%',
                        marginRight:'3%',
                        borderRadius:10,
                        borderStyle:'solid',
                        borderWidth:1.5,
                     }} >
                        <Text style={{
                            paddingTop:20,
                            paddingLeft:10,
                        }} >Generate Alert Report</Text>
                     </TouchableOpacity>
                )}
                    </View>
                )}
            </View>
        )}
        </View>)}

        {segment2&&(<View style={{
            backgroundColor:'#1e8ee1',
            marginTop:12,
            width:'98%',
            marginLeft:'1%'
            
        }} >
            <TouchableOpacity style={{
                height:50,
                display:'flex',
                flexDirection:'row',
                borderStyle:'solid',
                borderColor:'black',
                borderWidth:1.5,
            }} onPress={()=>{
                setShowAlerts(true)
            }} >
                <Text style={{
                    textAlign:'center',
                    paddingTop:12,
                    paddingLeft:45,
                    fontSize:17,
                    letterSpacing:2
                }} >Latest Alerts</Text>
                <FontAwsome name='caret-down' size={30} style={{
                    paddingTop:10,
                    paddingLeft:200,
                }} />
            </TouchableOpacity>
            {showAlerts&&(
                <ScrollView style={{
                    height:200,
                    backgroundColor:'#1e8ee1',
                    borderStyle:'solid',
                    borderColor:'black',
                    borderWidth:1.5
                }} >
                    <FontAwsome name='times' size={30} onPress={()=>{
                        setShowAlerts(false);
                    }} />
                  <FlatList 
                    data={alerts}
                    keyExtractor={({id},index)=>id}
                    renderItem={({item})=>(
                        <View style={{
                            justifyContent:'space-evenly'
                        }} >
                            <Text style={{
                                backgroundColor:'white',
                                width:'100%',
                                height:20,
                                marginTop:3,
                                justifyContent:'space-evenly'
                                
                            }} >
                                {item.name},{item.daterepoted}
                            </Text>
                        </View>
                    )}
                  />
                </ScrollView>
            )}    
        </View>)}
        
         {segment1&&(
            <View style={{
                backgroundColor:'green',
                marginTop:'2%',
                width:'98%',
                marginLeft:'1%',
                
            }} >
                
                {showMetrics&&(
                    <View style={{
                        backgroundColor:'grey',
                        borderStyle:'solid',
                        borderColor:'black',
                        borderWidth:1.5
                    }} >
                   <Text  style={{
                        backgroundColor:'white',
                        height:20,
                        textAlign:'center'
                    }}>Alerts Statistics in the area</Text>
                    {tp5metrics&&(<View style={{
                        display:'flex',
                        flexDirection:'column',
                        borderStyle:'solid',
                        borderColor:'black',
                        borderWidth:1.5
                    }} >
                        <View style={{
                              display:'flex',
                              flexDirection:'row',
                              height:50,
                              justifyContent:'space-evenly',
                              borderStyle:'solid',
                              borderColor:'white',
                              borderWidth:1.5,
                              backgroundColor:'#1e8ee1',
                             
                              
                        }}>
                        {top.map(all=>(
                            <View key={all.id} style={{
                                
                                width:'20%',
                                display:'flex',
                                flexDirection:'row',
                                borderStyle:'solid',
                                borderWidth:.38,
                                borderColor:'white',
                                borderRadius:2,
                                
                                
                            }} >
                                <Text style={{
                                    color:'black',
                                    textAlign:'center',
                                    paddingTop:12,
                                    paddingLeft:15,
                                }}>{all.alert}</Text>
                                <Text style={{
                                    color:'black',
                                    textAlign:'center',
                                    paddingTop:12,
                                    paddingLeft:15,
                                }}>{all.frequency}</Text>
                            </View>
                        ))}
                        </View>
                    <TouchableOpacity 
                    onPress={()=>{
                        setAllMetrics(true)
                        
                    }} style={{
                        height:20,
                        backgroundColor:'white',
                    }}
                    ><Text style={{
                        color:'blue',
                        textAlign:'center',
                    }} >Show all stats</Text></TouchableOpacity>
                    </View>)}
                    {allMetrics&&(<View>
                        <ScrollView style={{
                            height:200,
                            backgroundColor:'#1e8ee1',
                        }} >
                         <FontAwsome name='times' size={20} onPress={()=>{
                            setAllMetrics(false)
                         }} />
                          {stats.map(all=>(
                            <View key={all.id} style={{
                                display:'flex',
                                flexDirection:'row',
                                backgroundColor:'white',
                                marginTop:5,
                                width:'96%',
                                marginLeft:'2%',
                                height:30
                            }} >
                                <Text style={{
                                    textAlign:'center',
                                }}>{all.alert}</Text>
                                <Text style={{
                                    textAlign:'center',
                                }}>{all.frequency}</Text>
                            </View>
                          ))}
                        </ScrollView>
                    </View>)}
                    {areaMap&&(<View
                    style={{
                        height:300,
                        
                    }}
                    >
                        
                    
                    <Text style={{
                        textAlign:'center',
                        backgroundColor:'white',
                        
                        }} >hint: Double tap to zoom & pinch to zoom out, tap red marker </Text>

                    <MapView style={{
                        widt:"100%",
                        height:250
                    }} region={userRegion} >
                    <Marker onPress={userLocation} coordinate={userRegion} title='you' />
                    
                 
                    </MapView>
                    <Button title="Ping your Location" onPress={userLocation} />
                   
                    
                    </View>)}
                    
                    </View>
                )}
            </View>
        )}

        {sidebar&&<Sidebar  renderSidebar={renderSidebar}  />}

        {responseProviders&&<ResponseProviders renderResponseProviders={renderResponseProviders} />}
        {createResponseGroup&&<CreateResponseGroup renderCreateResponseGroup={renderCreateResponseGroup} />}
        {joinResponseGroup&&(<Resgroups renderJoinResponseGroup={renderJoinResponseGroup}  />)}
        {createAlert&&(<CreateAlertForm renderCreateAlert={renderCreateAlert} />)}

        </ScrollView>
        
        </SafeAreaView>
        
        
    
    );
};