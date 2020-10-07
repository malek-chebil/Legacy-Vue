<template>
  <div id="app">
    <Logo v-if="displaylogo" />
    <Admin v-if="displayadmin" />
    <Login  @startS="startS" @toggleLoginSignup="toggleLoginSignup" @UpdateData="UpdateData" @admin="admin" v-if="displaylogin" />
    <Signup  @selectCharId="selectCharId" v-if="displaysignup" />
    <Signup0 :id="ID" @Mlogin="Mlogin" v-if="displaySignup0" />
    <NavBar v-if="displaynavbar" />
    <Token v-if="displayToken" />
    <Shop v-if="displayshop" />
    <AboutUs v-if="displayAboutUs"  />
  </div>
</template>

<script>
import Logo from './components/Logo'
import Admin from './components/Admin'
import Signup from './components/Signup'
import Signup0 from './components/Signup0'
import Login from './components/Login'
import NavBar from './components/Navbar'
import Token from './components/Token'
import Shop from './components/ShopAvatar/Shop'
import AboutUs from './components/AboutUs'
export default {

  name: 'App',
  components : {
    Logo,
    Admin,
    Signup,
    Signup0,
    Login,
    NavBar,
    Token,
    Shop,
    AboutUs

  },
  data (){
    return {
          token : 0,
          ID:"",
          userdata:{},
          displaynavbar:false,
          displaylogin:false,
          displaysignup:true,
          displayshop:false,
          displaySimulation:false,
          displaylogo:true,
          displaySignup0:false,
          displayAboutUs:false,
          displayS:false,
          displayToken:false,
          displayadmin:false
    }
  },
  methods: {
    changebalance(b){
      this.newbalance = b;
    },
    admin(){
      this.displayadmin = true;
      this.displaylogin = false;
      this.displaylogo = false
    },
    PassTokenToParent(token){
       this.token = token
     },
    UserId(id){
      this.ID = id;
    },
    Sset(){
      this.displayS = true;
    },
    displaysHome(){
      this.displayAboutUs = false;
      this.displaySimulation = true;
      this.displayshop = false;
     },
    displayShop(){
      this.displayAboutUs = false;
      this.displaySimulation = false;
      this.displayshop = true;
     },
     displayaboutUs(){
       this.displayAboutUs = true;
       this.displaySimulation = false;
       this.displayshop = false;
     },
     toggleLoginSignup(){ // Toogle between login and signup if you have Already an account or you dont
      this.displaylogin = !this.displaylogin;
      this.displaysignup = !this.displaysignup;
    },
    UpdateData(data){
     this.userdata = data;
    },
    selectCharId(id){ // Display the secound Signup component which is (signup0) To select the character that you will play with 
      this.ID = id;
      this.displaySignup0 = true;
      this.displaysignup = false;
    },
    startS(){
      this.displaySimulation = true;
      this.displaySignup0 = false;
      this.displaylogo = false;
      this.displaynavbar = true;
      this.displaylogin = false;
      this.displayToken = true;
    },
    Mlogin(){
      this.displaySignup0 = false;
      this.displaylogin = true;
    }
  }
}
</script>

<style>
</style>
