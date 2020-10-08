<template>
    <div id="Admin">
        
          <div>
            <h1 id="ban">Admin Interface</h1>
            <div id="userBann">
              <h1 class="h1a">Banned Accounts</h1>
              <input
                type="username"
                placeholder="Username"
                
                required
              />
              <input
                type="text"
                placeholder="reason"
                required
              >

              <input
                type="date"
                required
              > <br>
              <button id="buttValid" >
                Validate
              </button>
              <button id="getfeeds">
                See Feedbacks
              </button>
            </div>
            <div id="repo">
              <h1 id="repN">Reports</h1>   
           
              <div class="reposes" key={index}> Said : </div>
           
              
            </div>
          </div>
        
          <div>
            <h1 id="feed" class="h1a">Users Feedbacks</h1>
            <button id="back" onClick={this.handleBack}>
              Back
            </button>
            <div id="feeds">
              
                  <div>
                    <div id="feedhold"></div> <br />
                  </div>
                
            </div>
          </div>
        
      </div>
</template>

<script>
export default {
    name: 'Admin'
}
</script>

<style>
#Admin {
  border: 3px solid black;
  width: 821px;
  position: relative;
  padding: 0px;
  padding-left: 55px;
  left: 208px;
  padding-top: 17px;
  top: 69px;
  height: 500px;
}
.h1a{
  color: white;
}
#ban {
  color: white;
  margin: -5px;
  position: relative;
  left: 273px;
}

#userBann {
  position: relative;
  width: 394px;
  margin-left: -45px;
  margin-top: 33px;
  top: 68px;
}

#repo {
  border: 1px solid black;
  width: 416px;
  height: 350px;
  position: relative;
  top: -224px;
  left: 376px;
  overflow-y: auto;
  overflow-x: hidden;
}

#repN {
  position: relative;
  left: 146px;
  top: -20px;
  color: white;
}
.reposes {
  border: 1px solid black;
  width: 361px;
  height: 43px;
  position: relative;
  left:20px;
  border-radius: 4px;
  background-color: #eeeeee;
  margin-top: 11px;
}
.Xbutt {
  padding: 11px;
    color: red;
    background-color: white;
    position: absolute;
    left: 311px;
    top: 2px;
    background-color: red;
    color: white;
    padding: 14px 20px;
    margin: -2px 0px;
    border: inherit;
    cursor: pointer;
    width: 14%;
    opacity: 0.9;
    border-radius: 0px;
}

#feed {
  position: relative;
  left: 287px;
  top: -19px;
}

#back {
  position: relative;
  top: -74px;
  left: -47px;
  padding: 8px;
}

#feeds {
  border: 2px solid black;
  position: relative;
  left: -46px;
  top: -54px;
  width: 855px;
  height: 422px;
  overflow-y: scroll;
  overflow-x: visible;
}

#feedhold {
  border: 2px solid rgb(255, 255, 255);
  width: 807px;
  /* height: 59px; */
  position: relative;
  left: 25px;
  top: 15px;
  border-radius: 5px;
  background-color: white;
  color: black;
  text-align: center;
}
</style>>