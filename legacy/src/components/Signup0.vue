<template>
  <div class="body">
    <h1 id="Selectchar">Select A Character</h1>
    <a href="#"> <img src="arrow.png" alt="" id="arrowR"/></a>

    <div id="CardPlayer">
      <img :src="charsSrc[i]" width="75px" />
    </div>
    <a href="#"> <img src="arrow.png" alt="" id="arrowL"/></a>
    <button id="BTNS">Select</button>
  </div>
</template>

<script>
export default {
  name: "Signup0",
  data() {
    return {
      charsSrc: [
        "./chars/0/FD/fd0.png",
        "./chars/1/FD/fd0.png",
        "./chars/2/FD/fd0.png",
        "./chars/3/FD/fd0.png",
        "./chars/4/FD/fd0.png",
      ],
      i: 0,
    };
  },
  methods: {
    ScrollL() {
      if (this.state.i > 0) {
        this.setState({ i: this.state.i - 1 });
      }
    },
  },
};
</script>

<style scoped></style>
