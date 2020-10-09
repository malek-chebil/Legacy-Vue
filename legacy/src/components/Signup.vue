<template>
  <div class="body" >
    <h1>Sign Up</h1>
    <input type="username" placeholder="Username" v-model="username" required />
    <br />
    <input type="email" placeholder="Email" v-model="email" required />
    <br />
    <input type="password" placeholder="Password" v-model="pass" required />
    <br />
    <button @click="triggerSelectCharId">Sign Up</button>
    <h5>I Already have an <a href="#" @click="toggle">Account</a></h5>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      email: "",
      pass: "",
    };
  },
  methods: {
    triggerSelectCharId() {
      let data = {
        name: this.username,
        password: this.pass,
        email: this.email,
      };
      console.log("data -> username", this.username);
      console.log("data -> email", this.email);
      console.log("data -> pass", this.pass);
      axios
        .post("/register", data)
        .then((data) => {
          console.log('signup data===>',data);
          if (data.data.Registred) {
            alert("Account exist");
            this.username = "";
            this.pass = "";
          } else {
            alert("Success Registration Please Pick A Character");
            this.$emit("selectCharId", data.data.id);
          }
        })
        .catch((err) => console.log(err));
    },
    toggle() {
      this.$emit("toggleLoginSignup");
    },
  },
};
</script>
<style >
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
</style>