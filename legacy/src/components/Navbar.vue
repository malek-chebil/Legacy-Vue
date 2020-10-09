<template>
  <div  class="container">
    <ul>
      <li><a>HOME</a></li>
      <li><a>SHOP</a></li>
      <li><a>ABOUT</a></li>
      <li><a>LOGOUT</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style >
.container ul {
    color:white;
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
   ul li {
    cursor: pointer;
    position: relative;
    margin: 0 1.4em;
    padding: 1.2em 1.6em;
    transition: all 0.2s;
    transition-delay: 0.2s;
  }
  ul li::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; 
    background-color: white;
    transition: all  0.2s;
  }
  ul li:hover {
    background-color: rgb(255,63,63);
  }
  ul li:hover::before {
    bottom: 56px;
    left: 0;
    background-color: rgb(255,63,63);
  }
  
  .container{
    position: relative;
    left:364px;
  }
</style>