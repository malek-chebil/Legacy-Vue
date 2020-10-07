<template>
  <div>
    <h1>Sign Up</h1>
    <input type="username" placeholder="Username" v-model="username" required />
    <br />
    <input type="email" placeholder="Email" v-model="email" required />
    <br />
    <input type="password" placeholder="Password" v-model="pass" required />
    <br />
    <button @click="triggerSelectCharId">Sign Up</button>
    <h5>I Already have an <a>Account</a></h5>
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
      axios.post("/register", data).then((data) => {
        console.log(data);
        if (data.data.Registred) {
          alert("Account exist");
          this.username = "";
          this.pass = "";
        } else {
          alert("Success Registration Please Pick A Character");
          this.$emit("selectCharId");
        }
      })
      .catch(err=>console.log(err));
    },
  },
};
</script>
