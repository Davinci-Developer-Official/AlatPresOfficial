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


export default function RegistrationOptions({showRegistrationPage,setBasicDashboard,setIntro}){
    const[enterUsername,setEnterUsername]=useState(true)
    const[enterEmail,setEnterEmail]=useState(true);
    const[verifyOTP,setVerifyOTP]=useState(false)
    const[tour,setTour]=useState(false); //set false
    const[formData,setFormData]=useState(true) //set true
    const[otpSegment,setOtpSegment]=useState(false)
    const [choices,setChoices]=useState(false)
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
    const[phoneRegitration,setPhoneRegistration]=useState(true);
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