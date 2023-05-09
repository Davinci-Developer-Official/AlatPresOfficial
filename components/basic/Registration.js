import { useEffect, useState } from "react"
import{
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    Platform,
    Linking,
    FlatList
}from "react-native"
import Checkbox from 'expo-checkbox';
import email from "react-native-email"
import * as SMS from 'expo-sms';
import { TOA } from "../../mockData/metrics";
import FontAwsome from '@expo/vector-icons/FontAwesome'
import countries from '../../mockData/CountryCodes.json'
import Infoslider from "./pages/Infoslider";


export default function RegistrationOptions({showRegistrationPage,setUpdatedDash,setIntro}){
    const[enterUsername,setEnterUsername]=useState(true)
    const[enterEmail,setEnterEmail]=useState(true);
    const[verifyOTP,setVerifyOTP]=useState(false)
    const[tour,setTour]=useState(false); //set false
    const[formData,setFormData]=useState(true) //set true
    const[otpSegment,setOtpSegment]=useState(false)
    const [choices,setChoices]=useState(true)
    const[identity,setIdentity]=useState(true)
    const[otpMethod,setOtpMethod]=useState(false)
    const[otpConfirmationArea,setOtpConfirmationArea]=useState(false)
    
    const Terms =`Terms of Agreement for AlatPres Safety Provider Application

    These Terms of Agreement ("Agreement") govern your use of the AlatPres Safety Provider Application ("AlatPres" or "Application"), provided by Alatpres ("Provider" or "we" or "us"). By downloading, installing, or using the AlatPres Application, you ("User" or "you") agree to be bound by the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, please refrain from using the AlatPres Application.
    
    1. Scope of Services
    1.1 AlatPres is a safety provider application that offers a range of safety features and services to users. These services may include but are not limited to emergency assistance, location tracking, safety alerts, and communication tools.
    
    1.2 The services provided by AlatPres may vary depending on your location, device capabilities, and other factors. We reserve the right to modify, enhance, or discontinue any part of the Application's services without prior notice.
    
    2. User Obligations
    2.1 By using the AlatPres Application, you agree to provide accurate and up-to-date information during the registration process. You are solely responsible for the confidentiality of your account details, including your username and password.
    
    2.2 You must not use the AlatPres Application for any unlawful or unauthorized purposes, and you shall comply with all applicable laws and regulations while using the Application.
    
    2.3 You acknowledge and agree that the AlatPres Application is not a substitute for emergency services, and it is your responsibility to contact appropriate emergency services in case of an emergency.
    
    3. Intellectual Property Rights
    3.1 The AlatPres Application, including its design, features, and content, is protected by intellectual property rights, including but not limited to copyrights, trademarks, and patents. All rights not expressly granted herein are reserved by Alatpres.
    
    3.2 You agree not to reproduce, modify, distribute, sell, or exploit any part of the AlatPres Application without prior written permission from Alatpres.
    
    4. Privacy and Data Protection
    4.1 The privacy and security of your personal information are of utmost importance to us. Our Privacy Policy outlines how we collect, use, store, and disclose your information when you use the AlatPres Application. By using the Application, you consent to our collection and processing of your personal information as described in the Privacy Policy.
    
    4.2 We implement reasonable security measures to protect your information; however, we cannot guarantee absolute security, and you acknowledge and accept the risks involved in transmitting information over the internet.
    
    4.3 You agree not to misuse any personal information of other users obtained through the AlatPres Application and to comply with all applicable data protection laws and regulations.
    
    5. Disclaimers and Limitations of Liability
    5.1 The AlatPres Application is provided on an "as is" and "as available" basis, without any warranties or representations, expressed or implied. We do not warrant that the Application will be error-free, uninterrupted, or free from viruses or other harmful components.
    
    5.2 To the maximum extent permitted by applicable law, Alatpres shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use or inability to use the AlatPres Application, even if we have been advised of the possibility of such damages.
    
    5.3 You acknowledge that the use of the AlatPres Application is at your own risk, and you agree to release Alatpres and its affiliates, directors, officers, employees, and agents from any claims or liability arising out of or in connection with your use of the Application.
    
    6. Termination
    6.1 Alatpres may, at its sole discretion, terminate or suspend your access to the AlatPres Application at any time, without prior notice, for any reason, including but not limited to violation of this Agreement or any applicable law.

    6.2 Upon termination, all rights and licenses granted to you under this Agreement will immediately cease, and you must cease all use of the AlatPres Application.
    
    7. Governing Law and Jurisdiction
    7.1 This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where Alatpres is located, without regard to its conflict of laws principles.
    
    7.2 Any dispute arising out of or in connection with this Agreement, including any questions regarding its existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts in the aforementioned jurisdiction.
    
    8. Amendments to the Agreement
    8.1 Alatpres reserves the right to modify or update this Agreement at any time, in its sole discretion. Any changes to the Agreement will be notified to you through the AlatPres Application or by other reasonable means.
    
    8.2 By continuing to use the AlatPres Application after the modifications or updates to the Agreement, you agree to be bound by the revised terms. If you do not agree with the revised terms, you must cease using the AlatPres Application.
    
    9. Severability
    9.1 If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
    
    9.2 The invalid, illegal, or unenforceable provision shall be deemed replaced by a valid, legal, and enforceable provision that most closely matches the intent of the original provision.
    
    10. Entire Agreement
    10.1 This Agreement constitutes the entire agreement between you and Alatpres regarding the use of the AlatPres Application and supersedes any prior agreements or understandings, whether oral or written.
    
    10.2 No waiver of any provision of this Agreement shall be deemed a further or continuing waiver of such provision or any other provision.
    
    By using the AlatPres Safety Provider Application, you acknowledge that you have read, understood, and agree to be bound by these Terms of Agreement. If you do not agree to these terms, you must not use the AlatPres Application.`
    
    //data
    const [data,setData]=useState({
        username:"",
        email:"",
    })
   

    //checkboxes
    const[isSms,setIsSms]=useState(false)
    const[isEmail,setIsEmail]=useState(false)
    const[isToa,setIsToa]=useState(false)
    const[isSubscribe,setIsSubscribe]=useState(false)

    const[alerts,setAlerts]=useState(false);
    const[createAlerts,setCreateAlerts]=useState(false);
    const[alertLists,setAlertLists]=useState(false);

    const[termsOfAgreement,setTermsOfAgreement]=useState(false);
    const[phoneRegitration,setPhoneRegistration]=useState(false);
    const[emailRegistration,setEmailRegistration]=useState(false);
    const[]=useState(false);
    const[]=useState(false);
    const[]=useState(false);

   
    const[tryAnotherWay,setTryAnotherWay]=useState(false)
    const[editNumber,setEditNumber]=useState(false)
   
    /*April changes*/
    const[termsArea,setTermArea]=useState(true)

    const[selectCountry,setSelectCountry]=useState(false)
    const[selectedCountry,setSelectedCountry]=useState('')
    const[selectedCountryCode,setSelectedCountryCode]=useState("")
    const[entry,setEntry]=useState({
        emailaddress:"",
        phonenumber:""
    })
   const [searchString,setSearchString]=useState("");
   const[ProceedToOtp,setProceedToOtp]=useState(false)
   const[otpseg,setotpseg]=useState(false)

    
    //otp
    const[OTP,setOTP]=useState("");
    //const[enteredOTP,setEnteredOTP]=useState("")
    const[smsAvailable,setSmsAvailable]=useState("")

    async function generateOTP(){
        let max = 900000;
        let min= 100000;
        let gen = await Math.floor(Math.random()*(max-min)+min);
        setOTP(gen);
        
       
    }
    
    async function sendSms(){
        generateOTP()
        const number = selectedCountryCode + entry.phonenumber;
        //alert(number)
        if(selectedCountryCode.trim().length == 0){
            alert(`please choose your country of residence`)
        }else{
        setPhoneRegistration(false);
        setotpseg(true)
        const{result}= await SMS.sendSMSAsync(
            `0113477249`,
            `Your activation otp is ${OTP}`
        )
        }
        
        

    }

   
     function OTPVerification(){
        let eotp= enteredOTP;
        let gotp= OTP;
        
        
         if(eotp.trim().length == 0){
            alert(`please enter OTP`)
         }else{ 
            //alert(`you are wrong`)
            if(eotp==gotp){
            alert(`voila `)
            setStartTour(true)
            }else {
            alert(`you are wrong ${gotp}`)   
            }
        }
        
    }
    const confirmSmsAvailable = async()=>{
        const issmsavailable = await SMS.isAvailableAsync();
        setSmsAvailable(issmsavailable);
    }
    useEffect(()=>{
        
        confirmSmsAvailable()
     },[])

    return(
        <SafeAreaView style={{
            backgroundColor:'white',
            height:"100%",
            
        }} >
       
        {identity&&(
            <View style={{
                display:'flex',
                flexDirection:"row",
                marginTop:"12%",
                marginBottom:10,
                width:"99%",
                marginLeft:".5%",
                backgroundColor:"white",
                height:50,

                borderStyle:"solid",
                borderBottomWidth:1.0,
                borderBottomColor:"#1e8ee1",
            }} >
                <Image source={require('../../assets/alatpres_logo.png')} style={{
                    height:50,
                    width:50,
                    marginLeft:"1%",
                    borderRadius:60,
                    borderStyle:"solid",
                    borderWidth:1.0,
                   
                   
                }} />
                <Text style={{
                    color:"#1e8ee1",
                    marginTop:30,
                    marginLeft:20,
                }} >confrim your Phone Number {smsAvailable?<Text>via sms</Text>:""}</Text>

                <FontAwsome name="info" size={30} style={{
                    marginLeft:70,
                    marginTop:15,
                    color:"#1e8ee1",
                }} onPress={()=>{
                    showRegistrationPage(false)
                    setIntro(true)
                }} />
               
            </View>
        )}
        {phoneRegitration&&(
            <View>
                <View style={{
                    width:"90%",
                    marginLeft:"5%",
                    marginTop:20,
                    display:"flex",
                    flexDirection:"column",
                }} >
               
                
                    <View style={{
                        
                    }} >
                        <Text>Countries</Text>
                       <View style={{
                        display:"flex",
                        flexDirection:"row"
                       }} >
                       <TextInput placeholder="search for our country"
                        value={!selectedCountry?searchString:selectedCountry}
                        style={{
                            borderBottomWidth:1,
                            paddingLeft:10,
                            width:"80%",
                            borderBottomColor:"#1e8ee1",
                            
                        }} onChangeText={(text)=>{
                            
                            setSearchString(text)
                        }} onTouchStart={()=>{
                            setSelectCountry(true)
                            
                            
                        }} />
                        <FontAwsome name="eraser"  size={20} onPress={()=>{
                            setSelectedCountry("")
                        }} style={selectedCountry?{
                            color:"black",
                        }:{
                            color:"#1e8ee1",
                        }} />
                       </View>
                       
                    {selectCountry&&(<ScrollView 
                    style={{
                        marginTop:5,
                        borderWidth:1,
                        width:"100%",
                        height:250,

                        borderColor:"#1e8ee1"
                    }}
                    >
                            {countries
                            .filter(item=>{
                                let searchTerm = searchString.toLowerCase();
                                let comparison = item.name.toLowerCase();

                                return searchTerm ? comparison.startsWith(searchTerm) && searchTerm !== comparison : comparison ;
                            })
                            .map(item=>(
                                <TouchableOpacity style={{
                                    display:"flex",
                                    flexDirection:"row",
                                    backgroundColor:"#1e8ee1",
                                    marginTop:5,
                                    width:"90%",
                                    marginLeft:"5%",
                                    justifyContent:"space-evenly",
                                    borderColor:"#1e8ee1",
                                    borderWidth:1,

                                }} 
                                onPress={()=>{
                                    setSelectedCountry(item.name );
                                    setSelectedCountryCode(item.dial_code)
                                    setSelectCountry(false)
                                    
                                }} 
                                key={item.name}  >
                                    
                                    <Text style={{
                                        color:"white",
                                    }} >{item.name}</Text>
                                    <Text style={{
                                        color:"white",
                                    }} >({item.dial_code})</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>)}
                    </View>
                
                <View style={{
                    display:"flex",
                    flexDirection:"row",
                    width:"100%",
                   
                }} >
                
                <TextInput  placeholder="eg +254"
                editable={false}
                value={selectedCountryCode} 
                style={{
                    width:"20%",
                    borderBottomWidth:2,
                    borderBottomColor:"#1e8ee1",
                    padding:10,
                    color:"black"
                }}  />
                <TextInput placeholder="      Phone number"
                style={{
                    borderBottomWidth:2,
                    borderBottomColor:"#1e8ee1",
                    paddingLeft:10,
                    width:"80%",
                    height:50,
                    marginLeft:5,
                }}  
                value={entry.phonenumber} 
                maxLength={9}
                onChangeText={text=>{
                    setEntry({phonenumber:text})
                    if(entry.phonenumber.length >= 8){
                       setProceedToOtp(true)
                       
                    }
                }}
                />
                </View>
                
                {ProceedToOtp&&<TouchableOpacity style={{
                    backgroundColor:"#1e8ee1",
                    marginTop:"50%",
                    width:100,
                    height:50,
                    marginLeft:"85%",
                    borderRadius:100,
                    borderWidth:1,

                }} onPress={()=>{sendSms()}} >
                    <Text style={{
                        textAlign:"center",
                        paddingTop:10,
                        color:"white"
                    }} >
                        <FontAwsome name="arrow-right" size={30} />
                    </Text>
                </TouchableOpacity>}
                </View>
            </View>
        )}

      {otpseg&&(
        <View>
            <FontAwsome name="arrow-left" size={20} style={{
                color:"#1e8ee1",
                marginLeft:7
            }} onPress={()=>{
                setPhoneRegistration(true);
                setotpseg(false);
            }} />
            <View style={{
                marginTop:"20%",
                width:"90%",
                marginLeft:"5%"

            }} >
                <Text style={{
                    color:"#1e8ee1",
                }} >code</Text>
                <TextInput placeholder=" enter the activation code here"
                style={{
                    borderBottomWidth:1,
                    marginTop:5,
                    borderBottomColor:"#1e8ee1",
                }}  />
                <Text  style={{
                    marginTop:10,
                    color:"#1e8ee1"
                }}>We have sent an SMS with OTP activation code to your phone {selectedCountryCode}{entry.phonenumber} </Text>
            </View>

            <Text style={{
                marginTop:"100%",
                color:"red",
                marginLeft:5,
            }} >Didn't get code?</Text>
        </View>
      )}


        {choices&&(
            <View style={{
                    marginTop:2,
                   
                    borderStyle:"solid",
                    borderWidth:1.0,
                    borderColor:"#1e8ee1",
                    width:"90%",
                    marginLeft:"5%",
                    textAlign:'center',
                    color:'white',
            }}>
                <TouchableOpacity style={{
                    display:'flex',
                    flexDirection:"row",
                    backgroundColor:"blue",
                    width:"80%",
                    marginLeft:"10%",
                    marginTop:10,
                    height:40,
                    borderRadius:10,
                }} >
                    <FontAwsome name="facebook" size={30} style={{
                        marginLeft:20,
                        color:"white",
                        paddingTop:4,
                    }} />
                    <Text style={{
                        marginLeft:30,
                        paddingTop:10,
                        color:"white"
                    }} >Sign Up Using facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    display:'flex',
                    flexDirection:"row",
                    backgroundColor:"#1e8ee1",
                    width:"80%",
                    marginLeft:"10%",
                    marginTop:10,
                    height:40,
                    borderRadius:10,
                    borderStyle:"solid",
                    borderWidth:1.0,
                    borderColor:"#1e8ee1",
                }} >
                    <FontAwsome name="google" size={30} style={{
                        marginLeft:5,
                        color:"red",
                        paddingTop:4,
                        backgroundColor:"white",
                        width:30
                    }} />
                    <Text style={{
                        marginLeft:30,
                        paddingTop:10,
                        color:"white" 
                    }} >Sign Up Using Google</Text>
                </TouchableOpacity>

                <Text style={{
                   textAlign:"center",
                   marginTop:10,
                }} >Or manually signup</Text>
                {formData&&(
                    <View style={{
                        marginTop:10,
                    }} >
                        <Text  style={{
                            marginLeft:"30%",
                            marginBottom:1,
                            color:"red"
                        }}> *All entries must be filled*</Text>

                        <TextInput 
                        inputMode="text"
                        placeholder="   what would we call you?"
                        style={{
                            width:"80%",
                            height:40,
                            borderRadius:10,
                            borderStyle:"solid",
                            borderWidth:1.0,
                            borderColor:"#1e8ee1",
                            marginLeft:"10%",
                            marginTop:10,
                            paddingLeft:15
                        }}
                        />
                        <TextInput 
                        inputMode="tel"
                        placeholder="   your phone number"
                        style={{
                            width:"80%",
                            height:40,
                            borderRadius:10,
                            borderStyle:"solid",
                            borderWidth:1.0,
                            borderColor:"#1e8ee1",
                            marginLeft:"10%",
                            marginTop:10,
                            paddingLeft:15
                        }}
                        />
                        <TextInput 
                        inputMode="email"
                        placeholder="   your email address "
                        style={{
                            width:"80%",
                            height:40,
                            borderRadius:10,
                            borderStyle:"solid",
                            borderWidth:1.0,
                            borderColor:"#1e8ee1",
                            marginLeft:"10%",
                            marginTop:10,
                            paddingLeft:15
                        }}
                        />
                         <TextInput  
                        placeholder="   Your ID Number"
                        style={{
                            width:"80%",
                            height:40,
                            borderRadius:10,
                            borderStyle:"solid",
                            borderWidth:1.0,
                            borderColor:"#1e8ee1",
                            marginLeft:"10%",
                            marginTop:10,
                            paddingLeft:15
                        }}
                        
                        />
                        
                        

                        <TextInput  
                        placeholder="   Your password"
                        style={{
                            width:"80%",
                            height:40,
                            borderRadius:10,
                            borderStyle:"solid",
                            borderWidth:1.0,
                            borderColor:"#1e8ee1",
                            marginLeft:"10%",
                            marginTop:10,
                            paddingLeft:15
                        }}
                        
                        />

                        <TouchableOpacity style={{
                            backgroundColor:"#1e8ee1",
                            marginTop:20,
                            height:40,
                            width:100,
                            marginLeft:"60%",
                            marginBottom:10,
                            borderRadius:20,
                        }} onPress={()=>{
                           setTermsOfAgreement(true)
                            setChoices(false)
                        }} >
                            <Text style={{
                                paddingTop:10,
                                paddingLeft:25,
                            }} >Sign Up</Text>
                        </TouchableOpacity>

                        
                        <Text style={{
                            marginLeft:15,
                            marginBottom:10,
                        }} >Already have an account 
                         <Text style={{
                            color:"blue"
                         }} > Sign in</Text>
                         </Text>

                        
                    </View>
                )}
            </View>
        )}
        {otpSegment&&(
            <View style={{
                marginTop:20,
                width:"90%",
                marginLeft:"5%",
                borderStyle:"solid",
                borderWidth:1.0,
                borderColor:"#1e8ee1",
            }} >
                {otpMethod&&(
                    <View>
                        <Text  style={{
                            textAlign:"center",
                            marginTop:10
                        }} >Choose Method for OTP to be sent</Text>
                        
                        <View style={{
                            display:"flex",
                            flexDirection:"row",
                            marginTop:25,
                           
                        }} >
                            <Checkbox style={{
                                backgroundColor:"white",
                                marginLeft:"10%",

                            }}  value={isSms} onValueChange={()=>{
                                if(isEmail===true){
                                    setIsSms(false)
                                }else(
                                    setIsSms(true)
                                )
                            }}  />
                            <Text style={{
                                marginLeft:20
                            }} >Get OTP via SMS Text</Text>
                        </View>

                        {Platform.OS == 'android'  ? (
                            <Text style={{
                                color:"green",
                                marginTop: 1,
                                marginLeft:75,
                            }}>Standard charges apply</Text>) : 
                            ( <Text style={{
                                color:"red",
                                marginTop: 1,
                                marginLeft:75,
                            }} >*SMS service unAvailable in ios devices please use email for OTP verification *</Text>)}
                        <View style={{
                            display:"flex",
                            flexDirection:"row",
                            marginTop:25,
                           
                        }} >
                            <Checkbox style={{
                                backgroundColor:"white",
                                marginLeft:"10%",

                            }}  value={isEmail} onValueChange={()=>{
                                if(isSms){
                                    setIsEmail(false)
                                }else(
                                    setIsEmail(true)
                                )
                            }}  />
                            <Text style={{
                                marginLeft:20
                            }} >Get OTP via email</Text>
                        </View>
                        {unSelected ? (<Text style={{
                                color:"#1e8ee1",
                                marginTop: 20,
                                marginLeft:75,
                            }}>No choice is selected </Text>) : undefined }

                        <TouchableOpacity style={{
                            backgroundColor:"#1e8ee1",
                            marginTop:20,
                            height:40,
                            width:100,
                            marginLeft:"60%",
                            marginBottom:10,
                            borderRadius:20,
                        }} onPress={()=>{
                            sendOtp()
                            setOtpMethod(false)
                            setOtpConfirmationArea(true)
                        }} >
                            <Text style={{
                                paddingTop:10,
                                paddingLeft:25,
                            }} >Proceed</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {otpConfirmationArea&&(
                    <View>
                     <TextInput style={{
                        borderStyle:"solid",
                        borderWidth:1.0,
                        borderColor:"#1e8ee1",
                        width:"90%",
                        marginLeft:"5%",
                        marginTop:10,
                     }} />
                      <Text style={{
                            color:"#1e8ee1",
                            marginTop:10,
                            marginLeft:20,
                        }} onPress={()=>{
                            setTryAnotherWay(true)
                        }} >try another way?</Text>
                     <TouchableOpacity style={{
                            backgroundColor:"#1e8ee1",
                            marginTop:10,
                            height:40,
                            width:100,
                            marginLeft:"60%",
                            marginBottom:10,
                            borderRadius:20,
                            
                        }} onPress={()=>{
                            setTermsOfAgreement(true);
                            setOtpConfirmationArea(false)
                            setOtpSegment(false)
                            setOtpMethod(false)
                        }} >
                        <Text style={{
                                paddingTop:10,
                                paddingLeft:25,
                            }}  >Verify</Text>
                     </TouchableOpacity>
                     
                     {tryAnotherWay&&(
                        <View style={{
                           
                            marginTop: -50,
                            marginLeft:"2%",
                            backgroundColor:"white",
                            borderColor:"#1e8ee1",
                            borderStyle:"solid",
                            borderWidth:1.5,
                            width:"96%",
                            marginBottom:20,
                        }} >
                            <FontAwsome name='times' size={20} style={{
                                marginLeft:5,
                                marginTop:5,
                            }} onPress={()=>{
                                setTryAnotherWay(false)
                            }} />
                            {isSms ? (<View>
                                <FontAwsome name='times' size={30} onPress={()=>{
                                    setTryAnotherWay(false)
                                }} style={{
                                    marginLeft:20,
                                    marginTop:10,
                                }} />
                                <Text style={{
                                color:"black",
                                marginTop: 1,
                                marginLeft:75,
                                marginBottom:10,
                                fontSize:16
                            }} >Use email to <Text style={{
                                color:"#1e8ee1"
                            }} onPress={()=>{
                            Linking.openURL("https://accounts.google.com/ServiceLogin/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&ifkv=AWnogHe0aCYmRHsfDOnc-7SBCBVnl1DYjAaHLumuBJ0wk8JiSFSGJfFrHnro4SRXJLYTWVWaT4f5&flowName=GlifWebSignIn&flowEntry=ServiceLogin")
                            }} >sign in</Text> </Text>
                            </View>) :isEmail ? (<View style={{
                                

                            }} >
                                <Text style={{
                                color:"black",
                                marginTop: 5,
                                marginLeft:25,
                                marginBottom:15
                            }} >Send Sms to <Text style={{
                                color:"#1e8ee1"
                            }} >0932378642</Text> or <Text style={{
                                color:"#1e8ee1"
                            }} onPress={()=>{
                                setEditNumber(true)
                            }} >Change phone number</Text>?</Text>
                            {editNumber&&(<View style={{
                                display:"flex",
                                flexDirection:"row",
                            }} >
                                <TextInput style={{
                                    backgroundColor:"white",
                                    borderColor:"#1e8ee1",
                                    borderStyle:"solid",
                                    borderWidth:1.5,
                                    width:"70%",
                                    marginLeft:"1%",
                                    marginBottom:"1%",
                                    paddingLeft:5
                                }} placeholder="  07431262513" />
                        <TouchableOpacity style={{
                            backgroundColor:"#1e8ee1",
                            marginBottom:5,
                            height:40,
                            width:80,
                            marginLeft:5,
                            borderRadius:20,
                            
                        }}  >
                            <Text style={{
                            paddingTop:7,
                            paddingLeft:15,
                        }} >Get Otp</Text></TouchableOpacity>
                            </View>)}
                            </View>) : (<Text style={{
                                color:"black",
                                marginTop: 1,
                                marginLeft:15,
                            }} >No Options available.Try Again </Text>)}
                           
                        </View>
                     )}
                     
                     

                    </View>
                )}
            </View>
        )}
        
        {termsOfAgreement&&(
        <View style={{
            backgroundColor:"white",
            borderColor:"#1e8ee1",
            borderStyle:"solid",
            borderWidth:1.5,
            width:"98%",
            marginLeft:"1%",
        }} >
            <Text style={{
                textAlign:"center",
                color:"#1e8ee1"
            }}>Term Of Agreement</Text>
            {termsArea&&(
                <ScrollView style={{
                    backgroundColor:"white",
                    borderColor:"#1e8ee1",
                    borderStyle:"solid",
                    borderWidth:1.5,
                    
                   
                    height:"65%",
                }} >
                    <Text style={{
                        padding:"5%",
                        
                    }} >{Terms}</Text>
                </ScrollView>
            )}
            <View style={{
                display:"flex",
                flexDirection:"row",
                marginTop:10,

            }} >
                <Checkbox  style={{
                    marginLeft:10,
                }} value={isToa} onValueChange={setIsToa} />
                <Text style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }} >Agree Terms Of Agreement</Text>
            </View>
            <View style={{
                display:"flex",
                flexDirection:"row",
                marginTop:10,

            }} >
                <Checkbox  style={{
                    marginLeft:10,
                }} value={isSubscribe} onValueChange={setIsSubscribe} />
                <Text style={{
                    marginLeft:10,
                    color:"#1e8ee1"
                }} >Subscribe to our news letter</Text>
            </View>
            <TouchableOpacity style={{
                            backgroundColor:"#1e8ee1",
                            marginBottom:5,
                            height:40,
                            width:80,
                            marginLeft:"75%",
                            borderRadius:20,
                            
            }} onPress={()=>{
                showRegistrationPage(false);
                setUpdatedDash(true)
            }} >
                <Text style={{
                    paddingTop:10,
                    paddingLeft:15,
               }} >Confirm</Text></TouchableOpacity>
        </View>)}
      
        
        </SafeAreaView>
    )
}