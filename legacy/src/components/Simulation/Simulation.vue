<template>

   <div id="map"> 
             <Maincharacter MainP={this.state.MpPosition} id={this.state.id} skin={this.props.data.skin} unmount={this.UnmountP}/>
        {Players}
        {this.state.displayInvitations?<Invitations id={this.props.data.Id} hide={this.hideInv}/>:null}
        {this.state.displayFriends?<Friends friends={this.state.friends} chat={this.showchat}/>:null}
        {this.state.displayChat?<Chat messages={this.state.friends[this.state.selectedfriend]} from={this.state.name} position={this.state.selectedfriend}/>:null}
        <img src="Friends.png" id="FriendsLogo" onClick={this.tooglefriends}/>
        <img src="send-m.png" id="invitations" onClick={this.tooglechatinvitations} />
      </div>
</template>
<script>
import Maincharacter from "./Mainchar.jsx"
import axios from "axios"
import socketIOClient from "socket.io-client"
import Characters from "./chars.jsx"
import Chat from "./chat.jsx"
import Friends from "./Friends.jsx"
import Invitations from "./invitations.jsx"
import Toast from "light-toast";

export default {

  data() {
    return { 
        name: "Simulation",
        components: {
            Maincharacter,
            Characters,
            Chat,
            Friends,
            Invitations,
        },
  data: function (){
      return {
          state :{
              UnmountPX:"",
          UnmountPY:"",
          friends:[],
          MpPosition:{},
          PsPositions:[],
          id:0,
          name:"",
          currentcharacter:"",
          displayInvitations:false,
          displayFriends:false,
          displayChat:false,
          displayAboutUs:false,
          selectedfriend:null,
          s:setInterval(()=>{
            axios({
              url: '/fechdata',
              method: 'post',
            }).then(result=>{
              this.setState({PsPositions:result.data})
            })
           },150),
           d:setInterval(()=>{
            axios({
           url: '/fetchFriends',
           method: 'post',
           data:{id:this.state.id}
        }).then(result=>{
          this.setState({friends:result.data})
        })},2000)
     }
  }
          }

          
      }
     
        
  },
  methods: {
    deleteposition(){
    axios({
      url: '/deleteP',
      method: 'post',
      data:{x:this.UnmountPX,y:this.UnmountPY}
    })
   },
   

  UnmountP(x,y){
    this.setState({UnmountPX:x,UnmountPY:y})
  },

  hideInv(){
      this.setState({displayInvitations:false})
    },
    //////////////////
  showchat(selected){
    this.setState({displayChat:true,displayFriends:false,selectedfriend:(selected.target.id*1)})
  },
/////////////////////
    tooglechatinvitations(){
      this.setState({displayFriends:false,displayInvitations:!this.state.displayInvitations,displayChat:false})
    },
///////////////////
    tooglefriends(){
      this.setState({displayFriends:!this.state.displayFriends,displayInvitations:false,displayChat:false})
      
    },
//////////////////
    static getDerivedStateFromProps(nextprops){
      return {
    id:nextprops.data.Id,
    name:nextprops.data.name
      }
    },
    mounted(){
      Toast.info("Moves: \n Up : W  \n Right : D  \n Left : A \n  Down : S",5000)
      this.props.userid(this.state.id)
        axios({
          url: '/Rposition',
          method: 'post',
          data:{id:this.props.data.Id,Face:`./chars/${this.props.data.skin}/FD/fd0.png`,skin:this.props.data.skin}
        }).then(data=>{
          
          setTimeout(()=>{
            this.setState({UnmountPX:(this.state.PsPositions[this.state.id].split("-")[0])*1,UnmountPY:(this.state.PsPositions[this.state.id].split("-")[1].split("=")[0]*1)})
          },1000)
          this.setState({MpPosition:data.data})
        })
    },

    beforeDestroyr(){
      this.deleteposition()
      clearInterval(this.state.s)
      clearInterval(this.state.d)
    }
    
  }
};

</script>