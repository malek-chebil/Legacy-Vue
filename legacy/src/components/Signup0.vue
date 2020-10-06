<template>
      <div class="Signup0">
         <h1 id="Selectchar">Select A Character</h1>
         <a href="#"> 
         <img src="arrow.png" alt="" id="arrowR"/></a>
         
        <div id="CardPlayer">
        <img src={this.state.charsSrc[this.state.i]} width="75px"/>
        </div>
       <a href="#"  >   
        <img src="arrow.png" alt="" id="arrowL"/></a>
        <button id="BTNS" >Select</button>
    </div>  
</template>

<script>
export default {
    name : 'Signup0'
}
</script>

<style scoped>

</style>