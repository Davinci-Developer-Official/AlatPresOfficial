import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function(){
    const[profile,showProfile]=useState(false);
    const[faqs,showFaqs]=useState(false);
    const[alatPresWeb,showAlatPresWeb]=useState(false);
    const[serviceIntegration,showServiceIntegration]=useState(false);
    const[settings,showSettings]=useState(false);
    const[fundraiser,showFundraiser]=useState(false);
    const [refer,showreferal]=useState(false);
    const[AlatPresCommunity,showAlatPresCommunity]=useState(false);
    
    return(<View>
        <Text>AlatPres Mobile</Text>
        <TouchableOpacity onPress={()=>{
            showProfile(true)
        }} ><Text>profile</Text></TouchableOpacity>
        {profile&&(<View><Text>yep</Text></View>)}

         <TouchableOpacity onPress={()=>{
            showFaqs(true)
        }} ><Text>FAQS</Text></TouchableOpacity>
        {faqs&&(<View><Text>ye</Text></View>)}

         <TouchableOpacity onPress={()=>{
            showAlatPresWeb(true)
        }} ><Text>AlatPres Official Website</Text></TouchableOpacity>
        {alatPresWeb&&(<View><Text>yep</Text></View>)}
        
         <TouchableOpacity onPress={()=>{
            showServiceIntegration(true)
        }} ><Text>Integrated Services</Text></TouchableOpacity>
        {serviceIntegration&&(<View><Text>ye</Text></View>)}

         <TouchableOpacity onPress={()=>{
            showSettings(true)
        }} ><Text>settings</Text></TouchableOpacity>
        {settings&&(<View><Text>Settings</Text></View>)}

         <TouchableOpacity onPress={()=>{
            showFundraiser(true)
        }} ><Text>Fundraisers</Text></TouchableOpacity>
        {fundraiser&&(<View><Text>ye</Text></View>)}

         <TouchableOpacity onPress={()=>{
            showreferal(true)
        }} ><Text>Refer a Friend</Text></TouchableOpacity>
        {refer&&(<View><Text>yep</Text></View>)}

         <TouchableOpacity onPress={()=>{
            showAlatPresCommunity(true)
        }} ><Text>AlatPres Community</Text></TouchableOpacity>
        {AlatPresCommunity&&(<View><Text>ye</Text></View>)}
        </View>)
}