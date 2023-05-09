import { SafeAreaView, ScrollView, View ,Text,TextInput,TouchableOpacity } from "react-native";
import FontAwsome  from '@expo/vector-icons/FontAwesome'
import { useState } from "react";

export default function CreatedAlerts({sethomesegment,setYourAlerts,}){


    const prep =[{
        name:"sally Weaver",
        describe:"smooth",
        getout:"i did it"
    },{
        name:"sally Weaver",
        describe:"smooth",
        getout:"i did it"
    },{
        name:"sally Weaver",
        describe:"smooth",
        getout:"i did it"
    }]
    const[searchOutputArea,setSearchOutputArea]=useState(false)
    const [searchString,setSearchString]=useState("");
    return(
        <SafeAreaView style={{
            position:'absolute',
            height:'100%',
            width:'100%',
            backgroundColor:'white'
        }}>
        <View style={{
            display:"flex",
            flexDirection:"row",
            height:"5%",
            width:"100%",
            
        }}>
            <FontAwsome name="times" size={20} onPress={()=>{
                setYourAlerts(false);
                sethomesegment(true)
            }} style={{
                marginLeft:10,
                marginTop:5,
            }}  />
            <Text  style={{
           marginTop:5, 
           marginLeft:"20%",
           fontSize:20,
           fontFamily:"monospace"
        }}>my alerts</Text></View>
         <TextInput onChange={(text)=>{
            setSearchString(text)
        }} style={{
            borderWidth:1,

        }} placeholder=" find a group" />
            {prep.length !== 0 ? <ScrollView style={{
            backgroundColor:"white",
            height:"95%",
            borderWidth:1,
            borderStyle:"solid",
            width:"98%",
            marginLeft:"1%",
            borderRadius:5,
            borderColor:"#1e8ee1"
        }} >     
      {prep.filter(item=>{
        let searchTerm = searchString
        let comparison = item.name.toLowerCase();

        return searchTerm ? comparison.startsWith(searchTerm) && searchTerm !== comparison : comparison ;
      })
        .map(item=>(
              <TouchableOpacity style={{
                backgroundColor:"#1e8ee1",
                height:50,
                width:"90%",
                marginLeft:"5%",
                marginTop:10,
                display:"flex",
                flexDirection:'row',
                borderRadius:5,
                justifyContent:"space-evenly",

            }} key={item.getout} >
                <Text style={{
                    color:"black",
                    marginTop:15,
                }}>{item.name}</Text>
                <Text style={{
                    color:"black",
                    marginTop:15,
                }}>{item.describe}</Text>
                
                {item.status === "private" ?<Text style={{
                    color:"black",
                    marginTop:15,
                }}>private</Text>:<Text style={{
                    color:"black",
                    marginTop:15,
                }}>Public</Text>}
                {item.active == true?<FontAwsome name="bell" style={{
                    paddingTop:10,
                    color:"red",
                    marginTop:10,
                }} size={20} />:<FontAwsome name="bell-slash" size={20} style={{
                    paddingTop:10,
                    color:"black",
                    marginTop:10,
                }}/>}
            </TouchableOpacity>
        ))}
        </ScrollView>:<Text style={{
            textAlign:"center",
            marginTop:20,
        }}>No groups available</Text>}
        </SafeAreaView>
    )
}