<template>
  <img
    src="currentP"
    :oneKeyDown="moveView"
    :tableIndex="0"
    :style="{ top: positionX + 'px', left: positionY + 'px' }"
  />
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      character: 0,
      Id: 0,
      name: "",
      FD: 0,
      FU: 0,
      FL: 0,
      FR: 0,
      face: [
        {
          D0: `./chars/${this.props.skin}/FD/fd0.png`,
          D1: `./chars/${this.props.skin}/FD/fd1.png`,
          D2: `./chars/${this.props.skin}/FD/fd2.png`,
          R0: `./chars/${this.props.skin}/FR/fr0.png`,
          R1: `./chars/${this.props.skin}/FR/fr1.png`,
          R2: `./chars/${this.props.skin}/FR/fr2.png`,
          L0: `./chars/${this.props.skin}/FL/fl0.png`,
          L1: `./chars/${this.props.skin}/FL/fl1.png`,
          L2: `./chars/${this.props.skin}/FL/fl2.png`,
          u0: `./chars/${this.props.skin}/FU/fu0.png`,
          u1: `./chars/${this.props.skin}/FU/fu1.png`,
          u2: `./chars/${this.props.skin}/FU/fu2.png`,
        },
      ],
      currentP: `./chars/${this.props.skin}/FD/fd0.png`,
      positionX: 230,
      positionY: 490,
    };
  },
  props: ["skin", "id", "MainP"],
  mounted() {
    console.log("called");
    setTimeout(() => {
      this.positionX = this.MainP.x * 10 + 130;
      this.positionY = this.MainP.y * 10 + 100;
      this.Id = this.id;
      this.character = this.skin;
    }, 1500);
  },
  methods: {
    moveView: function(event) {
      var x = event.keyCode;
      var face = "";
      if (x === 87) {
        if (this.positionX <= 390 && this.positionX > 130) {
          this.FU++;
          if (this.FU % 3 === 0) {
            face = this.face[0]["u2"];
            this.currentP = this.face[0]["u2"];
          } else if (this.FU % 2 === 0) {
            face = this.face[0]["u1"];
            this.currentP = this.face[0]["u1"];
          } else {
            face = this.face[0]["u0"];
            this.currentP = this.face[0]["u0"];
          }
          this.positionX = this.positionX - 10;
          axios({
            method: "post",
            url: "/position",
            data: {
              positionX: this.state.positionX - 10,
              positionY: this.state.positionY,
              name: this.state.name,
              id: this.state.Id,
              Face: "top",
              skin: this.props.skin,
              face: face,
            },
          }).then((data) => {
            if (data.data.move) {
            }
          });
        }
      }
      if (x === 65) {
        if (this.positionY <= 390 && this.positionY > 100) {
          this.FL++;
          if (this.FL % 3 === 0) {
            face = this.face[0]["L2"];
            this.currentP = this.face[0]["L2"];
          }
        } else if (this.FL % 2 === 0) {
          face = this.face[0]["L1"];
          this.currentP = this.face[0]["L1"];
        } else {
          face = this.face[0]["L0"];
          this.currentP = this.face[0]["L0"];
        }
        this.positionY = this.positionY - 10;
        axios({
          method: "post",
          url: "/position",
          data: {
            positionX: this.positionX,
            positionY: this.positionY - 10,
            name: this.name,
            id: this.Id,
            Face: "left",
            skin: this.skin,
            face: face,
          },
        }).then((data) => {
          if (data.data.move) {
          }
        });
      }
      if (x === 68) {
        if (this.positionY < 390 && this.positionY >= 0) {
          this.FR++;
          if (this.FR % 3 === 0) {
            face = this.face[0]["R2"];
            this.currentP = this.face[0]["R2"];
          } else if (this.FR % 2 === 0) {
            face = this.face[0]["R1"];
            this.currentP = this.face[0]["R1"];
          } else {
            face = this.face[0]["R0"];
            this.currentP = this.face[0]["R0"];
          }
          this.positionY = this.positionY + 10;
          axios({
            method: "post",
            url: "/position",
            data: {
              positionX: this.positionX,
              positionY: this.positionY + 10,
              name: this.name,
              id: this.Id,
              Face: "right",
              skin: this.skin,
              face: face,
            },
          }).then((data) => {
            if (data.data.move) {
            }
          });
        }
      }
      if (x === 83) {
        if (this.positionY >= 130 && this.positionX < 390) {
          this.FD++;
          if (this.FD % 3 === 0) {
            face = this.face[0]["D2"];
            this.currentP = this.face[0]["D2"];
          } else if (this.FD % 2 === 0) {
            face = this.face[0]["D1"];
            this.currentP = this.face[0]["D1"];
          } else {
            face = this.face[0]["D0"];
            this.currentP = this.face[0]["D0"];
          }
          this.positionX = this.positionX + 10;
          axios({
            method: "post",
            url: "/position",
            data: {
              positionX: this.positionX + 10,
              positionY: this.positionY,
              name: this.name,
              id: this.Id,
              Face: "Down",
              skin: this.skin,
              face: face,
            },
          }).then((data) => {
            if (data.data.move) {
            }
          });
        }
      }
      setTimeout(() => {
        this.$emit("UnmountP", this.positionX, this.positionY);
      }, 100);
    },
  },
};
</script>
