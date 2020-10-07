<template>
  <div className="body">
    <h1 className="LoginS">Login</h1>
    <input type="username" placeholder="Username" v-model="username" />
    <br />
    <input type="password" placeholder="Password" v-model="password"/>
    <br />
    <button @click="AxiosLogin">Login</button>
    <h5>Create new <a href="#" @click="toggle">Account</a></h5>
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
        console.log(data);
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
              this.$emit("updatedata", data);
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
