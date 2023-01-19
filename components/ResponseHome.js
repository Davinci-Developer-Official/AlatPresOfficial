import { View,Text, TouchableOpacity, ScrollView } from "react-native"
import  FontAwsome  from '@expo/vector-icons/FontAwesome';
import groups from "../data/groups";
export default function ResponseHome({setResponseChoices,setShowMenu}){
  return(
    <View style={{
      position:'absolute',
      height:'100%',
      width:'100%',
      backgroundColor:"white",
    }}>
     
     <Text style={{
      display:'flex',
      flexDirection:'row',
      marginTop:'5%'
     }}> <FontAwsome name="arrow-left" size={20} style={{
        marginTop:'5%',
        
      }} onPress={()=>{
        setResponseChoices(false)
        setShowMenu(true)
      }}  /> Go back </Text>
     
      <TouchableOpacity style={{
        height:'7%',
        width:'96%',
        marginLeft:'2%',
        backgroundColor:'blue',
        marginBottom:'5%',
        marginTop:'2%',
        borderRadius:5,
        
      }}><Text style={{
        textAlign:'center',
        marginTop:'4%',
        letterSpacing:1,
        color:'white',
        fontSize:15,

      }} >Create or Modify Response group(s)</Text></TouchableOpacity>
      <Text style={{
          backgroundColor:'black',
          height:'5%',
          textAlign:'center',
          padding:'2.5%',
          color:'white',
          borderTopRadius:5,
        }} >Available Response Groups</Text>

      <ScrollView style={{
        marginBottom:10,
        backgroundColor:'white'
      }} >
     
      {groups.map(group=>(
        <View key={group.id} style={{
          display:'flex',
          flexDirection:'row',
          height:42,
          backgroundColor:'blue',
          marginTop:4,
          width:'97%',
          marginLeft:'1.5%',
          borderRadius:5,
          padding:9,
          justifyContent:'space-evenly',
          
          
        }} >
          <Text style={{
            color:'white'
          }}>{group.id}</Text>
          
          <Text style={{
            color:'white'
          }}>{group.groupname}</Text>
          <Text style={{
            color:'white'
          }}>{group.branch}</Text>
          <Text style={{
            color:'white'
          }}>{group.locale}</Text>
        </View>
      ))}
      </ScrollView>
      
      </View>
    )
}
