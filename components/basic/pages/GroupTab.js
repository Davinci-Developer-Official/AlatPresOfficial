import { SafeAreaView,View,Text, TouchableOpacity } from "react-native";
import FontAwsome from "@expo/vector-icons/FontAwesome"

export default function GroupTab({selectedGroup,setSelectedGroup}){

    return(
        <SafeAreaView>
            <View>
            <TouchableOpacity onPress={()=>{
                setSelectedGroup(null)
            }}>
                <FontAwsome  name="times" size={30} />
            </TouchableOpacity>
                <Text> Group id:  {JSON.parse(selectedGroup.uuid)}</Text>
                <Text> Group Name : {selectedGroup.name}</Text>
                <Text>Group Category : {selectedGroup.category} </Text>
            </View>
        </SafeAreaView>
    )
}