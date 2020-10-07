<template>
  <div class="Chat">
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