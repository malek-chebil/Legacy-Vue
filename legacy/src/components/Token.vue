<template>
  <div id="tokens">
    <img src="/image/token.png" alt="" id="tokenImage" />
    <h3 id="token">{{ this.balance }}_MJ</h3>
  </div>

</template>
<script>
import axios from "axios";

export default {

  name: "Token",
  data() {
    return {
      balance: 0,
    };
  },
props :[
    "userid"
],
  methods: {
      
    mounted() {
      let data = {
        id: this.userid,
      };
      setTimeout(() => {
        axios.post("/balanceF", data).then((result) => {
          this.balance = result.data.balance;
          this.$emit("PassTokenToParent" ,result.data.balance);
        });
      }, 100);
    },
    
  },
};
</script>

<style >
#tokens {
  position: absolute;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  left:1263px;
  top:4px;
}
#tokenImage{
  width: 50px;
  position: absolute;
  left: 50px;
}
#token {
  position: relative;
  top: -10px;
  left:-8px;
  color: rgb(12, 12, 12);
}
</style>
