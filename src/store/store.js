import axios from 'axios'
import { create } from 'zustand'
import AuthService from '../services/AuthService'
const useStore = create((set) => ({
  uid:[],
  ip:"",
  fio:"",
  login:"",
  isAuth:false,
  isCheckedPhone:false,
  errorMessage:'',
  token:'',
  user:{
    uid:"",
    id:"",
  },
async logIn(login,password){

  try {
    const response=await AuthService.login(login,password)
    localStorage.setItem('token',response.data.accessToken);
    set(state=>({...state,isAuth:true,errorMessage:'',user:{...state.user,...response.data.user}}))
    return true
  } catch (error) {
    console.log(error.response?.data?.message);
    set(state=>({...state,errorMessage:error.response?.data?.message}))
    return false
  }

},
setCheckedPhone(){
set(state=>({...state,isCheckedPhone:!state.isCheckedPhone}))
},
async logInPhone(phone){
  try {
    const response=await AuthService.loginPhone(phone)
    const {token}=response.data

    set(state=>({...state,token:token,isCheckedPhone:true,errorMessage:''}))
    return true
  } catch (error) {
    console.log(error.response?.data?.message);
    set(state=>({...state,errorMessage:error.response?.data?.message}))
    return false
  }

},
async logOut(){
  try {
    const response=await AuthService.logouth()
    localStorage.removeItem('token');
    set(state=>({...state,token:'',isAuth:false,user:{uid:"",id:""}}))
  } catch (error) {
    console.log(error.response?.data?.message);
  }

},
async handleVeriffyCode (code,phone){
  try {
    const response= await axios.post(`http://194.8.147.150:5000/api/confirmCodePhone`,{code,phone})
    if(response.status=='200'){
      localStorage.setItem('token',response.data.accessToken);
      set(state=>({...state,isAuth:true,errorMessage:'',user:{...state.user,...response.data.user}}))
      return true

    }

  } catch (error) {
    console.log(error.response?.data?.message);
    set(state=>({...state,errorMessage:error.response?.data?.message}))
    return false
  }
  
},

async checkAuth(){
  try {
  
  } catch (error) {
  
  }

},
 async checkBillingApi(){
  try {
  const user= await axios.get(`http://194.8.147.150:5000/api/checkIpBilling`)
  if(user.status=='200'){
  
  set(state=>({...state,ip:user.data.ip,fio:user.data.fio,login:user.data.id,uid:[...state.uid,user.data.uid]}))
  } else {
    set(state=>({...state,ip:""}))
  }
  } catch (error) {
    
  }
 }
  
  }))
  export default useStore
  