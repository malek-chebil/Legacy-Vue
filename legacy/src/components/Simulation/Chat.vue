<template>
  <div class="screen">
        <div class="conversation">
        <div class="messages messages--sent">
            <div class="message" key="{index}">Message</div>
        </div>
        <div class="messages messages--received" key="{index}">
            <div class="message">
            <img
                src="report.png"
                class="test0"
                onClick="{this.sendreport}"
                id="{elem.from+index}"
            >Message
            </div>
        </div>
        </div>
        <div class="text-bar">
        <form class="text-bar__field" id="form-message">
            <input type="text" placeholder="Text" id="msginput" />
        </form>
        <div id="sendmsg" onClick="{this.sendmessage}">Send</div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
};
</script>

<style>
.screen {

  position: absolute;
  background-color: #fff;
  opacity: 0.8;
  height: 300px;
  width: 200px;
  margin: 0 auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  top: 145px;
  left: 480px;
}

.conversation {
 border-radius:5px;
  background: black;
  height: calc(100% - 50px);
  overflow: auto;
  padding: 20px;
  padding-bottom: 0;
}
.messages {
  margin-bottom: 10px;
}
.messages--received .message {
  float: left;
  background-color: #ddd;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.messages--received .message:first-child {
  border-top-left-radius: 15px;
}
.messages--received .message:last-child {
  border-bottom-left-radius: 15px;
}
.messages--sent .message {
  float: right;
  background-color: #1998e6;
  color: #fff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.messages--sent .message:first-child {
  border-top-right-radius: 15px;
}
.messages--sent .message:last-child {
  border-bottom-right-radius: 15px;
}

.message {
  display: inline-block;
  margin-bottom: 2px;
  clear: both;
  padding: 7px 13px;
  font-size: 12px;
  border-radius: 15px;
  line-height: 1.4;
}
.message--thumb {
  background-color: transparent !important;
  padding: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  width: 20px;
  height: 20px;
  border-radius: 0px !important;
}
.text-bar {
  height: 50px;
  border-top: 1px solid #ccc;
}
.text-bar__field {
  float: left;
  width: calc(100% - 50px);
  height: 100%;
}
.text-bar__field input {
  position: absolute;
  width: 105px;
  height: 30px;
  padding: 0 20px;
  border: none;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  border-radius: 7px;
  top: -9px;
}
.text-bar__thumb {
  float: left;
  width: 50px;
  height: 100%;
  padding: 10px;
}
.text-bar__thumb:hover {
  opacity: .8;
}
.text-bar__thumb .thumb {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

#sendmsg{
  position: absolute;
  color: black;
  border: solid gray 1px;
  border-radius: 3px;
  left: 145px;
  width: 53px;
  height: 21px;
  text-align: center;
  padding-top: 6px;
}
.test0{
         position: absolute;
    width: 12px;
    height: 23px;
    margin: 0%;
    left: 5px;
}
</style>