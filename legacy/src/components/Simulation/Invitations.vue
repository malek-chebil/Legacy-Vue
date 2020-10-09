<template>
  <div id="invcontainer">
    <!-- <div v-for="elem in Invitations" :key="elem.id"> -->
    <div className="invitations">You have invitation from</div>
    <img src="/images/tick-logo.png" @click="acceptinvitation" />
    <img src="/images/x-logo.png" @click="rejectinvitation" />
  </div>
  <!-- </div> -->
</template>
<script>
import axios from "axios";

export default {
  name: "Invitations",
  data() {
    return {
      Invitations: ["achref"],
    };
  },
  props: ["id"],
  mounted() {
    this.$nextTick(function () {
      let data = {
        id: this.id,
        to: this.id,
        display:false,
      };
      console.log("mounted Invitations");

      axios.post("/fetchIn", data).then((data) => {
        this.Invitations = data.data;
      });
    });
  },
  methods: {
    rejectinvitation(event) {
      let data = {
        to: this.id,
        id: event.target.id,
      };
      this.$emit("hideInv");
      axios.post("/rejectinvitation", data);
    },
    acceptinvitation(event) {
      let data = {
        to: this.id,
        id: event.target.id,
      };
      this.$emit("hideInv");
      axios.post("/acceptinvitation", data);
    },
  },
};
</script>
>
