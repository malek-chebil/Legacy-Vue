<template>
  <div id="invcontainer">
    <div v-for="elem in elemnts" :key="elem.id"> 
      <div className="invitations"  >You have invitation from{{elem.from}}</div>
      <img src="/images/tick-logo.png"  @click="acceptinvitation" />
      <img src="/images/x-logo.png"  @click="rejectinvitation" />
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
    name:"Invitations",
    data() {
        return {
             Invitations:[]
        }
    },
    methods:{
        rejectinvitation(e){
            let data ={
                to=this.id,
                id=e.target.id
            }
            this.$emit("hideInv")
            axios.post("/rejectinvitation" ,data)
        },
        acceptinvitation(e){
            let data={
                to=this.id,
                id=e.target.id
            }
            this.$emit("hideInv")
            axios.post("/acceptinvitation" , data)
        },
        mounted() {
            let data ={
                id=this.id,
                to=this.id
            }
            axios.post("/fetchIn" , data).then(data =>{
                this.Invitations = data.data
            })
        },

    }

}
</script>
>
