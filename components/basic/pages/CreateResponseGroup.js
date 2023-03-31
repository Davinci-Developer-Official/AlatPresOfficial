import { useEffect, useState } from "react";
import { View,Text,TextInput,TouchableOpacity, ScrollView } from "react-native";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import{groups}from '../../../mockData/metrics'
import axios from "axios";
export default function CreateResponseGroup({renderCreateResponseGroup}){
   
    /*form data*/
    //group data
    const[groupname,setgroupname]=useState("");
    const[grouppurpose,setgrouppurpose]=useState("")
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
    const baseUrl ="https://cfca-102-219-208-195.in.ngrok.io"

   
    //post data 
        //response groups
        async function postResgroup(){
            try {
                alert(`${groupname},${grouppurpose},${groupdescription},${groupcategory}`)
               if(!groupname.trim() || !grouppurpose.trim() || !groupcategory.trim() ){
                alert(`group name,grouppurpose or group category cannot be empty`);
                return ;
               }else{
                const postRequest = await axios.post(`${baseUrl}/api/resgroup`,{
                    groupname,grouppurpose,groupdescription,groupcategory
                   })
                 if(postRequest.status === 201){
                    alert(`You just posted ${JSON.stringify(postRequest.data)}`);
                    setgroupname="";
                    setgrouppurpose="";
                    setgroupdescription="";
                    setgroupcategory=""
                 }
               }
            

            } catch (error) {
                console.log(error);
                alert(error)
            }

         }
        //members
        async function postMembers(){
            try {
                if(!membername.trim()||!memberphonenumber){
                    alert(`member's name and phonenumber cannot be empty`)

                }
            } catch (error) {
                console.error(error)
                
            }
        }
    return(
       <View style={{
        position:'absolute',
        height:'100%',
        width:'100%',
        backgroundColor:'white'
       }} >

        <FontAwsome name="times" size={20} onPress={e=>{
            e.preventDefault()
            renderCreateResponseGroup(false)
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
        }} >Group Purpose</Text>
        <TextInput placeholder="enter group purpose"
        style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            
            height:40,
            padding:10,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }}
        onChangeText={(text)=>{
            setgrouppurpose(text);
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

        <View style={{
            display:'flex',
            flexDirection:'column',
            height:200,
            backgroundColor:'white',
            marginTop:25,
            width:'96%',
            marginLeft:'2%',
            borderRadius:20,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            marginBottom:10,
        }} >
            <Text style={{
                textAlign:'center',
                marginTop:15,
                marginBottom:5,
            }} >Response category</Text>

            {cregion1&&(
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:15,
                   
                }} >
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        height:50,
                        width:'45%',
                        marginLeft:'2%',
                        borderRadius:10,
                        marginRight:'6%',
                        display:"flex",
                        flexDirection:'row',
                        borderStyle:'solid',
                        borderColor:'black',
                        borderWidth:1.0,
                    }} onPress={()=>{
                        showDot1(true);
                      
                        showDot2(false);
                        showDot3(false);
                        showDot4(false);
                        if(dot1){
                            setgroupcategory("government organisation")
                        }else{
                           setgroupcategory("")
                        }
                    }}  >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:15,
                            paddingLeft:20
                        }} >government org</Text>
                        {dot1&&<FontAwsome name='check' size={15} style={{
                            marginTop:15,
                            marginLeft:12,
                        }}  />}
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        height:50,
                        width:'45%',
                        
                        borderRadius:10,
                        marginRight:4,
                        display:"flex",
                        flexDirection:'row',
                        borderStyle:'solid',
                        borderColor:'black',
                        borderWidth:1.0,
                    }} onPress={()=>{
                        showDot2(true);
                        showDot1(false);
                        showDot3(false);
                        showDot4(false);
                        if(dot2){
                            setgroupcategory("non-governmental organisation")
                        }else{
                            setgroupcategory("")
                        }
                        
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:15,
                            paddingLeft:35
                        }} >NGO Org</Text>
                        {dot2&&<FontAwsome name='check' size={15} style={{
                            marginTop:15,
                            marginLeft:12,
                        }}  />}
                    </TouchableOpacity>
                </View>
            )}
            {cregion2&&(
                 <View style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:15,
                 }} >
                <TouchableOpacity style={{
                    backgroundColor:'#1e8ee1',
                    height:50,
                    width:'45%',
                    marginLeft:'2%',
                    borderRadius:10,
                    marginRight:'6%',
                    display:"flex",
                    flexDirection:'row',
                    borderStyle:'solid',
                    borderColor:'black',
                    borderWidth:1.0,
                }} onPress={()=>{
                        showDot2(false);
                        showDot1(false);
                        showDot3(true);
                        showDot4(false);
                        if(dot3){
                            setgroupcategory("Nyumba kumi organisation")
                        }else{
                            setgroupcategory("")
                        }
                        
                    }} >
                    <Text style={{
                        textAlign:'center',
                        paddingTop:15,
                        paddingLeft:25
                    }} >nyumba kumi</Text>
                    {dot3&&<FontAwsome name='check' size={15} style={{
                            marginTop:15,
                            marginLeft:12,
                        }}  />}
                </TouchableOpacity>
                <TouchableOpacity style={{
                     backgroundColor:'#1e8ee1',
                     height:50,
                     width:'45%',
                     
                     borderRadius:10,
                     marginRight:4,
                     display:"flex",
                     flexDirection:'row',
                     borderStyle:'solid',
                    borderColor:'black',
                    borderWidth:1.0,
                }} onPress={()=>{
                        showDot2(false);
                        showDot1(false);
                        showDot3(false);
                        showDot4(true);
                        if(dot4){
                            setgroupcategory("Youth group organisation")
                        }else{
                            setgroupcategory("")
                        }
                        
                    }} >
                    <Text style={{
                        textAlign:'center',
                        paddingTop:15,
                        paddingLeft:25
                    }} >youth group</Text>
                    {dot4&&<FontAwsome name='check' size={15} style={{
                            marginTop:15,
                            marginLeft:12,
                            
                        }}  />}
                </TouchableOpacity>
              </View>
            )}
        </View>
 
        </ScrollView>
       )}
        
        {formMembers&&(
            
            <View style={{
                display:'flex',
                flexDirection:'column',
                borderStyle:'solid',
                borderColor:'black',
                borderWidth:1.0,
                width:'96%',
                marginTop:5,
                marginLeft:'2%',
              }}>
            
            
           
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                
                backgroundColor:'#1e8ee1',
                borderStyle:'solid',
                borderColor:'black',
                borderWidth:1.0,
                width:'100%'
            }} >

                
            <TouchableOpacity onPress={()=>{
                    renderAddMember(true);
                    setFormMembers(true);
                    setAddedMembers(false);
                }} style={{
                    backgroundColor:'white',
                    width:'35%',
                    height:40,
                    marginBottom:'1%',
                    marginTop:'1%',
                    borderRadius:30,
                    display:'flex',
                    flexDirection:'row',
                    borderStyle:'solid',
                    borderColor:'black',
                    borderWidth:1.0,
                    marginLeft:10
                    
                }} ><FontAwsome name='plus' size={18} style={{
                    paddingTop:10,
                    paddingLeft:8
                }}  />
                    <Text style={{
                         textAlign:'center',
                         paddingTop:10,
                         paddingLeft:8,
                    }} >Add members</Text>
                </TouchableOpacity>
                
                {openEye&&<Text style={{
                    marginRight:20,
                    marginTop:10,
                }} >Show Members <FontAwsome name='eye' size={30} style={{
                    marginLeft:5,
                    marginTop:'3%'
                }} onPress={()=>{
                    setAddedMembers(true);
                    setOpenEye(false);
                    setClosedEye(true);
                    renderAddMember(false);
                    //setNewGroup(false)
                }} /></Text>}
                {closedEye&&<Text  style={{
                    marginRight:20,
                    marginTop:10,
                }} >Hide Members <FontAwsome name='eye-slash' size={30}  style={{
                    marginRight:'5%',
                    marginTop:'3%'
                }} onPress={()=>{
                    setAddedMembers(false)
                    setOpenEye(true);
                    setClosedEye(false);
                }} /></Text>}
            </View>
            
            

            {addedMembers&&(
                <ScrollView style={{
                    height:450,
                    marginTop:5
                }}>
                 
                {groups.map(all=>(
                       <View style={{
                        backgroundColor:'white',
                        padding:1,
                       }} >
                        {all.members.map(mbs=>(
                            <View key={mbs.id} style={{
                                backgroundColor:'red',
                                marginTop:2,
                                marginBottom:2,
                                width:"70%",
                                marginLeft:'15%',
                                display:'flex',
                                flexDirection:'row',
                               
                                height:40,
                                borderRadius:20,
                            }} >
                                <FontAwsome name="times" size={30} style={{
                                    marginLeft:10,
                                    marginTop:5
                                }}  />
                                <Text style={{
                                    marginLeft:40,
                                    marginTop:10,
                                }} >{mbs.mname}</Text>
                                <Text style={{
                                    marginLeft:40,
                                    marginTop:10,
                                }} >{mbs.mphone}</Text>
                            </View>
                        ))}
                        
                       </View>
                    ))}
                </ScrollView>
            )}
            
               
              </View>
        )}

        {addMembers&&(
            <View style={{
                backgroundColor:'black',
                marginTop:5,
            }} >
        <FontAwsome name='times' size={20} style={{
            marginTop:12,
           marginLeft:12,
            color:'white',
        }} onPress={()=>{
            setFormMembers(true)
            renderAddMember(false)
        }} />
        <View style={{
            display:"flex",
            flexDirection:"row",
        }} >
        <TextInput  style={{
            backgroundColor:'white',
            width:'89%',
            marginLeft:'2%',
           
            height:40,
            marginTop:5,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            padding:5,
        }} placeholder='  search user from contacts' 
        placeholderTextColor="Black"
        onChange={text=>{
           
        }}
        />
        <FontAwsome name="user" size={30} style={{
            color:"white",
            marginTop:10,
            marginLeft:4,
        }}  />
        </View>
        <Text style={{
            textAlign:'center',
            marginTop:12,
            color:'white'
        }} >Their Name</Text>
        <TextInput value={membername} style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            borderRadius:25,
            height:40,
            marginTop:5,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder='  enter member name' 
        onChange={text=>{
            setmembername(text)
        }}
        />

        <Text style={{
            textAlign:'center',
            marginTop:12,
            color:'white'
        }} >Their Phone number</Text>
        <TextInput value={memberphonenumber} style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            borderRadius:25,
            height:40,
            marginTop:5,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder='  enter Phone Number' 
        onChange={text=>{
           setmemberphonenumber(text)
        }}
        />

  

        <Text style={{
            textAlign:'center',
            marginTop:12,
            color:'white'
        }} >Member Role</Text>
        <TextInput value={memberrole} style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            borderRadius:25,
            height:40,
            marginTop:5,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            padding:5,
        }} placeholder="  enter member's role" 
        onChange={text=>{
           setmemberrole(text)
        }}
        />

        

        <TouchableOpacity style={{
            backgroundColor:'white',
            width:'30%',
            height:40,
            marginLeft:"35%",
            marginTop:'5%',
            borderRadius:30,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            marginBottom:12,
        }} onPress={()=>{
            setAddedMembers(true);
            renderAddMember(false);
            setOpenEye(false);
            setClosedEye(true);
        }} >
            <Text style={{
                textAlign:'center',
                paddingTop:10
            }} >Add Member</Text>
        </TouchableOpacity>
            </View>
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
        }}  >
            <Text style={{
                textAlign:'center',
                paddingTop:10
            }} >save</Text>
        </TouchableOpacity>
       </View>
    )
}