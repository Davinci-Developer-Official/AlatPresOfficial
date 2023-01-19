import React from 'react';
import{View,TextInput,Button}from 'react-native';

class CreateResponseGroup extends React.Component{
    constructor(){
        super();
        this.state={
            groupname:'',
            respresentation:'',
            location:'',
            headquater:'',
            responsenumber:'',
            representativename:'',
            respresentativeposition:'',
            availability:'',
            totalmembers:'',
            
        }
        this.newMembers={
            membername:'',
            phonenumber:'',
            location:'',
            position:'',
        }
    }
    render(){
        return(
        <View>
            <TextInput 
            placeholder='Rema Group'
            onChangeText={text=>{this.setState({groupname:text})}} />
           
        </View>
        )
    }
}
export default CreateResponseGroup;
