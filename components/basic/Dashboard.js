
import { useEffect, useState } from "react";
import { View,ScrollView, TouchableOpacity,Text, Button } from "react-native";
import {stats,geoData,top,alerts,groups} from "../../mockData/metrics";
import Mapview from "../Mapview";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import CreateResponseGroup from "./pages/CreateResponseGroup";

export default function Dashboard(){
//useEffect
useEffect(()=>{
    userLocation()
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
const [joinResponseGroup,renderoinResponseGroup]=useState(false);
const [responders,renderResponders]=useState(false);
const [createAlert,renderCreateAlert]=useState(false);
const [allResponseGroups,renderAllResponseGroups]=useState(false);

//segment 4
const[segment4,setSegemnt4]=useState(true);
const[reportsContainer,setReportsContainer]=useState(true);
const[showOfficialReports,setShowOfficialReports]=useState(true);
const[showLocalReports,setShowLocalReports]=useState(true);
const[showGeneratedReports,setShowGeneratedReports]=useState(true);
//segment5
const[segment5,setSegemnt5]=useState(true);
const[showResponseContacts,setShowResponseContacts]=useState(true)

    return(
       
       
         <ScrollView  style={{
            backgroundColor:'white',
            height:'90%',
            
            
         }} >
        

   

        {segment3&&(<View style={{
            
            backgroundColor:'red',
            marginTop:5,
            width:'98%',
            marginLeft:'1%'
            
        }} >
                <Text style={{
                    backgroundColor:'white',
                    textAlign:'center',
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
                        borderRadius:20
                    }} onPress={()=>{
                        renderCreateResponseGroup(true);
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:20,
                        }}>Create Response Group </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        width:'40%',
                        marginLeft:'10%',
                        marginRight:'5%',
                        marginTop:5,
                        marginBottom:5,
                        borderRadius:20
                    }}>
                        <Text style={{
                            textAlign:'center',
                            paddingTop:20,
                        }}>Join Response Group</Text>
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
                         borderRadius:20
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:20,
                        }} >Create Alert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                         backgroundColor:'#1e8ee1',
                         width:'40%',
                         marginLeft:'10%',
                         marginRight:'5%',
                         marginTop:5,
                         marginBottom:5,
                         borderRadius:20
                    }} >
                        <Text style={{
                         paddingTop:20,
                         textAlign:'center',
                         fontSize:13, 
                            
                        }} >Response Providers</Text>
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
                         width:'90%',
                         marginLeft:'5%',
                         height:50,
                         marginTop:5,
                         marginBottom:5,
                         borderRadius:20
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:15
                        }} >All Response Groups</Text>
                    </TouchableOpacity>
                </View>)}
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
                   {alerts.map(alert=>(
                    <TouchableOpacity key={alert.id} style={{
                        display:'flex',
                        flexDirection:'row',
                        height:30,
                        backgroundColor:'white',
                        marginTop:10,
                        width:'98%',
                        marginLeft:'1%',  
                    }} >
                        <Text>{alert.name}</Text>
                        <Text>{alert.area}</Text>
                        <Text>{alert.daterepoted}</Text>
                    </TouchableOpacity>
                   ))}
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

        {segment4&&(
            <View style={{
                marginTop:12,
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-evenly',
                backgroundColor:'white',
                width:'96%',
                marginLeft:'2%',
                height:100,
                borderStyle:'solid',
                borderWidth:1.5,
                marginBottom:5,
            }} >
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

        {createResponseGroup&&<CreateResponseGroup renderCreateResponseGroup={renderCreateResponseGroup} />}
        </ScrollView>
        
        
        
    
    );
};