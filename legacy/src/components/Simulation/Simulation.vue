<template>
  <div id="map">
    <Maincharacter
      :MainP="MpPosition"
      :id="this.data.Id"
      :skin="this.data.skin"
      @UnmountP="UnmountP"
    />

    <Invitations v-if="displayInvitations" :id="data.Id" @hideInv="hideInv" />
    <h1>Friends</h1>
    <h1>Chat</h1>
    <img src="/images/Friends.png" id="FriendsLogo" />
    <img src="/images/send-m.png" id="invitations" />
  </div>
</template>

<script>
// <div
// v-for="(keyName, keyIndex) in keyNames" :key="keyIndex"
// >
//   <Characters v-if="(keyName * 1) != this.id"
//   :position="this.PsPositions[keyName]"
//   :id="keyName"
//   :Mid="this.id"
//   />
// </div>
import axios from "axios";
import Toast from "light-toast";
import Invitations from "./Invitations";
import Maincharacter from "./MainChar";
// import Characters from './Chars'
export default {
  name: "Simulation",
  components: {
    Invitations,
    Maincharacter,
  },
  data() {
    return {
      UnmountPX: "",
      UnmountPY: "",
      friends: [],
      MpPosition: {},
      PsPositions: [],
      id: 0,
      name: "",
      currentcharacter: "",
      displayInvitations: false,
      displayFriends: false,
      displayChat: false,
      displayAboutUs: false,
      selectedfriend: null,
      // keyNames: this.getKeys(),
      s: setInterval(() => {
        axios.post("/fechdata").then((result) => {
          console.log("fechdata for PsPositions ===>", result.data);
          this.PsPositions = result.data;
        });
      }, 150),
      d: setInterval(() => {
        let data = { id: this.id };
        axios.post("/fetchFriends", data).then((result) => {
          this.friends = result.data;
        });
      }, 2000),
    };
  },
  props: ["data"],
  methods: {
    deleteposition() {
      let data = {
        x: this.UnmountPX,
        y: this.UnmountPY,
      };
      axios("/deleteP", data);
    },
    UnmountP(x, y) {
      this.UnmountPX = x;
      this.UnmountPY = y;
    },
    hideInv() {
      this.displayInvitations = false;
    },
    showchat(selected) {
      this.displayChat = true;
      this.displayFriends = false;
      this.selectedfriend = selected.target.id * 1;
    },
    tooglechatinvitations() {
      this.displayFriends = false;
      this.displayInvitations = !this.displayInvitations;
      this.displayChat = false;
    },
    tooglefriends() {
      this.displayFriends = !this.displayFriends;
      this.displayInvitations = false;
      this.displayChat = false;
    },
    // getKeys(){
    //   console.log('My getKeys fnc for the v-for returning actual PsPositions =====>', this.PsPositions)
    //     let keys = [];
    //     for(let i = 0; i < this.PsPositions.length; i++){
    //       keys.push(Object.keys(this.PsPositions[i]))
    //     }
    //     return keys;
    //   }
  },

  mounted() {
    this.$nextTick(function () {
      Toast.info(
        "Moves: \n Up : W  \n Right : D  \n Left : A \n  Down : S",
        5000
      );
      console.log("Simul mounted this.data.id ====>", this.data.Id);
      console.log("Simul mounted this.data.skin ====>", this.data.skin);
      this.$emit("UserId", this.id);
      let data = {
        id: this.data.Id,
        Face: `../../../public/images/chars/${this.data.skin}/FD/fd0.png`,
        skin: this.data.skin,
      };
      console.log(data);
      axios.post("/Rposition", data).then((data) => {
        setTimeout(() => {
          this.UnmountPX = this.PsPositions[this.id].split("-")[0] * 1;
          this.UnmountPY =
            this.PsPositions[this.id].split("-")[1].split("=")[0] * 1;
        }, 1000);
        console.log("this.UnmountPX ====>", this.UnmountPX);
        console.log("this.UnmountPY ====>", this.UnmountPY);

        this.MpPosition = data.data;
        console.log("this.MpPosition ====>", this.MpPosition);
      });
    });
  },
  beforeDestroy() {
    this.deleteposition();
    clearInterval(this.s);
    clearInterval(this.d);
  },
  watch: {
    id: function (newVal) {
      this.id = newVal.id;
    },
    name: function (newVal) {
      this.name = newVal.name;
    },
  },
};
</script>

<style scoped>
</style>