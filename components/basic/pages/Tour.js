import { SafeAreaView,Text } from "react-native";

export default function(){

     //slider info
     const[startTour,setStartTour]=useState(false)
     const[tourSlider,setTourSlider]=useState(true);
     const[intro,setIntro]=useState(true)
     const[dash,setDash]=useState(false); 

    const[groups,setGroups]=useState(false);
    const[createGroups,setCreateGroups]=useState(false);
    const[joinGroup,setJoinGroup]=useState(false);
    const[groupList,setGroupList]=useState(false);
    const[groupJoined,setGroupJoined]=useState(false);
    const[groupRecommended,setGroupRecommended]=useState(false);
    const[groupPopuplar,setGroupPopuplar]=useState(false);
    const[groupSearched,setGroupSearched]=useState(false);

    const[responder,setResponder]=useState(false);
    const[responderList,setResponderList]=useState(false);
    const[responderJoined,setResponderJoined]=useState(false);
    const[responderRecommended,setResponderRecommended]=useState(false);
    const[responderPopuplar,setResponderPopuplar]=useState(false);
    const[responderSearched,setResponderSearched]=useState(false);

    return(
        <SafeAreaView>
            <Text>
            Start Tour
            </Text>
        </SafeAreaView>
    )
}