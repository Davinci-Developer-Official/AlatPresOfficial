
export default function Overhead(){
    const[overView,setOverView]=useState(false);
    const[enableDarkmode,setEnableDarkmode]=useState(true)
    const[disableDarkmode,setDisableDarkmode]=useState(false)
    const[enableNotification,setEnableNotifications]=useState(true)
    const[disableNotification,setDisableNotification]=useState(false)
    const[enableLocation,setEnableLocation]=useState(true)
    const[disableLocation,setDisableLocation]=useState(false)
    const[enableSos,setEnableSos]=useState(true)
    const[disableSos,setDisableSos]=useState(false)
    const[acessLocation,setAccessLocation]=useState();

    return(
        <View style={{
            position:'absolute',
            backgroundColor:'white',
            height:310,
            width:200,
            marginTop:25,
            zIndex:100,
            marginLeft:'49%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.5,
           }} >
            <FontAwsome name='times' size={30} onPress={()=>{
              setOverView(false)
            }} />
            <View style={{
              backgroundColor:'white',
              marginTop:.1,
              width:'96%',
              marginLeft:'2%',
              height:50,
              borderStyle:'solid',
              borderColor:'#1e8ee1',
              borderWidth:1.5,
              borderRadius:20,
            }} >
            {enableDarkmode&&(<Text style={{
              paddingTop:15,
               paddingLeft:5,
            }} >Enable Darkmode  </Text>)}
            {disableDarkmode&&(<Text style={{
              paddingTop:15,
               paddingLeft:5,
            }}>DisableDarkmode  </Text>)}
            <Switch  style={{
              marginTop:-35
            }} />
            </View>
  
            <View style={{
              backgroundColor:'white',
              marginTop:1,
              width:'96%',
              marginLeft:'2%',
              height:55,
              borderStyle:'solid',
              borderColor:'#1e8ee1',
              borderWidth:1.5,
              borderRadius:20,
            }} >
            {enableNotification&&(<Text style={{
              paddingTop:15,
               paddingLeft:5,
            }} >Enable Notifications  </Text>)}
            {disableNotification&&(<Text style={{
              paddingTop:15,
               paddingLeft:5,
            }} >Disable Notifications  </Text>)}
            <Switch  style={{
              marginTop:-35
            }} />
            </View>
  
            <View style={{
              backgroundColor:'white',
              marginTop:1,
              width:'96%',
              marginLeft:'2%',
              height:55,
              borderStyle:'solid',
              borderColor:'#1e8ee1',
              borderWidth:1.5,
              borderRadius:20
            }} >
            {enableLocation&&(<Text style={{
              paddingTop:15,
               paddingLeft:5,
            }}>Enable Location  </Text>)}
            {disableLocation&&(<Text style={{
              paddingTop:15,
               paddingLeft:5,
            }}>Disable Location  </Text>)}
            <Switch  style={{
              marginTop:-35
            }} onChange={()=>{
              acessLocation
             alert(Object.values(acessLocation))
             
            }} />
            
            </View>
  
            <View style={{
              backgroundColor:'white',
              marginTop:1,
              width:'96%',
              marginLeft:'2%',
              height:55,
              borderStyle:'solid',
              borderColor:'#1e8ee1',
              borderWidth:1.5,
              borderRadius:20,
            }} >
            {enableSos&&(<Text style={{
              paddingTop:15,
               paddingLeft:5,
            }}>send SOS  </Text>)}
            {disableSos&&(<Text style={{
              paddingTop:15,
               paddingLeft:5,
            }}>send SOS </Text>)}
            <Switch  style={{
              marginTop:-35
            }} />
            </View>
            <TouchableOpacity style={{
              backgroundColor:'red',
              height:50,
              marginTop:1,
              width:'96%',
              marginLeft:'2%',
              height:50,
              borderStyle:'solid',
              borderColor:'black',
              borderWidth:1.5,
              borderRadius:20,
              display:'flex',
              flexDirection:'row',
              justifyContent:'space-between'
            }}  >
              <Text style={{
                paddingTop:10,
                paddingLeft:22,
                fontSize:20,
              }} >Logout</Text> 
              <FontAwsome name='arrow-circle-o-right' size={30} style={{
                marginRight:20,
                paddingTop:10
              }}  />
            </TouchableOpacity>
  
            
           </View>
    )
}