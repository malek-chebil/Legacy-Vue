<template>
  <div className="body">
    <h1 className="LoginS">Login</h1>
    <input type="username" placeholder="Username" />
    <br />
    <input type="password" placeholder="Password" />
    <br />
    <button @click="AxiosLogin">Login</button>
    <h5>Create new</h5>
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
    AxiosLogin() {
      let data = {
        name: this.username,
        password: this.password,
      };
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
              this.$emit("start");
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
