<template>
  <div id="friendContainer">
     {this.friends.map((elem,index)=>{
   return <div key={index} class="profilfriend">
    <div>{elem.name}</div>
    <img src="/images/chat.png" class="chatl" id={index} @Click="Chat"/>
   </div>
     })}
      </div>
</template>

<script>
// import Chat from './Chat'
export default {
  name: "Friends",
  
    
  
};
</script>
<style>
#friendContainer{
  position: relative;
  border: solid black 2px;
  background: black;
  opacity: 0.7;
  height: 208px;
  width: 169px;
  top: 233px;
  left: 505px;
  border-radius: 5px;
 }
 .chatl{
   width:18px;
 }
</style>>