import { StatusBar,ScrollView,View,Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import { useEffect, useState } from "react";
import { alerts } from "../mockData/metrics";
import axios from "axios";
import {io} from "socket.io-client";


export default function Searchbar (props){
    const baseUrl ="https://cfca-102-219-208-195.in.ngrok.io"
    
    const socket = io(`${baseUrl}`);

    const[searchTitle,setSearchTitle]=useState("");
    const [searchString,setSearchString]=useState("");
    const[fetchedData,setFetchedData]=useState([...alerts]);
    const[selectedOption,setselectedoption]=useState("");
    const[selectedOptionId,setselectedoptionId]=useState("");
    const[resgroup,setResGroup]=useState(false);
    const[resgrouprender,setResGroupRender]=useState(false);
    const[alertz,setalertz]=useState(false);
    const[alertsrender,setalertsrender]=useState(false);
    const[resprovider,setresprovider]=useState(false);
    const[report,setReport]=useState(false);
    const[reportsrender,setReportsrender]=useState(false);
    const[contentArea,setContentArea]=useState(true);
    const[closeoptions,setcloseoptions]=useState(true);
    const[showoptions,setshowoptions]=useState(false);
    const[data,setData]=useState([])
    
    const[fetchs ,setFetchs]=useState([])

    //fetch resgroups
   async function fetchResgroup (){
        //axios
            const response= await fetch(`${baseUrl}/api/resgroup`,
            {
                method:'GET',
                headers:{
                    accept:'application/json'
                }
            })
            const data = await response.json();
            setFetchs(JSON.stringify(data));
            //alert(fetchs)

            //
            //.then(res=>{res.data})
            //.then(results=>{setFetchs(results)});
            fetchedGroups.push(fetchs)
/*replace axios if  needed */  //fetch(`${baseUrl}/api/resgroup`)
/*replace axios if  needed */  //.then(response=>response.json())
/*replace axios if  needed */  //.then(responseJson=>{
/*replace axios if  needed */  //    var newData = fetchs.concat(responseJson.data)
/*replace axios if  needed */  //    setFetchs(newData)
/*replace axios if  needed */  //})
    }
    
    function sortData(){
        if(!searchString.trim()){
            alert(`search entry is empty`)
        }else{
            //let mapInfo = fetchedData.map(info=>{
            //    setData([info.name])
            //})
            //alert(JSON.stringify(...data))
            //let param = [...data]
            //alert(JSON.stringify(...param))
            //const comparison = searchString.localeCompare(param);
           //alert(comparison)
            //if(comparison == 1  ){
            //    param.filter(choice =>{
            //        let voom = choice.length > comparison
            //     })
            //    alert(`yeee`)
            //}else if(comparison == 0){
            //    alert(`zeee`)
            //}else if(comparison == -1){
            //    alert(`weee`)
            //}
        }
    }

    function onSearch(searchTerm){
        console.log("search",searchTerm)
        alert(searchTerm)
        setSearchString(searchTerm)
    }
    function onChangeText(event){
        setSearchString(event)
       
    }

    function currentEvent(){
        if(resgroup){
            setResGroupRender(true)
        }else if(alerts){
            setalertsrender(true);
        }
    }
    const fetchedGroups =[];

    useEffect(()=>{

        if(resgroup == false){
            socket.on("statusgroups",(args)=>{
                setResGroup(args)
                console.log(`${args}`)
            })

            socket.on("groups",(args)=>{
                setSearchTitle(args)
            })
        }
       
        currentEvent()
        
        
        if(resgroup === true ){
           setTimeout(() => {
            fetchResgroup();
            console.log(`response:=>${fetchs}`);
            //alert(fetchedGroups);
            fetchedGroups.push([...fetchs])
           // alert(fetchedGroups);
           },200);
           
            
            
            
            
        }else if(alertz){
            alert(`weqwe`)
        }else if(resprovider){
            alert(`zqwex`)
        }else if(report){

        }
      
        
    },[])
    return(
    
   <SafeAreaView style={{
   
    height:"100%",
    width:"100%",
   }} >
  
    
    <View style={{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        borderStyle:"solid",
        borderWidth:1.0,
        height:70,
        borderWidth:1.0,
        marginTop:0,
        borderColor:"#1e8ee1"
    }}>
        <TextInput value={searchString}  style={{
            width:"90%",
           backgroundColor:"white",
           marginLeft:"2%",
           height:50,
           marginTop:7,
           padding:15,
           borderRadius:10,
           borderColor:"#1e8ee1",
           borderWidth:1.5,
        }} placeholder={`Search for ${searchTitle}`} 
        onChangeText={onChangeText}
        />
        <TouchableOpacity style={{
            backgroundColor:"white",
            width:"7%",
            height:50,
            marginTop:7,
           
        }} onPress={()=>{onSearch(searchString)}} >
            <Text style={{
                paddingTop:15,
                marginLeft:7,
            }} ><FontAwsome name="search" size={20} style={{
                color:"#1e8ee1"
            }} /></Text>
        </TouchableOpacity>
    </View>
    {contentArea&&(
    <ScrollView style={{
        width:"98%",
        backgroundColor:"white",
        marginLeft:"1%",
        marginBottom:"15%",
        borderWidth:1.0,
        borderStyle:"solid",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderColor:"#1e8ee1",

    }} >
      
        {resgroup && fetchedData
         .filter((item)=>{
            const searchTerm = searchString.toLowerCase()
            const groupname = item.name.toLowerCase()
            return  searchTerm ? groupname.startsWith(searchTerm) && groupname !== searchTerm : groupname ;
        })
        .map((item)=>(
            <TouchableOpacity key={item.id} onPress={()=>{
                setselectedoptionId(item.id)
                setselectedoption(item.name)
                alert(` items ${selectedOption} with id ${selectedOptionId} `)
                onSearch(item.name);
            }} style={{
                backgroundColor:"white",
                width:"96%",
                marginLeft:"2%",
                marginTop:10,
                height:50,
                borderRadius:20,
                borderStyle:"solid",
                borderWidth:1.5,
                borderColor:"#1e8ee1",
                display:"flex",
                flexDirection:"row",
                marginBottom:7
            }} >
               <View style={closeoptions ? {
                backgroundColor:"#1e8ee1",
                width:"96%",
                borderStyle:"solid",
                borderWidth:1.0,
                borderColor:"#1e8ee1",
                borderRadius:20,
               }:{
                backgroundColor:"#1e8ee1",
                width:"45%",
                borderStyle:"solid",
                borderWidth:1.0,
                borderColor:"#1e8ee1",
                borderRadius:20,
               }} >
               <Text style={{
                    paddingTop:10,
                    paddingLeft:10,
                    textAlign:"center",
                    letterSpacing:2
                }} >{item.name}</Text>
               
               </View>
               <View>
                
               </View>
              {closeoptions ?  <FontAwsome name="ellipsis-v" size={30}  style={{
                paddingTop:11,
                paddingLeft:4,
               }} onPress={()=>{
                
                setshowoptions(false)
                setcloseoptions(false)
                setshowoptions(true)
                setResGroupRender(false)
                setResGroupRender(true)
                
                
               }} />:<FontAwsome name="caret-right" size={30} style={{
                paddingTop:11,
                paddingLeft:4,
               }} onPress={()=>{
                setcloseoptions(true);
                setResGroupRender(false);
               }} />}
               {resgrouprender&&(
               <View style={{
                backgroundColor:"white",
                width:"51%",
                borderTopRightRadius:20,
                borderBottomRightRadius:20,
                display:"flex",
                flexDirection:"row",
               }} >
                <View style={{
                    backgroundColor:"white",
                    width:"30%",
                    marginLeft:5,
                    borderRadius:20,
                    borderStyle:"solid",
                    height:"90%",
                    marginTop:"1%",
                    borderColor:"#1e8ee1"
                }} >
                <FontAwsome name="group" size={20} style={{
                    paddingLeft:20,
                    paddingTop:1.4,
                }} />
                <Text style={{
                    textAlign:"center",
                }} >Join</Text>
                </View>
                <View style={{
                     backgroundColor:"white",
                     width:"30%",
                     marginLeft:5,
                     borderRadius:20,
                     borderStyle:"solid",
                     height:"90%",
                     marginTop:"1%",
                     borderColor:"#1e8ee1"
                }} >
                <FontAwsome name="trash" size={20} style={{
                     paddingLeft:20,
                     paddingTop:1.4,
                }} />
                <Text style={{
                    textAlign:"center"
                }} >Leave</Text>
                </View>
                <View style={{
                     backgroundColor:"white",
                     width:"30%",
                     marginLeft:5,
                     borderRadius:20,
                     borderStyle:"solid",
                     height:"90%",
                     marginTop:"1%",
                     borderColor:"#1e8ee1"
                }} >
                <FontAwsome name="info" size={20} style={{
                     paddingLeft:20,
                     paddingTop:1.4,
                }} />
                <Text style={{
                    textAlign:"center"
                }} >info</Text>
                </View>
               </View>)}
            </TouchableOpacity>
        ))}

    </ScrollView>)}
   </SafeAreaView>
    )
}
