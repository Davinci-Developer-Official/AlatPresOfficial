import { useEffect } from "react";
import { View } from "react-native";


export default function IndividualAlert({alertid}){

    const alerts= [
        {   
            alertId:`1eb323b`,
            type:'fire',
            locationInfo:"Roysambu",
            description:"A fire breakout in the roysambu region",
            datePosted:"12/04/2023",
            timePosted:"12:25 pm",
            durationActive:`12 days`,
            status:"active"
        },
        {   
            alertId:`1cb243c`,
            type:'floods',
            locationInfo:"budalangi",
            description:"A fire breakout in the budalangi region",
            datePosted:"12/04/2023",
            timePosted:"12:25 pm",
            durationActive:`12 days`,
            status:"active"
        }
    ];
    
    return(
    <View>
        
    </View>
    )
}