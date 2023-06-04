import { useEffect, useState } from "react";
import { View,Text,TextInput,TouchableOpacity, ScrollView,Image } from "react-native";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import{groups, groupCategories}from '../../../mockData/metrics'
import axios from "axios";
import env_variables from "../../../env";
import * as Contacts from  "expo-contacts"
import { SelectList,MultipleSelectList } from 'react-native-dropdown-select-list';

export default function CreateResponseGroup({rendersegmentselector,renderCreateResponseGroup,setcreateresgrouppage,rendergroupssegment}){
   const[error,setError]=useState(undefined)
   const[contacts,setContacts]=useState(undefined)
    async function smspermission(){
        const {status} = await Contacts.requestPermissionsAsync();
        if (status==="granted"){
            const {data} = await Contacts.getContactsAsync({
                fields:[Contacts.Fields.FirstName,Contacts.Fields.LastName,Contacts.Fields.PhoneNumbers]
            })

            if(data.length > 0){
                setContacts(data)
            }else{setError("No contacts available")}
        }else{
            setError("Permissionn denied")
        }
    }

    /*form data*/
    //group data
    const[groupname,setgroupname]=useState("");
   
    const[groupdescription,setgroupdescription]=useState("");
    const[groupcategory,setgroupcategory]=useState("");
    //members data
    const[membername,setmembername]=useState("")
    const[memberphonenumber,setmemberphonenumber]=useState("");
    const[memberrole,setmemberrole]=useState("");
    /*form data*/
    const[addMembers,renderAddMember]=useState(false);
    const[formMembers,setFormMembers]=useState(true);
    const[closedEye,setClosedEye]=useState(false);
    const[openEye,setOpenEye]=useState(true);
    const[addedMembers,setAddedMembers]=useState(false);
    const[cregion1,renderCregion]=useState(true);
    const[cregion2,renderCregion2]=useState(true);
    const[dot,showDot]=useState(false);
    const[dot1,showDot1]=useState(false);
    const[dot2,showDot2]=useState(false);
    const[dot3,showDot3]=useState(false);
    const[dot4,showDot4]=useState(false);
    const[caseShow,setCaseShow]=useState(true)
    const [newGroup,setNewGroup]=useState(true)
    
    //group image
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

          //choosing the image
          return(<View style={{
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
            }}> profile image </Text>
         </TouchableOpacity>
        </View>)

      };
      const[image,setImage]=useState(null)
   
    //post data 
        //response groups
        async function postResgroup(){
            try {
               
               
                const data = {
                    groupprofileimage:image,
                    groupname:groupname,
                    groupdescription:groupdescription,
                    groupcategory:groupcategory,
                    groupadmin: "Thomas",
                  }
                  axios.post(env_variables.RESPONSEGROUPS_API,data)
                  .then(res=>{
                    console.log(JSON.stringify(res.data))
                    
                  })
               
            

            } catch (error) {
                console.log(error);
                alert(error)
            }

         }
      //categories
      const categories = [...groupCategories]

        

    return(
       <View style={{
        position:'absolute',
        height:'100%',
        width:'100%',
        backgroundColor:'white'
       }} >

        <FontAwsome name="times" size={20} onPress={e=>{
            e.preventDefault()
            //renderCreateResponseGroup(false)
            setcreateresgrouppage(false)
            rendergroupssegment(true)
            rendersegmentselector(true)
        }} style={{
            marginLeft:10,
            marginTop:10,
        }} />

       {newGroup&&(
         <ScrollView style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            marginTop:10,
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
            }}>currently  Unavailable </Text>
         </TouchableOpacity>
        </View>


       <SelectList data={categories}
              placeholder=" choose a responder"
              setSelected={val=>{setgroupcategory(val) }}
              boxStyles={{
                backgroundColor:'white',
                width:'96%',
                marginLeft:'2%',
                fontFamily:'monospace',
                marginTop:20,
                borderStyle:'solid',
                borderColor:'black',
                borderWidth:1.5,
                backgroundColor:'#1e8ee1'
                
              }}
              save="value"
              onSelect={()=>{
                //alert(choosenAlert)
              }}
              
          />

        <Text style={{
            textAlign:'center',
            marginTop:25,
            height:30,
            backgroundColor:'#1e8ee1',
            width:'96%',
            marginLeft:'2%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            paddingTop:6,
        }} >Group Name</Text>
        <TextInput style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            
            height:40,
            padding:10,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder='  enter group name' 
        onChangeText={text=>{
            setgroupname(text)
            
        }}
        />   

        <View>
            <Text  style={{
            textAlign:'center',
            marginTop:25,
            height:30,
            backgroundColor:'#1e8ee1',
            width:'96%',
            marginLeft:'2%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            paddingTop:6,
        }} >group description</Text>
            <TextInput 
            multiline
            style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
           
            padding:10,
           
            
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder='enter the  group purpose eg Fire response group' 
        onChangeText={text=>{
            setgroupdescription(text);
        }}
        />
        </View>

        
        
      

        </ScrollView>
       )}
        
       

        <TouchableOpacity style={{
            backgroundColor:'#1e8ee1',
            width:'30%',
            height:40,
            marginLeft:"35%",
            marginTop:'5%',
            borderRadius:30,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            marginBottom:12,
        }} onPress={(e)=>{
            e.preventDefault();
            //renderCreateResponseGroup(false); 
            postResgroup()
            setTimeout(()=>{
                setcreateresgrouppage(false)
            rendergroupssegment(true)
            rendersegmentselector(true)
            },2000)
        }}  >
            <Text style={{
                textAlign:'center',
                paddingTop:10
            }} >save</Text>
        </TouchableOpacity>
       </View>
    )
}