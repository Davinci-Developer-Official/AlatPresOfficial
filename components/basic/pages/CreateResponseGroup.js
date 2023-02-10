import { useEffect, useState } from "react";
import { View,Text,TextInput,TouchableOpacity, ScrollView } from "react-native";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import{groups}from '../../../mockData/metrics'
export default function CreateResponseGroup({renderCreateResponseGroup}){
    const[formData,setFormData]=useState({
        groupname:'',
        operatingregion:'',
        membername:'',
        memberphone:'',
        memberidno:'',
        memberrole:'',
        memberresidence:'',
        hotlinenumber:'',
        groupcategory:{
            official:{
                government:{
                    name:'government',
                    status:false,
                },
                NGO:{
                    name:'NGO',
                    status:false
                }
            },
            public:{
                nyumbakumi:{
                    name:'nyumba kumi',
                    status:false,
                },
                youthgroup:{
                    name:'youth groups',
                    status:false,
                },
            }
        },
        grouptheme:'',      
    });
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
            marginTop:12,
            height:30,
            backgroundColor:'#1e8ee1',
            width:'96%',
            marginLeft:'2%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            paddingTop:6,
        }} >Group Name</Text>
        <TextInput value={formData.groupname} style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            
            height:40,
            
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder='  enter group name' 
        onChange={text=>{
            
            setFormData({groupname:text});
        }}
        />

        
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
                    height:400,
                    marginTop:5
                }}>
                 
                {groups.map(all=>(
                       <View style={{
                        backgroundColor:'white'
                       }} >
                        {all.members.map(mbs=>(
                            <View key={mbs.id} style={{
                                backgroundColor:'red',
                                marginTop:2,
                                marginBottom:2,
                                width:'96%',
                                marginLeft:'2%',
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-evenly',
                                height:50,
                                borderRadius:20,
                            }} >
                                <Text>{mbs.mname}</Text>
                                <Text>{mbs.mphone}</Text>
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

        <Text style={{
            textAlign:'center',
            marginTop:12,
            color:'white'
        }} >Member Name</Text>
        <TextInput value={formData.membername} style={{
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
            setFormData({membername:text});
        }}
        />

        <Text style={{
            textAlign:'center',
            marginTop:12,
            color:'white'
        }} >Phone number</Text>
        <TextInput value={formData.membername} style={{
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
            setFormData({membername:text});
        }}
        />

    <Text style={{
            textAlign:'center',
            marginTop:12,
            color:'white'
        }} >Id Number</Text>
        <TextInput value={formData.membername} style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            borderRadius:25,
            height:40,
            marginTop:5,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder='  enter Id number' 
        onChange={text=>{
            setFormData({membername:text});
        }}
        />

        <Text style={{
            textAlign:'center',
            marginTop:12,
            color:'white'
        }} >Member Role</Text>
        <TextInput value={formData.membername} style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            borderRadius:25,
            height:40,
            marginTop:5,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder="  enter member's role" 
        onChange={text=>{
            setFormData({membername:text});
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
        
    

        <Text  style={{
            textAlign:'center',
            marginTop:12,
            height:30,
            backgroundColor:'#1e8ee1',
            width:'96%',
            marginLeft:'2%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            paddingTop:6,
        }} >Hotline Number</Text>
        <TextInput value={formData.hotlinenumber} style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
            
            height:40,
           
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder=' enter hotline number' 
        onChange={text=>{
            setFormData({hotlinenumber:text});
        }}
        />

        <View>
            <Text  style={{
            textAlign:'center',
            marginTop:12,
            height:30,
            backgroundColor:'#1e8ee1',
            width:'96%',
            marginLeft:'2%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            paddingTop:6,
        }} >group purpose</Text>
            <TextInput  style={{
            backgroundColor:'white',
            width:'96%',
            marginLeft:'2%',
           
            height:150,
            
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
        }} placeholder=' group purpose eg Fire response group' />
        </View>

        <View style={{
            display:'flex',
            flexDirection:'column',
            height:150,
            backgroundColor:'white',
            marginTop:10,
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
                marginTop:5,
                marginBottom:5,
            }} >Response category</Text>

            {cregion1&&(
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                   
                }} >
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        height:40,
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
                        setFormData({
                            groupcategory:true
                        });
                        showDot2(false);
                        showDot3(false);
                        showDot4(false);
                    }}  >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:10,
                            paddingLeft:16
                        }} >government org</Text>
                        {dot1&&<FontAwsome name='check' size={15} style={{
                            marginTop:12,
                            marginLeft:12,
                        }}  />}
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor:'#1e8ee1',
                        height:40,
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
                        
                    }} >
                        <Text style={{
                            textAlign:'center',
                            paddingTop:10,
                            paddingLeft:25
                        }} >NGO Org</Text>
                        {dot2&&<FontAwsome name='check' size={15} style={{
                            marginTop:12,
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
                    marginTop:12,
                 }} >
                <TouchableOpacity style={{
                    backgroundColor:'#1e8ee1',
                    height:40,
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
                        
                    }} >
                    <Text style={{
                        textAlign:'center',
                        paddingTop:10,
                        paddingLeft:25
                    }} >nyumba kumi</Text>
                    {dot3&&<FontAwsome name='check' size={15} style={{
                            marginTop:12,
                            marginLeft:12,
                        }}  />}
                </TouchableOpacity>
                <TouchableOpacity style={{
                     backgroundColor:'#1e8ee1',
                     height:40,
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
                        
                    }} >
                    <Text style={{
                        textAlign:'center',
                        paddingTop:10,
                        paddingLeft:25
                    }} >youth group</Text>
                    {dot4&&<FontAwsome name='check' size={15} style={{
                            marginTop:12,
                            marginLeft:12,
                            
                        }}  />}
                </TouchableOpacity>
              </View>
            )}
        </View>
        </ScrollView>

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
            renderCreateResponseGroup(false);
            alert(`Saving to database`);
        }} >
            <Text style={{
                textAlign:'center',
                paddingTop:10
            }} >save</Text>
        </TouchableOpacity>
       </View>
    )
}