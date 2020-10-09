<template>
    <div id="tokens">
    <img src="/public/images/token.png" alt="" id="tokenImage"/>
    <h3 id="token" >MJ</h3>
    </div>
</template>
<script>
export default {
    name:"Token"
}
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