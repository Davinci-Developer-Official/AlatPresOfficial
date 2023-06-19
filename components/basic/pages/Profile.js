import { Image,SafeAreaView,ScrollView,Text,TextInput,TouchableOpacity,View,Switch, Alert } from "react-native";
import FontAwsome from "@expo/vector-icons/FontAwesome"
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import env_variables from '../../../env';



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
      const[Username,setUserName]=useState(null)
      const[Bio,setBio]=useState(null)
      const[Surname,setSurname]=useState(null)
      const[MiddleName,seMiddleName]=useState(null)
      const[Firstname,seTFirstname]=useState(null)
      const[Phonenumber,setPhonenumber]=useState(null)
      const[Email,setEmail]=useState(null)
      //is registers 
      const[isRegistered,setIsRegistered]=useState(false)
      const[user,setUser]=useState(null)
      const[clearUserName,setClearUserName]=useState(false)
      const[number,setNumber]=useState(null)
      const[clearNumber,setClearNumber]=useState(false)
      const[pass,setPass]=useState(null)
      const[clearPass,setClearPass]=useState(false)
      const[accessArr,setAccessArr]=useState([])
      const checkUser=async()=>{
        await AsyncStorage.getItem("user").then(res=>{
            setUser(res)
            //Alert.alert(JSON.parse(res));
          })
        await AsyncStorage.getItem("number").then(res=>{
            setNumber(res)
            //Alert.alert(JSON.parse(res));
          })
        await AsyncStorage.getItem("pass").then(res=>{
            setPass(res)
            //Alert.alert(JSON.parse(res));
          })
       
      }
      const[fetchedProfile,setFetchedProfile]=useState([])
      function fetchProfile (){
        axios.get(env_variables.PROFILE_API)
        .then(res=>{
            const arr = [...res.data]
            setFetchedProfile(arr)
            console.log(res.data)
        })
        const findArr = fetchedProfile.find(user=>user.username == Username)
      }

      const[saved,setSaved]=useState(false)
      function save(){
        
        const data = {
            username:user,
            bio:Bio,
            surname:Surname,
            middlename:MiddleName,
            firstname:Firstname,
            email:Email,
            password:pass
        }
        axios.post(env_variables.PROFILE_API,data)
        .then(res=>{
            alert(JSON.stringify(res.data))
            setSaved(true)
            fetchProfile()
        })
      }

      useState(()=>{
        checkUser();
      },[checkUser])

      const[secure,setSecure]=useState(true)
    return(
        <SafeAreaView style={{
            position:"absolute",
            height:"100%",
            width:"100%",
            backgroundColor:"white",
        }}>
            <Text>Profile</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                height:"12%",
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
                fontSize:18,           
                }}>Profile information</Text>
            </View>

            <ScrollView>
            
            {primaryForm&&(
                <View style={{
                    width:"95%",
                   
                    backgroundColor:"white",
                    marginLeft:"2%",
                    


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
                    }} value={JSON.parse(user)}  onChangeText={(value)=>{
                        setUserName(value)
                    }} />

                    <TextInput placeholder=" bio" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} onChangeText={(value)=>{
                        setBio(value)
                    }} />


                    <TextInput placeholder=" Surname" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} onChangeText={(value)=>{
                        setSurname(value)
                    }} />

                    <TextInput placeholder=" middlename" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} onChangeText={(value)=>{
                        seMiddleName(value)
                    }} />

                    <TextInput placeholder=" firstname" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} onChangeText={(value)=>{
                        seTFirstname(value)
                    }} />
                    <TextInput placeholder=" phonenumber" style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"98%",
                        marginLeft:"1%",
                        marginTop:5,
                    }} value={JSON.parse(pass)}  onChangeText={(value)=>{
                        setPhonenumber(value)
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
                       
                    }} onPress={()=>{
                        save()
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
            <Text>Password</Text>
                 <View style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-around"
                    
                 }}>
                 
                 <TextInput placeholder=" ******** " style={{
                        borderBottomColor:"black",
                        borderBottomWidth:1,
                        width:"90%",
                        marginLeft:"2%",
                        marginTop:5,
                    }} value={JSON.parse(pass)} secureTextEntry={secure} />
                {isRegistered ?  <FontAwsome name="eye-slash" size={20} onPress={()=>{
                    setSecure(false)
                    setIsRegistered(false)
                }} /> :  <FontAwsome name="eye"  size={20} onPress={()=>{
                    setSecure(true)
                    setIsRegistered(true)
                }} />}
                
                 </View>
            </View>)}
            </ScrollView>
            
        </SafeAreaView>
    )
}