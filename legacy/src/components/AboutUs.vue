<template>
  <div id="text" className="aboutus">
 
    <h2 id="abs">About Us</h2>
    <h3>
      Our product is basically a social media application but it looks a better
      way different than other social media applications
    </h3>
    <h4>what are Mary-j Tokens ?</h4>
    <p>
      Mary-J tokens are usefull to allow users to buy real e-cards like PayPal
      card we appreciate your time spent on connecting to our application, for
      this reason we allow users to gain 5 tokens per 10 minutes
    </p>
    <div id="team">
    <h2>development team:</h2>
    <h4 id="devName">
      <a id="namedevlop" href="https://github.com/achref-bououn"
        >*Achref bouaoun*</a
      >
      <br />
      <a id="namedevlop" href="https://github.com/Slim-Kasraoui"
        >*Slim kasraoui*</a
      >
      <br />
      <a id="namedevlop" href="https://github.com/malek-chebil"
        >*Malek Chebil*</a
      >
      <br />
      <a id="namedevlop" href="https://github.com/WalaNour">*Wala nour*</a>
      <br />
    </h4>
    </div>
    <h3 id="contact">FeedBack</h3>
    
    <input
      id="Fid"
      type="text"
      placeholder="send us a feedback or find support"
      required
      v-model="feedback"
    />
    <button @click="sendFB" id="feedback">send</button>
  </div>
</template>

<script>
import axios from "axios";
import Toast from "light-toast";

export default {
  name: "AboutUs",
  data() {
    return {
      feedback: "",
    };
  },
  methods: {
    sendFB() {
      let data = {
        feedback: this.feedback,
      };
      axios.post("/feedbacks", data).catch((err) => console.log(err));
      Toast.success('Thank for the Feedback', 1500, ()=>{location.reload()})
    },
  },
};
</script>
<style >
.aboutus {
  color:rgb(17, 2, 14);
  position: relative;
  top: 16px;
  left: 250px;
  background: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  /* height: 65vh; */
  width: 790px;
  border: #f6f5f7;
  border-radius: 5%;
  border-style: solid;
  height: 544px;
  text-align:center;
}
#feedback {
background-color: #ff2626;
    position: relative;
    top: 82px;
    left: -289px;
    width: 186px;
}
#Fid{
  position: relative;
    top: 60px;
    left: 99px;
    border-radius: 5px;
    font-size: 25px;
    height: 36px;
    width: 565px;
    text-align: center;
}
#abs{
    position: relative;
    top: 10px;
    left: -7px;
}
#devName{
  color:gray;
}
#contact{
     position: relative;
    top: 15px;
    left: -21px;
    height: 6px;
    margin: 23px;
    list-style-type: circle;
}
#Fid{
    position: relative;
    top: 30px;
    left: 79px;
    border-radius: 5px;
    font-size: 25px;
    height: 33px;
    width: 536px;
}
#contact{
position: relative;
    top: 11px;
    left: -5px;
    font-size: 33px;
}
#text{
      text-align: center;
    color: darkslateblue;
    background-color: #f6f5f7;
    border: 1px solid black;
    width: 1164px;
    margin-left: 100px;
}
#team{
  position: relative;
    left: -2px;
    top: 0px;
}
</style>