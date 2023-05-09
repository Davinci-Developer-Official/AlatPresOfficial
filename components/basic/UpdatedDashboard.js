import { useState } from "react"
import { SafeAreaView,View,TouchableOpacity,Text,Image,Switch,StatusBar, ScrollView, FlatList, TextInput } from "react-native"
import FontAwsome from '@expo/vector-icons/FontAwesome'
import CreateAlertForm from "./pages/CreateAlertForm"
import IndividualAlert from "./pages/IndividualAlert"
import UpdatedSidebar from "./pages/UpdatedSidebar"
import CreateResponseGroup from "./pages/CreateResponseGroup"
import CreatedAlerts from "./pages/CreatedAlerts"
import MyGroups from "./pages/MyGroups"
import CreateReport from "./pages/CreateReport"
import MyReports from "./pages/MyReports"
import AllReports from "./pages/AllReports"
import Providers from "./pages/Providers"


export default function UpdatedDashboard({showRegistrationPage,setUpdatedDash}){
    const[adminPrivalages,setadminprevalages]=useState(false)
    const[headbar,renderHeadbar]=useState(true) //Headbar
    /*Headbar content */
    const[showBars,setShowBars]=useState(true) //show bars
    const[sidebar,renderSidebar]=useState(false)//sidebar trigger
    
    const[dropU,setDropU]=useState(false)
    const[dropD,setDropD]=useState(true)
    const[overView,setOverView]=useState(false);//setable to true
    const[notificationArea,setNotificationArea]=useState(false)
    const[bell,setBell]=useState(true)
    const[timesNotification,seTimesNotification]=useState(false)

    const[drkMode,setDrkMode]=useState(true)
    const[incMode,setIncMode]=useState(true)
    const[sosArea,setSosArea]=useState(true)
    const[SwitchLocation,setSwitchLocation ]=useState(true)
    const[enableDark,setEnableDark]=useState(false)
    const[enableLoc,setEnableLoc]=useState(false)
    const[enableInc,setEnableInc]=useState(false)
    const[enableSOS,setEnableSOS]=useState(false)

    /*Headbar content */
    const[segmentselector,rendersegmentselector]=useState(true)//segment selector
    /*segment selector content*/
    //sidebar
    const[sideBar,setsideBar]=useState(false)
     /*segment selector content*/
    //home page
    const[homesegment,sethomesegment]=useState(true)//home
    /*home segment */
    const[statistics,setstatistics]=useState(true)
    const[redirect,setredirect]=useState(true)
    /*home segment */
     //alerts
    const[alertssegment,renderalertssegment]=useState(false) //alerts segment
    /*alerts segment*/
    const alerts= [
        {   
            id:1,
            alertId:`1eb323b`,
            type:'fire',
            locationInfo:"Roysambu",
            description:"Having learned what is fire, let’s see some fire adjectives and vocabulary words related to fire and heat. Today we’ll have a look at around 50 most used words to describe the hot nature of fire like lava, flame, livid, sparkle, searing ",
            datePosted:"12/04/2023",
            timePosted:"12:25 pm",
            durationActive:`12 days`,
            status:"active",
            image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F36%2FLarge_bonfire.jpg%2F640px-Large_bonfire.jpg&tbnid=rbil9l7nbwk4oM&vet=12ahUKEwjv5YOGh8z-AhXisEwKHd4ODYUQMygAegUIARDcAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFire&docid=vjp3WrPwl5fsBM&w=640&h=426&q=fire&ved=2ahUKEwjv5YOGh8z-AhXisEwKHd4ODYUQMygAegUIARDcAQ"
        },
        {   
            id:2,
            alertId:`1cb243c`,
            type:'floods',
            locationInfo:"budalangi",
            description:"A fire breakout in the budalangi region",
            datePosted:"12/04/2023",
            timePosted:"12:25 pm",
            durationActive:`12 days`,
            status:"active",
            image:""
        }
    ];
    const groups =[
        {
            groupname:"Alatpres group",
            grouplogo:"",
            groupcategory:"NGO",
            join:true
        },
        {
            groupname:"Huduma group",
            grouplogo:"",
            groupcategory:"NGO",
            join:false
        }
    ]
    const[createalert,setcreatealert]=useState(true);
    const[createalertpage,setcreatealertpage]=useState(false)
    const[alertInfo,setAlertInfo]=useState(false)
    const[alertid,setalertid]=useState("")
    const[imageSection,setImageSelection]=useState(false)
    const[description,showdescription]=useState(true)
    const[yourAlerts,setYourAlerts]=useState(false)

    /*alerts segment*/
    const[groupssegment,rendergroupssegment]=useState(false) //groups segment
    /*groups  */
    const[createresgrouppage,setcreateresgrouppage]=useState(false)
    const[creategroup,setreategroup]=useState(true)
    /*groups */

    const[providerssegment,renderproviderssegment]=useState() //providers segment
    const[reportssegment,renderreportssegment]=useState() //reports segment
    /*Reports */
    const [createReport,setCreateReport]=useState(false)
    const[myReports,showMyReports]=useState(false)
    /*Reports */
    const[youGroups,setYourGroups]=useState(false)


    function toogleSwitchDrk(){
    
        setEnableDark(previousState=>!previousState);
        
         
     }
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
         <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#1e8ee1" translucent={true} />
        {headbar&&(
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
                            setsideBar(true);
                           
                            setShowBars(false)
                            setOverView(false)
                            setDropU(false)
                            setDropD(true)
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
        )}
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
                setUpdatedDash(false);
                
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

        {segmentselector&&(
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:50,
                borderStyle:'solid',
                borderWidth:1,
                borderColor:"#1e8ee1",
                width:"100%",

            }} >
                <TouchableOpacity style={homesegment?{
                    width:"10%",
                    backgroundColor:"white",
                    borderBottomStyle:'solid',
                    borderBottomWidth:1,
                    borderBottomColor:"black"
                }:{
                    width:"10%",
                    backgroundColor:"#1e8ee1",
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:"white"
                }} onPress={()=>{
                    renderalertssegment(false)
                    sethomesegment(true)
                    rendergroupssegment(false)
                    renderproviderssegment(false)
                    renderreportssegment(false)
                }} ><Text style={{
                    padding:5,
                }} ><FontAwsome name="home" size={30} /> </Text></TouchableOpacity>
                <TouchableOpacity style={alertssegment ? {
                    width:"22%",
                    backgroundColor:"white",
                    borderBottomStyle:'solid',
                    borderBottomWidth:1,
                    borderBottomColor:"black"
                }:{
                    width:"22%",
                    backgroundColor:"#1e8ee1",
                    borderStyle:'solid',
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:"white"
                   
                }} onPress={()=>{
                    renderalertssegment(true)
                    rendergroupssegment(false)
                    sethomesegment(false)
                    renderproviderssegment(false)
                    renderreportssegment(false)
                    sethomesegment(false)
                }} ><Text style={{
                    padding:8,
                }} ><FontAwsome name="fire" size={20} />  Alerts</Text></TouchableOpacity>
                <TouchableOpacity style={groupssegment?{
                    width:"22.5%",
                    backgroundColor:"white",
                    borderBottomStyle:'solid',
                    borderBottomWidth:1,
                    borderBottomColor:"black"
                }:{
                    width:"22.5%",
                    backgroundColor:"#1e8ee1",
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:"white"
                }} onPress={()=>{
                    renderalertssegment(false);
                    rendergroupssegment(true)
                    renderproviderssegment(false)
                    renderreportssegment(false)
                    sethomesegment(false)
                }} ><Text style={{
                    marginTop:10,
                    marginLeft:10,
                }}><FontAwsome name="group" size={20} />  Groups</Text></TouchableOpacity>
                <TouchableOpacity style={providerssegment?{
                    width:"22.5%",
                    backgroundColor:"white",
                    borderBottomStyle:'solid',
                    borderBottomWidth:1,
                    borderBottomColor:"black"
                }:{
                    width:"22.5%",
                    backgroundColor:"#1e8ee1",
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:"white"
                }} ><Text style={{
                    marginTop:12,
                    marginLeft:8,
                }} onPress={()=>{
                    renderproviderssegment(true)
                    renderalertssegment(false)
                    rendergroupssegment(false)
                    renderreportssegment(false)
                    sethomesegment(false)
                }} ><FontAwsome name="ambulance" size={16} /> Providers</Text></TouchableOpacity>
                <TouchableOpacity style={reportssegment?{
                    width:"22%",
                    backgroundColor:"white",
                    borderBottomStyle:'solid',
                    borderBottomWidth:1,
                    borderBottomColor:"black"
                }:{
                    width:"22.9%",
                    backgroundColor:"#1e8ee1",
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:"white",
                    
                }} ><Text style={{
                    marginTop:10,
                    marginLeft:5
                }} onPress={()=>{
                    renderreportssegment(true)
                    renderalertssegment(false)
                    rendergroupssegment(false)
                    renderproviderssegment(false)
                    sethomesegment(false)
                }} ><FontAwsome name="sticky-note"  size={20}  />  Reports</Text></TouchableOpacity>
            </View>
        )}
        {homesegment&&(<View style={{
            backgroundColor:"white",
            height:"100%",
            width:"100%",
            borderWidth:1,
            borderColor:"#1e8ee1",

        }} >
        {statistics&&(
            <View style={{
               
                
                
            }} >
                <View style={{
                    height:70,
                    width:"95%",
                    marginLeft:"2.5%",
                    backgroundColor:"white",
                    borderStyle:"dotted",
                    borderWidth:2,
                    borderColor:"#1e8ee1",
                    marginTop:10,
                    borderRadius:5,
                }} >
                    <Text style={{
                        textAlign:"center",
                        marginTop:10,
                        color:'#1e8ee1'
                    }} >Alert Name :</Text>
                    <Text style={{
                        textAlign:"center",
                        marginTop:10
                    }} > Fire</Text>
                </View>
                <View style={{
                   
                    width:"95%",
                    marginLeft:"2.5%",
                    backgroundColor:"white",
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",

                }} >
                   <View style={{
                    borderStyle:"dotted",
                    borderWidth:2,
                    borderColor:"#1e8ee1",
                    height:100,
                    width:"50%",
                    backgroundColor:"white",
                    borderRadius:5,
                   }} >
                   <Text style={{
                        textAlign:"center",
                        color:'#1e8ee1'    
                    }}>Occurence/month:</Text>
                    <Text style={{
                        textAlign:"center",
                        marginTop:20,
                        fontSize:20,
                    }}> 30</Text>
                   </View>
                    <View style={{
                        borderStyle:"dotted",
                        borderWidth:2,
                        borderColor:"#1e8ee1",
                        height:100,
                        width:"50%",
                        backgroundColor:"white",
                        borderRadius:5,
                    }}>
                    <Text style={{         
                        textAlign:"center",
                        color:'#1e8ee1'   
                    }}>Hotspots: </Text>
                    <Text style={{
                        textAlign:"center",
                        marginTop:20,
                        fontSize:20,
                    }}> Kasarani</Text>
                    </View>
                </View>
            </View>
        )}

        {redirect&&(
            <View style={{
                height:"50%",
                
                
            }}>
               <View style={{
                display:"flex",
                flexDirection:"column",
                marginTop:30,
               }}>
                <Text style={{
                    textAlign:"center"
                }}> Creation section</Text>
               <TouchableOpacity style={{
                width:"90%",
                backgroundColor:"#1e8ee1",
                height:50,
                marginLeft:"5%",
                marginTop:10,
                borderRadius:10
               }}  onPress={()=>{
                setcreatealertpage(true)
                    rendersegmentselector(false)
                    renderalertssegment(false)
                    sethomesegment(false)
                    rendersegmentselector(false)
               }} > 
              <Text style={{
                textAlign:"center",
                marginTop:18,
              }}>Create Alert</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                width:"90%",
                backgroundColor:"#1e8ee1",
                height:50,
                marginLeft:"5%",
                marginTop:10,
                borderRadius:10
               }} onPress={()=>{
                setcreateresgrouppage(true)
                rendersegmentselector(false)
                renderalertssegment(false)
                rendergroupssegment(false)
                sethomesegment(false)
                setYourAlerts(false)
               }}> 
              <Text style={{
                textAlign:"center",
                marginTop:18,
              }}>Create group</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                width:"90%",
                backgroundColor:"#1e8ee1",
                height:50,
                marginLeft:"5%",
                marginTop:10,
                borderRadius:10
               }} onPress={()=>{
                setCreateReport(true);
                sethomesegment(false);
                rendersegmentselector(false)
                
               }}> 
              <Text style={{
                textAlign:"center",
                marginTop:18,
              }}>Create a report</Text>
               </TouchableOpacity>
               </View>
               
               <View style={{
                display:"flex",
                flexDirection:"column",
                marginTop:30,
               }}>
              <Text style={{
                textAlign:"center"
              }} >Activity section</Text>
               <TouchableOpacity style={{
                width:"90%",
                backgroundColor:"#1e8ee1",
                height:50,
                marginLeft:"5%",
                marginTop:10,
                borderRadius:10,
               }} onPress={()=>{
                setYourAlerts(true)
                rendersegmentselector(false)
                sethomesegment(false)
                
               }}> 
              <Text style={{
                textAlign:'center',
                marginTop:17
              }} >Alerts</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                width:"90%",
                backgroundColor:"#1e8ee1",
                height:50,
                marginLeft:"5%",
                marginTop:10,
                borderRadius:10,
               }} onPress={()=>{
                setYourGroups(true)
                rendersegmentselector(false)
                sethomesegment(false)
               }} > 
              <Text style={{
                textAlign:'center',
                marginTop:17
              }} >My Groups</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                width:"90%",
                backgroundColor:"#1e8ee1",
                height:50,
                marginLeft:"5%",
                marginTop:10,
                borderRadius:10,
               }} onPress={()=>{
                sethomesegment(false)
                showMyReports(true)
                rendersegmentselector(false)

               }}> 
              <Text style={{
                textAlign:'center',
                marginTop:17
              }} >Reports</Text>
               </TouchableOpacity>
               </View>
            </View>
        )}

        </View>)}
        {alertssegment&&(
            <View style={{
                height:"100%",
                backgroundColor:"white"
            }} >
                {!alerts.length == 0 ?
                <FlatList data={alerts}
                keyExtractor={(item)=>{item.id}}
                renderItem={({item})=>(
                    <View style={{
                        backgroundColor:"#1e8ee1",
                        marginTop:10,
                        width:"90%",
                        marginLeft:"5%",
                        
                        
                        borderRadius:5,
                        
                    }} >
                       <View style={{
                        padding:4,
                       }} >
                        <View style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-between",
                        }}>
                        <Text style={{
                            fontSize:15
                        }}>Alert Type : <Text style={{
                            color:"red",
                        }} >{item.type}</Text> </Text>
                        <Text style={{
                            fontSize:15
                        }}>Alert Location : <Text style={{
                            color:"white",
                            marginRight:5,
                        }}>{item.locationInfo}</Text></Text>
                        </View> 
                        {description&&(
                            <View style={{
                                backgroundColor:"white",
                                borderRadius:5,
                                width:"100%",
                                padding:2
                            }} >
                                <TextInput value={item.description} multiline={true} editable={false} style={{
                                    color:"black",
                                    letterSpacing:1,
                                }}  />
                                {!imageSection?( <Image source={require('../../assets/fire.jpeg')} style={{ 
                                    height:100,
                                    width:"100%",
                                    marginLeft:".5%",
                                    marginBottom:.5,
                                 }} />):""}
                            </View>
                        )}
                       <View style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-between",
                        }}>
                        <Text>Alert Status :<Text style={item.status === "active"?{
                            color:"#00FF00"
                        }:{
                            color:"white"
                        }} > {item.status}</Text>  </Text>
                        <Text> Date Posted : <Text style={{
                            color:"white"
                        }}>{item.datePosted}</Text></Text> 
                        </View>
                                               
                       </View>
                       <View style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-around",
                            height:40,
                            paddingTop:10,
                        }}>
                             <Text style={item.status === "active"?{
                            color:"black"
                        }:{
                            color:"#00FF00"
                        }} > <FontAwsome name="expand"  size={20} /></Text> 
                        <Text style={item.status === "active"?{
                            color:"black"
                        }:{
                            color:"#00FF00"
                        }} > <FontAwsome name="clock-o"  size={20} /></Text> 
                        
                        <Text style={item.status === "active"?{
                            color:"black"
                        }:{
                            color:"#00FF00"
                        }} > <FontAwsome name="comment" size={20} /></Text> 
                         <Text style={item.status === "active"?{
                            color:"black"
                        }:{
                            color:"#00FF00"
                        }} > <FontAwsome name="retweet" size={20} /></Text> 
                         <Text style={item.status === "active"?{
                            color:"black"
                        }:{
                            color:"#00FF00"
                        }} > <FontAwsome name="bookmark" size={20} /></Text> 
                         <Text style={item.status === "active"?{
                            color:"black"
                        }:{
                            color:"#00FF00"
                        }} > <FontAwsome name="eye-slash" size={20} /></Text> 
                         <Text style={item.status === "active"?{
                            color:"black"
                        }:{
                            color:"#00FF00"
                        }} > <FontAwsome name="share"  size={20} /></Text> 
                        </View>
                              
                    </View>
                )}
                />:<Text style={{
                    marginTop:100,
                    marginLeft:100,
                }} >You have no active alerts</Text>}
                
                
                {createalert&&(<TouchableOpacity style={{
                   
                    height:50,
                    width:50,
                    borderRadius:70,
                    position:"absolute",
                   marginTop:600,
                   marginLeft:"70%",
                   backgroundColor:"#1e8ee1",
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:"black",
                  
                }} onPress={()=>{
                    setcreatealertpage(true)
                    rendersegmentselector(false)
                    renderalertssegment(false)
                }} >
                     <Text style={{
                         padding:11,
                         fontSize:15,
                         color:"white"
                    }} ><FontAwsome name="plus"  size={30} style={{
                        padding:12,
                   }}   />  Alerts</Text>
                </TouchableOpacity>)}
            </View>
        )}
        {groupssegment&&(
            <View style={{
                height:"100%",
                backgroundColor:"white"
            }} >
                {!alerts.length == 0 ?
                <FlatList data={groups}
                keyExtractor={(item)=>{item.id}}
                renderItem={({item})=>(
                    <View style={{
                        display:"flex",
                        flexDirection:"row",
                        width:"90%",
                        marginLeft:"5%",
                        backgroundColor:"#1e8ee1",
                        marginTop:10,

                    }}>
                        <Image source={require(`../../assets/fire.jpeg`)} style={{
                            height:50,
                            width:50,
                            paddingLeft:1,
                            borderRadius:5,
                            
                        }}/>
                        <View style={{
                            display:"flex",
                            flexDirection:"column",
                            width:"80%"
                        }} >
                            <Text style={{
                                textAlign:"center",
                            }}>{item.groupname}</Text>
                            <Text style={{
                                textAlign:"center",
                            }}>{item.groupcategory}</Text>
                        </View>
                    </View> 
                )}
                />:<Text style={{
                    marginTop:100,
                    marginLeft:100,
                }} >No groups available</Text>}
                
                
                {creategroup&&(<TouchableOpacity style={{
                   
                    height:50,
                    width:50,
                    borderRadius:70,
                    position:"absolute",
                   marginTop:600,
                   marginLeft:"70%",
                   backgroundColor:"#1e8ee1",
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:"black",
                  
                }} onPress={()=>{
                    setcreateresgrouppage(true)
                    rendersegmentselector(false)
                    renderalertssegment(false)
                    rendergroupssegment(false)
                }} >
                     <Text style={{
                         padding:11,
                         fontSize:15,
                         color:"white"
                    }} ><FontAwsome name="plus"  size={30} style={{
                        padding:5,
                   }}   />  Groups</Text>
                </TouchableOpacity>)}
            </View>
        )}

        {createalertpage&&(
            <View style={{
                height:"88%"
            }} >
                <CreateAlertForm setcreatealertpage={setcreatealertpage} renderalertssegment={renderalertssegment} rendersegmentselector={rendersegmentselector}/>
            </View>
        )}
        {yourAlerts&&(<View style={{
                height:"88%"
            }}>
            <CreatedAlerts sethomesegment={sethomesegment} setYourAlerts={setYourAlerts} rendersegmentselector={rendersegmentselector} />
        </View>)}
        {alertInfo&&(
            <View style={{
                height:"88%"
            }}>
                <IndividualAlert alertId={alertid} rendersegmentselector={rendersegmentselector} />
            </View>
        )}
        {createresgrouppage&&(
            <View style={{
                height:"88%"
            }} >
              <CreateResponseGroup   setcreateresgrouppage={setcreateresgrouppage} rendergroupssegment={rendergroupssegment} rendersegmentselector={rendersegmentselector} />
            </View>
        )}
        {youGroups&&(
            <View style={{
                height:"100%"
            }} >
                <MyGroups sethomesegment={sethomesegment} setYourGroups={setYourGroups} rendersegmentselector={rendersegmentselector} />
            </View>
        )}
        {createReport&&(
            <View style={{
                height:"100%"
            }}>
                <CreateReport/>
            </View>
        )}
        {myReports&&(<View style={{
                height:"100%"
            }}>
            <MyReports/>
        </View>)}
        {reportssegment&&(
            <View>
                <AllReports/>
            </View>
        )}
        {providerssegment&&(<View>
            <Providers />
        </View>)}
        {sideBar&&(<UpdatedSidebar setsideBar={setsideBar} setShowBars={setShowBars} setUpdatedDash={setUpdatedDash} />)}
        </SafeAreaView>
    )
}