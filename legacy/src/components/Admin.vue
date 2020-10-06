<template>
    <div id="Admin">
        
          <div>
            <h1 id="ban">Admin Interface</h1>
            <div id="userBann">
              <h1 className="h1a">Banned Accounts</h1>
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
           
              <div className="reposes" key={index}> Said : </div>
           
              
            </div>
          </div>
        
          <div>
            <h1 id="feed" className="h1a">Users Feedbacks</h1>
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

<style scoped>

</style>