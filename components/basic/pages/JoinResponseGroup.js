import { View,Text, ScrollView, TouchableOpacity, FlatList, TextInput  } from "react-native";
import { groupListing } from "../../../mockData/metrics";
import FontAwsome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import { responseGroups,groups } from '../../../mockData/metrics';



export default function JoinResponseGroup({renderJoinResponseGroup,setBasicDashboard}){
    const [searchInput, setSearchInput] = useState('');
    const[recommended,setRecommended]=useState(true);
    const[renderRecommended,setRenderRecommended]=useState(true);
    const[popular,setPopular]=useState(false);
    const[renderPopular,setRenderPopular]=useState(false);
    const[joins,setJoin]=useState(false);
    const[newArr,setNewArr]=useState([...groupListing]);
    const[joinedList,setJoinedList]=useState(false) 
    const[recommendedList,setRecommendedList]=useState(false)
    const[mostSearchedL,setMostSearchedList]=useState(false) 
    const[popList,setPopLiist]=useState(true)
    const[mainList,setMainList]=useState(false)
    
    const[exitMain,setExitMain]=useState(false)
    const[exitJoined,setExitJoined]=useState(false)
    const[exitRecommended,setExitRecommended]=useState(false)
    const[exitPopular,setExitPopular]=useState(false)
    const[exitMostSearched,setExitMostSearched]=useState(false)
    
    const[carretMain,setCarretMain]=useState(true)
    const[carretJoined,setCarretJoined]=useState(true)
    const[carretRecommended,setCarretRecommended]=useState(true)
    const[carretPopular,setCarretPopular]=useState(true)
    const[carretMostSearched,setCarretMostSearched]=useState(true)

   //search
    const data =[...groups]
    const[arrData,setArrData]=useState([]);
    const joinedGroups=[];
    
    function searchItems(searchValue){
        setSearchInput(searchValue);
        setArrData(data)
        const filterData=arrData.filter(item=>{
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
        })
        
    }

    const grp =[...responseGroups];
    return(
        <View style={{
            position:'absolute',
            backgroundColor:'white',
            height:'100%',
            width:'100%',
            
            
        }} >
        <FontAwsome name="times" size={20} onPress={e=>{
            e.preventDefault()
            renderJoinResponseGroup(false)
        }} style={{
            marginLeft:10,
            marginTop:'1%',
        }} />
        {popList&&(
              <TouchableOpacity 
              style={{
                  width:'98%',
                  marginLeft:'1%',
                  marginTop:3,
                  height:40,
                  backgroundColor:'black',
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between'
              }}
              onPress={()=>{
                  setMainList(true)
                  setJoinedList(false)
                  setRecommendedList(false)
                  setPopular(false)
                  setMostSearchedList(false)
                  setCarretMain(false);
                  setExitMain(true)
              }} >
                  <Text style={{
                      paddingTop:12,
                      color:'white',
                      marginLeft:15
                  }} >Response Groups List</Text>
                  {carretMain&&(<FontAwsome name='caret-down' size={20} style={{
                      color:'white',
                      paddingTop:12,
                      marginRight:10,
                  }} />)}
                  {exitMain&&(<FontAwsome name='times' size={20} style={{
                      color:'white',
                      paddingTop:12,
                      marginRight:10,
                  }} onPress={()=>{
                    setMainList(false)
                    setCarretMain(true)
                    setExitMain(false)
                  }} />)}
              </TouchableOpacity>
        )}
        {mainList&&(<View style={{
            backgroundColor:'white',
            marginTop:2,
            height:350,
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            width:'98%',
            marginLeft:'1%',
        }} >
            <TextInput placeholder="search groups" style={{
                backgroundColor:'gray',
                marginTop:4,
                width:'98%',
                marginLeft:'1%',
            }} onChange={e=>{searchItems(e.target.value)}} />
            <ScrollView style={{
                 backgroundColor:'white',
                 marginTop:4,
                 width:'100%',               
                 marginBottom:4,
                 borderStyle:'solid',
                borderColor:'black',
                borderWidth:1.0,
            }} >
                
                {data.map(list=>(
                    <View key={list.id} style={{
                        backgroundColor:'#1e8ee1',
                        marginTop:4,
                        width:'98%',
                        marginLeft:'1%',
                        height:30,
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }} >
                        
                        <Text>{list.name}</Text>
                        <TouchableOpacity>
                            <Text>Join</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>)}
        <TouchableOpacity 
        style={{
            width:'98%',
            marginLeft:'1%',
            marginTop:5,
            height:40,
            backgroundColor:'black',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        }}
        onPress={()=>{
            setJoinedList(true)
            setPopLiist(true)
            setMainList(false)
            setCarretJoined(false)
            setExitJoined(true)
        }} >
            <Text style={{
                paddingTop:12,
                color:'white',
                marginLeft:15
            }} >Joined Groups</Text>
            {carretJoined&&(<FontAwsome name='caret-down' size={20} style={{
                color:'white',
                paddingTop:12,
                marginRight:10,
            }} />)}
            {exitJoined&&(<FontAwsome name='times' size={20} style={{
                color:'white',
                paddingTop:12,
                marginRight:10,
            }} onPress={()=>{
                setJoinedList(false)
                setCarretJoined(true)
                setExitJoined(false)
            }} />)}
        </TouchableOpacity>
        {joinedList&&(
            <ScrollView style={{
            width:'98%',
            marginLeft:'1%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            height:250,
            }} >
                
                {grp.map(item=>(
                    <View key={item.key} style={{
                        backgroundColor:'red',
                        marginTop:5,
                        height:30,
                        width:'98%',
                        marginLeft:'1%',
                    }} >
                        <Text>{item.value}</Text>

                    </View>
                ))}
            </ScrollView>
        )}

        <TouchableOpacity 
        style={{
            width:'98%',
            marginLeft:'1%',
            marginTop:5,
            height:40,
            backgroundColor:'black',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        }}
        onPress={()=>{
            setRecommendedList(true)
            setMainList(false)
            setCarretRecommended(false)
            setExitRecommended(true)
            
        }} >
            <Text style={{
                paddingTop:12,
                color:'white',
                marginLeft:15
            }} >Recommended Groups</Text>
            {exitRecommended&&(<FontAwsome name="times" size={20} onPress={e=>{
                        e.preventDefault()
                    setRecommendedList(false)
                    setExitRecommended(false)
                    setCarretRecommended(true)
                    }} style={{
                        marginRight:10,
                        marginTop:10,
                        color:'white'
                    }} 
                 />)}
            {carretRecommended&&(<FontAwsome name='caret-down' size={20} style={{
                color:'white',
                paddingTop:12,
                marginRight:10,
            }} />)}
        </TouchableOpacity>
        {recommendedList&&(
            <ScrollView style={{
            width:'98%',
            marginLeft:'1%',
            borderStyle:'solid',
            borderColor:'black',
            borderWidth:1.0,
            height:300,
            }} >
                
                {grp.map(item=>(
                    <View key={item.key} style={{
                        backgroundColor:'red',
                        marginTop:5,
                        height:30,
                        width:'98%',
                        marginLeft:'1%',
                    }} >
                        <Text>{item.value}</Text>

                    </View>
                ))}
            </ScrollView>
        )}

        <TouchableOpacity 
        style={{
            width:'98%',
            marginLeft:'1%',
            marginTop:5,
            height:40,
            backgroundColor:'black',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        }}
        onPress={()=>{
            setPopular(true)
            setMainList(false)
            setExitPopular(true)
            setCarretPopular(false)
        }} >
            <Text style={{
                 paddingTop:12,
                 color:'white',
                 marginLeft:15
            }} >Most Popular Groups</Text>
            {carretPopular&&(<FontAwsome name='caret-down' size={20} style={{
                color:'white',
                paddingTop:12,
                marginRight:10,
            }} />)}
            {exitPopular&&(<FontAwsome name='times' size={20} style={{
                color:'white',
                paddingTop:12,
                marginRight:10,
            }} onPress={()=>{
                setPopular(false)
                setExitPopular(false)
            setCarretPopular(true)

            }} />)}
        </TouchableOpacity>
        {popular&&(
            <ScrollView style={{
                width:'98%',
                marginLeft:'1%',
                borderStyle:'solid',
                borderColor:'black',
                borderWidth:1.0,
                height:300,
                }} >
                   
                {grp.map(item=>(
                    <View key={item.key} style={{
                        backgroundColor:'red',
                        marginTop:5,
                        height:30,
                        width:'98%',
                        marginLeft:'1%',
                    }} >
                        <Text>{item.value}</Text>

                    </View>
                ))}
            </ScrollView>
        )}

        <TouchableOpacity 
        style={{
            width:'98%',
            marginLeft:'1%',
            marginTop:5,
            height:40,
            backgroundColor:'black',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        }}
        onPress={()=>{
            setMostSearchedList(true)
            setMainList(false)
            setExitMostSearched(true)
            setCarretMostSearched(false)
        }} >
            <Text style={{
                 paddingTop:12,
                 color:'white',
                 marginLeft:15
            }} >Most Searched Groups</Text>
           {carretMostSearched&&( <FontAwsome name='caret-down' size={20} style={{
                color:'white',
                paddingTop:12,
                marginRight:10,
            }} />)}
            {exitMostSearched&&( <FontAwsome name='times' size={20} style={{
                color:'white',
                paddingTop:12,
                marginRight:10,
            }} onPress={()=>{
                setMostSearchedList(false)
                setExitMostSearched(false)
                setCarretMostSearched(true)
            }} />)}
        </TouchableOpacity>
        {mostSearchedL&&(
            <ScrollView style={{
                width:'98%',
                marginLeft:'1%',
                borderStyle:'solid',
                borderColor:'black',
                borderWidth:1.0,
                height:300,
                }} >
                   
                {grp.map(item=>(
                    <View key={item.key} style={{
                        backgroundColor:'red',
                        marginTop:5,
                        height:30,
                        width:'98%',
                        marginLeft:'1%',
                    }} >
                        <Text>{item.value}</Text>

                    </View>
                ))}
            </ScrollView>
        )}
       
      
        </View>
    )
}