import { Image,SafeAreaView,ScrollView,Text,TextInput,TouchableOpacity,View,Switch } from "react-native";
import FontAwsome from "@expo/vector-icons/FontAwesome"
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function Profile({showProfile,setsideBar}){
    //main form
    const[main,showMain]=useState(true);
    //primary 
    const[primaryForm,setPrimaryForm]=useState(true)
    //security
    const[securityForm,setSecurityForm]=useState(true)
    //verification
    const[verification,setVerification]=useState(true)
    //Delete
    const[deleteAC,setDeleteAC]=useState(true)

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
          
            if (!result.cancelled) {
              // Use the selected image here
              console.log(result.uri);
            }
            setImage(result.assets[0].uri);
          } catch (error) {
            // Handle any errors that occur
            console.log(error);
          }

      };
      const[image,setImage]=useState(null)
    
      //is registers 
      const[isRegistered,setIsRegistered]=useState(false)
    return(
        <SafeAreaView style={{
            position:"absolute",
            height:"100%",
            width:"100%",
            backgroundColor:"red",
        }}>
            <Text>Profile</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:"4%",
                backgroundColor:"white",
            }} >
                <TouchableOpacity style={{
                    width:"10%",
                    marginTop:"1.5%",
                    marginLeft:"1%"
                }} onPress={()=>{
                    setsideBar(true)
                    showProfile(false)
                }}>
                <FontAwsome name="arrow-left" size={30}  />
                </TouchableOpacity>
                <Text style={{
                textAlign:"center", 
                width:"90%",
                marginTop:"4%",
                letterSpacing:2,             
                }}>Profile information</Text>
            </View>

            <ScrollView>
            <Text>Primary information</Text>
            {primaryForm&&(
                <View style={{
                    width:"96%",
                   
                    backgroundColor:"white",
                    marginLeft:"2%",
                    borderWidth:1,
                    borderColor:"#1e8ee1",
                    


                }} >
                    <View style={{
                        borderBottomColor:"#1e8ee1",
                        borderBottomWidth:1
                    }}>
                    <Image source={image != null  ? { uri: image }:require("../../../assets/prof2.png")} style={{ 
                        width: "100%", 
                        height: 200,
                        borderBottomWidth:1,
                        borderBottomColor:"black",
                     }} />
                     <TouchableOpacity style={{
                        position:"absolute",
                        height:30,
                       
                        backgroundColor:"#1e8ee1",
                        marginLeft:20,
                        marginTop:10,
                        borderRadius:20,
                       
                     }} onPress={()=>{
                        pickImage()
                     }} >
                        <Text style={{
                            marginTop:5,
                            marginLeft:5,
                            marginRight:5,
                            marginBottom:5,
                        }}>  change </Text>
                     </TouchableOpacity>
                    </View>
                    <TextInput placeholder=" username" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} />

                    <TextInput placeholder=" bio" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} />


                    <TextInput placeholder=" Surname" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} />

                    <TextInput placeholder=" middlename" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} />

                    <TextInput placeholder=" firstname" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} />
                    <TextInput placeholder=" phonenumber" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} />

                    <TextInput placeholder=" email" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} />

                    <TouchableOpacity style={{
                        backgroundColor:"#1e8ee1",
                        height:30,
                        width:60,
                        marginLeft:"80%",
                        marginTop:10,
                        marginBottom:5,
                        borderRadius:20
                       
                    }} >
                        <Text style={{
                            marginTop:5,
                            marginLeft:10,
                            marginRight:10,
                            marginBottom:5,
                           
                        }}> save</Text>
                    </TouchableOpacity>
                </View>
            )}

            {securityForm&&(<View style={{
                backgroundColor:"white",
                height:100,
                width:"96%",
                marginLeft:"2%",
                marginTop:10,
                

            }}>
                 <View style={{
                    display:"flex",
                    flexDirection:"row",
                 }}>
                 <TextInput placeholder=" ******** " style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"90%",
                        marginLeft:"2%",
                        marginTop:5,
                    }} />
                {isRegistered ?  <FontAwsome name="eye" size={20} /> :  <FontAwsome name="eye-slash"  size={20} />}
                 </View>
            </View>)}
            </ScrollView>
            
        </SafeAreaView>
    )
}