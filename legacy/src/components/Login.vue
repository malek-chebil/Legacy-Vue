<template>
  <div class="body">
    <h1 class="LoginS">Login</h1>
    <input type="username" placeholder="Username" v-model="username" />
    <br />
    <input type="password" placeholder="Password" v-model="password"/>
    <br />
    <button id="loginB" @click="AxiosLogin">Login</button>
    <h5 id='Sign' >Create new <a href="#" @click="toggle">Account</a></h5>
  </div>
</template>
<script>
import axios from "axios";
import Toast from "light-toast";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  props: [],

  methods: {
      toggle(){
          this.$emit("toggleLoginSignup")
      },
    AxiosLogin() {
      let data = {
        name: this.username,
        password: this.password,
      };
      console.log(data)
      axios.post("/login", data).then((data) => {
        data = data.data;
        console.log('this is it============>',data);
        if (data.Banned) {
          Toast.fail(
            `you are banned because ${data.Reason} you will be unbanned in ${data.Periode}`,
            2000
          );
        } else {
          if (data.admin) {
            this.$emit("admin");
          } else {
            if (data.Registred) {
              Toast.success("Success Login", 2500);
              this.$emit("UpdateData", data);
              this.$emit("startS");
            } else {
              (this.username = ""), (this.password = "");
              setTimeout(() => {
                Toast.fail("Check Your informations", 1000);
              }, 100);
            }
          }
        }
      });
    },
  },
};
</script>

<style>
.body {
    position: relative;
    top:50px;
    left:450px;
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 65vh;
    width: 400px;
    border: #592bff;
    border-radius: 10%;
    border-style: solid;
  }
  .LoginS{
    position: relative;
    top:-50PX;
  }
   #loginB{
    position: relative;
    top:50px;
  }
  #Sign{
   position: relative;
   top:50px;
 }
  button {
    border-radius: 20px;
    border: 1px solid black;
    background-color: #592bff;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }
</style>>