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
    Linking
}from "react-native"
import Checkbox from 'expo-checkbox';
import email from "react-native-email"
import * as SMS from 'expo-sms';
import { TOA } from "../../mockData/metrics";
import FontAwsome from '@expo/vector-icons/FontAwesome'

export default function RegistrationOptions({showRegistrationPage,setBasicDashboard}){
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
    const[]=useState(false);
    const[]=useState(false);
    const[]=useState(false);
    const[]=useState(false);
    const[]=useState(false);

    
    //otp
    const[OTP,setOTP]=useState("");
    const[enteredOTP,setEnteredOTP]=useState("")
    const[OTPdirective,setOTPderictive]=useState("")
    async function generateOTP(){
        let max = 900000;
        let min= 100000;
        let gen = await Math.floor(Math.random()*(max-min)+min);
        setOTP(gen);
        
       
    }
    
    async function   sendSms (){
        await generateOTP();
        const number= [];
        const message = `you One time password is ${OTP}`
        const isAvailable = await SMS.isAvailableAsync()

        //if(isAvailable){
        //   await  SMS.sendSMSAsync(number,message);
//
        //}

    }

    async function  sendEmail(){
       await generateOTP()
        const to = data.email;
        //email(to,{
        //    
        //    subject:`One Time Password  ${data.username}`,
        //    body:`This is a one time password :
        //    The Password is:  ${OTP}
//
        //    to resend it click get OTP Passwoed`
        //})
        alert(`${OTP}`)
    }
    const[unSelected,setIsUnselected]=useState(false)
    async function sendOtp(){
        if(isSms){
            await sendSms();
        }else if(isEmail){
            await sendEmail()
        }else{
            setIsUnselected(true)
            //alert(`no choice selected`);
        }
    }
     function OTPVerification(){
        let eotp= enteredOTP;
        let gotp= OTP;
        
        
         if(eotp.trim().length ==0){
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
    const[tryAnotherWay,setTryAnotherWay]=useState(false)
    const[editNumber,setEditNumber]=useState(false)
    useEffect(()=>{
       // generateOTP()
    },[])
    const[termsArea,setTermArea]=useState(true)
    return(
        <SafeAreaView style={{
            backgroundColor:'white',
            height:"100%",
            
        }} >
        {identity&&(
            <View style={{
                display:'flex',
                flexDirection:"row",
                marginTop:"15%",
                marginBottom:10,
                width:"90%",
                marginLeft:"5%",
            }} >
                <Image source={require('../../assets/alatpres_logo.png')} style={{
                    height:60,
                    width:60,
                    marginLeft:"30%",
                    borderRadius:60,
                    borderStyle:"solid",
                    borderWidth:1.0,
                   
                }} />
                <Text style={{
                    marginLeft:1,
                    marginTop:12,
                    fontSize:35,
                    fontWeight:"200",
                    fontStyle:"italic",
                    color:"#1e8ee1"
                }} >AlatPres </Text>
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
                            setOtpSegment(true);
                            setOtpMethod(true);
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
                        
                    }} >{TOA}</Text>
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
                setBasicDashboard(true)
            }} >
                <Text style={{
                    paddingTop:10,
                    paddingLeft:15,
               }} >Confirm</Text></TouchableOpacity>
        </View>)}
      
        
        </SafeAreaView>
    )
}