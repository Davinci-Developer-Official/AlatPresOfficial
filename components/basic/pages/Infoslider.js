import { useState } from "react";
import { SafeAreaView, TouchableOpacity, View,Text,Image, Button } from "react-native";
import FontAwsome from "@expo/vector-icons/FontAwesome"
import {io} from "socket.io-client";
import { useEffect } from "react";

export default function Infoslider({showRegistrationPage,setIntro}){
    const baseUrl="https://b3c1-102-219-208-195.ngrok-free.app"
    const socket=io(`${baseUrl}`)
    
    function verifyRegistered(){
        socket.on("isRegistered",args=>{
            setIsRegistered(args)
            alert(args)
            
        })
        if(isRegistered == "true"){
            setRegister(false)
        }
        
    }

    useEffect(()=>{
      verifyRegistered()
       

    },[])
    const[aboutAlatpres,setAboutAlatpres]=useState(true)
    const[createAlerts,setCreateAlerts]=useState(false);
    const[emergencyNotification,setEmergencyNotification]=useState(false);
    const[responseGroups,setResponseGroups]=useState(false);
    const[responseProviders,setResponseProviders]=useState(false);
    const[Incognito,setIncognito]=useState(false);
    const[reports,setReports]=useState(false);
    const[alertsStatistics,setalertsStatistics]=useState(false)
    const[selectionPanel,setSelectionPanel]=useState(true);
    const[register,setRegister]=useState(true);
    const [isRegistered,setIsRegistered]=useState(false)





    return (
        <SafeAreaView style={{
            backgroundColor:"white",
            height:"100%",
            width:"100%"
        }} >
        <Text style={{
            marginTop:20
        }} >...</Text>
        {aboutAlatpres&&(
            <View style={{
                height:"87.4%",
               
                backgroundColor:"white",
            }} >
            <Image source={require('../../../assets/aboutUs.jpeg')}
            style={{
                height:150,
                width:150,
                marginLeft:"30%",
                marginTop:100,
                
                
            }}
            />

            <Text style={{
                marginTop:50,
                marginLeft:"35%",
                
            }} >About Alatpres</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:70,
                justifyContent:"space-between"
            }} >
                <FontAwsome name="caret-left" size={50} style={{
                    marginLeft:10,
                    color:"#1e8ee1",
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                    setalertsStatistics(true)
                }}/>
                <FontAwsome name="caret-right"  size={50} style={{
                    marginRight:10,
                    color:"#1e8ee1",
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(true);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }}/>
            </View>
            <Text style={{
               
                width:"90%",
                marginLeft:"5%",
                letterSpacing:1.2,

            }}>
                Alatpres is a B2C2B public safety emergency notification and di teams and provides inter-agency communication to ensure coordinated response to any public safety incident. 
                The solution also generates reports and insights for users to enable crsaster management app that focuses on fast and reliable sharing of safety alerts across different pre-configured levels of response. 
                The solution promotes partnership between communities and public safetyitical decision making.
            </Text>
            </View>
        )}

        {createAlerts&&(
            <View style={{
                height:"87.4%",
               
                backgroundColor:"white",
            }} >
            <Image source={require('../../../assets/MakeAlert.jpeg')}
            style={{
                height:150,
                width:150,
                marginLeft:"30%",
                marginTop:100,
                
                
            }}
            />

            <Text style={{
                marginTop:50,
                marginLeft:"35%",
                
            }} >Create Alerts</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:70,
                justifyContent:"space-between"
            }} >
                <FontAwsome name="caret-left" size={50} style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(true);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }} />
                <FontAwsome name="caret-right"  size={50} style={{
                    marginRight:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(true);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }} />
            </View>
            <Text style={{
                
                width:"90%",
                marginLeft:"5%",
                letterSpacing:1.2,

            }}>
              You can create emergency alerts for free 
            </Text>
            </View>
        )}

        {emergencyNotification&&(
            <View style={{
                height:"87.4%",
              
                backgroundColor:"white",
            }} >
            <Image source={require('../../../assets/alertImg.jpeg')}
            style={{
                height:150,
                width:150,
                marginLeft:"30%",
                marginTop:100,
                borderRadius:100,
                
                
            }}
            />

            <Text style={{
                marginTop:50,
                marginLeft:"35%",
                
            }} >Emergency Notification</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:70,
                justifyContent:"space-between"
            }} >
                <FontAwsome name="caret-left" size={50} style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(true);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }} />
                <FontAwsome name="caret-right"  size={50} style={{
                    marginRight:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(true);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }} />
            </View>
            <Text style={{
               
                width:"90%",
                marginLeft:"6%",
                letterSpacing:1.2,

            }}>
               You get notified of emergencies and alerts 
            </Text>
            </View>
        )}

        {responseGroups&&(
            <View style={{
                height:"87.4%",
                borderWidth:1,
                borderColor:"#1e8ee1",
                backgroundColor:"white",
            }} >
            <Image source={require('../../../assets/community.png')}
            style={{
                height:150,
                width:150,
                marginLeft:"30%",
                marginTop:100,
                
                
                
            }}
            />

            <Text style={{
                marginTop:50,
                marginLeft:"35%",
                
            }} >Response Groups</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:70,
                justifyContent:"space-between"
            }} >
                <FontAwsome name="caret-left" size={50} style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(true);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }} />
                <FontAwsome name="caret-right"  size={50} style={{
                    marginRight:10,
                    color:"#1e8ee1",
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(true);
                    setIncognito(false);
                    setReports(false);
                }} />
            </View>
            <Text style={{
                
                width:"90%",
                marginLeft:"5%",
                letterSpacing:1.2,

            }}>
               You can create community response groups to tackle emergencies at community level
            </Text>
            </View>
        )}

        {responseProviders&&(
            <View style={{
                height:"87.4%",
                borderWidth:1,
                borderColor:"#1e8ee1",
                backgroundColor:"white",
            }} >
            <Image source={require('../../../assets/responder.jpeg')}
            style={{
                height:150,
                width:150,
                marginLeft:"30%",
                marginTop:100,
                borderRadius:100,
                
                
            }}
            />

            <Text style={{
                marginTop:50,
                marginLeft:"35%",
                
            }} >Response Providers</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:70,
                justifyContent:"space-between"
            }} >
                <FontAwsome name="caret-left" size={50} style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(true);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }} />
                <FontAwsome name="caret-right"  size={50} style={{
                    marginRight:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(true);
                    setReports(false);
                }} />
            </View>
            <Text style={{
               
                width:"90%",
                marginLeft:"5%",
                letterSpacing:1.2,

            }}>
             You get access to response providers from all levels.
             ie NGOS,reponse companies, the government and from community reponse groups
            </Text>
            </View>
        )}

        {Incognito&&(
            <View style={{
                height:"87.4%",
                borderWidth:1,
                borderColor:"#1e8ee1",
                backgroundColor:"white",
            }} >
            <Image source={require('../../../assets/shadow.jpeg')}
            style={{
                height:150,
                width:150,
                marginLeft:"30%",
                marginTop:100,
                borderRadius:100,
                
                
            }}
            />

            <Text style={{
                marginTop:50,
                marginLeft:"35%",
                
            }} >Incognito Mode </Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:70,
                justifyContent:"space-between"
            }} >
                <FontAwsome name="caret-left" size={50} style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(true);
                    setIncognito(false);
                    setReports(false);
                }} />
                <FontAwsome name="caret-right"  size={50} style={{
                    marginRight:10,
                    color:"#1e8ee1"
                }}  onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(true);
                }} />
            </View>
            <Text style={{
               
                width:"90%",
                marginLeft:"5%",
                letterSpacing:1.2,

            }}>
               Send alerts anonymously if you have concerns with your security and safety.
            </Text>
            </View>
        )}

        {reports&&(
            <View style={{
                height:"87.4%",
                backgroundColor:"white",
            }} >
            <Image source={require('../../../assets/annualreports.jpeg')}
            style={{
                height:150,
                width:150,
                marginLeft:"30%",
                marginTop:100,
                
                
            }}
            />

            <Text style={{
                marginTop:50,
                marginLeft:"35%",
                
            }} >Annual Reports</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:70,
                justifyContent:"space-between"
            }} >
                <FontAwsome name="caret-left" size={50} style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(true);
                    setReports(false);
                }} />
                <FontAwsome name="caret-right"  size={50} style={{
                    marginRight:10,
                    color:"#1e8ee1"
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                    setalertsStatistics(true)
                }} />
            </View>
            <Text style={{
                width:"90%",
                marginLeft:"5%",
                letterSpacing:1.2,

            }}>
                Annual reports of all alerts. The reports are official statements from reponse providers.
            </Text>
            <Text style={{
                marginLeft:"30%",
                marginTop:50,
                color:"orange"
            }} >
                Coming soon
            </Text>
            </View>
        )}

{alertsStatistics&&(
            <View style={{
                height:"87.4%",   
                backgroundColor:"white",
            }} >
            <Image source={require('../../../assets/statistics.jpeg')}
            style={{
                height:150,
                width:150,
                marginLeft:"30%",
                marginTop:100,
                borderRadius:100,
                
                
            }}
            />

            <Text style={{
                marginTop:50,
                marginLeft:"35%",
                
            }} >Alert statistics</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:70,
                justifyContent:"space-between"
            }} >
                <FontAwsome name="caret-left" size={50} style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(true);
                    setalertsStatistics(false)
                }} />
                <FontAwsome name="caret-right"  size={50} style={{
                    marginRight:10,
                    color:"#1e8ee1"
                }} onPress={()=>{
                    setAboutAlatpres(true);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                    setalertsStatistics(false)
                }} />
            </View>
            <Text style={{
                width:"90%",
                marginLeft:"5%",
                letterSpacing:1.2,

            }}>
               Using data science and machine learning we create well informed statistics of emergencies and alerts per region and country wide.
            </Text>
            <Text style={{
                marginLeft:"30%",
                marginTop:50,
                color:"orange"
            }} >
                Coming soon
            </Text>
            </View>
        )}














        {selectionPanel&&(
            <View style={{
                height:"5%",
                backgroundColor:"white",
                display:'flex',
                flexDirection:"row",
            }}>
                <Text style={aboutAlatpres?{
                    backgroundColor:"#1e8ee1",
                    width:15,
                    height:15,
                    marginLeft:70,
                    borderRadius:100,
                    marginTop:5,
                    
                }:{
                    backgroundColor:"white",
                    width:15,
                    height:15,
                    marginLeft:70,
                    borderRadius:100,
                    marginTop:5,
                    borderColor:"#1e8ee1",
                    borderWidth:1,
                }} onPress={()=>{
                    setAboutAlatpres(true);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }} >.</Text>

                <Text style={createAlerts?{
                    backgroundColor:"#1e8ee1",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    
                }:{
                    backgroundColor:"white",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    borderColor:"#1e8ee1",
                    borderWidth:1,
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(true);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }} >.</Text>

                <Text style={emergencyNotification?{
                    backgroundColor:"#1e8ee1",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    
                }:{
                    backgroundColor:"white",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    borderColor:"#1e8ee1",
                    borderWidth:1,
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(true);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }}  >.</Text>

                <Text style={responseGroups?{
                    backgroundColor:"#1e8ee1",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    
                }:{
                    backgroundColor:"white",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    borderColor:"#1e8ee1",
                    borderWidth:1,
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(true);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                }}  >.</Text>

                <Text style={responseProviders?{
                    backgroundColor:"#1e8ee1",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                   
                }:{
                    backgroundColor:"white",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    borderColor:"#1e8ee1",
                    borderWidth:1,
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(true);
                    setIncognito(false);
                    setReports(false);
                }}  >.</Text>

                <Text style={Incognito?{
                    backgroundColor:"#1e8ee1",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    
                }:{
                    backgroundColor:"white",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    borderColor:"#1e8ee1",
                    borderWidth:1,
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(true);
                    setReports(false);
                }}  >.</Text>

                <Text style={reports?{
                    backgroundColor:"#1e8ee1",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    
                }:{
                    backgroundColor:"white",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    borderColor:"#1e8ee1",
                    borderWidth:1,
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(true);
                }}  >.</Text>

                <Text style={alertsStatistics?{
                    backgroundColor:"#1e8ee1",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    
                }:{
                    backgroundColor:"white",
                    width:15,
                    height:15,
                    marginLeft:20,
                    borderRadius:100,
                    marginTop:5,
                    borderColor:"#1e8ee1",
                    borderWidth:1,
                }} onPress={()=>{
                    setAboutAlatpres(false);
                    setCreateAlerts(false);
                    setEmergencyNotification(false);
                    setResponseGroups(false);
                    setResponseProviders(false);
                    setIncognito(false);
                    setReports(false);
                    setalertsStatistics(true)
                }}  >.</Text>
            <TouchableOpacity style={{
                marginLeft:20,
                marginTop:5,
            }} onPress={()=>{
                setAboutAlatpres(false);
                setCreateAlerts(false);
                setEmergencyNotification(false);
                setResponseGroups(false);
                setResponseProviders(false);
                setIncognito(false);
                setReports(true);
            }} >
                <Text>Skip All</Text>
            </TouchableOpacity>
            </View>
        )}
        {register&&(
            <TouchableOpacity style={{
                height:"4.5%",
                backgroundColor:"#1e8ee1",
                width:"80%",
                marginLeft:"10%",
                borderRadius:20,

            }} onPress={()=>{
                setIntro(false)
                showRegistrationPage(true)
            }} >
                <Text style={{
                    textAlign:"center",
                    marginTop:12,
                }} >Start your Alatpres Journey</Text>
            </TouchableOpacity>
        )}
        </SafeAreaView>
    )
}