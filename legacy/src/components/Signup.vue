<template>
  <div>
    <h1>Sign Up</h1>
    <input type="username" placeholder="Username" required />
    <br />
    <input type="email" placeholder="Email" required />
    <br />
    <input type="password" placeholder="Password" required />
    <br />
    <button @click="triggerSelectCharId">Sign Up</button>
    <h5>I Already have an <a>Account</a></h5>
  </div>
</template>

<script>

export default {
  name: "Signup",
  
  props: [
    'signup',
    'signup0'
  ],
  methods:{
    triggerSelectCharId(){
      this.$emit('selectCharId', !this.signup, !this.signup0)
      
    }
  }
    
  
};
</script>
