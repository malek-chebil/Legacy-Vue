const express = require('express')
const app = express()
const port = 3000
const portS = process.env.PORT || 4001;
const http = require("http");
const mongoose=require("mongoose")
const { random } = require('./Game/game');
const game=require("./Game/game")
const dbF=require("./db/schema");
const { id } = require('./db/schema');

////Map Matrix
var matrix = Array.from(Array(27), (x) => Array(30).fill(0));

var playerPosition={} // i was here if i sleep  
//////////////

app.use(express.static(__dirname + '/dist'));

app.use(express.json())
// mongodb+srv://famy:2222@cluster0.ye5b9.gcp.mongodb.net/famy?retryWrites=true&w=majority // ALA
// mongodb+srv://famy:1234@cluster0.eiv1w.gcp.mongodb.net/famy?retryWrites=true&w=majority // Malek
mongoose.connect("mongodb+srv://famy:2222@cluster0.ye5b9.gcp.mongodb.net/famy?retryWrites=true&w=majority", { useNewUrlParser: true, 
useCreateIndex: true,
useUnifiedTopology: true 
});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.post("/position",(req,res)=>{
  // console.log(req.body)
  playerPosition[req.body.id]=req.body.positionX+"-"+req.body.positionY+"="+req.body.face+"?"+req.body.skin
  mouve(req.body.positionX,req.body.positionY,req.body.id,res,req)
  // console.log(playerPosition)
})

app.post('/selectChar',(req,res)=>{ // Will Update the account skin with the selected skin from the signup0
  
     console.log('slim : 6 save id and skin ===>',req.body)
     dbF.updateskin(req.body.id,req.body.currentskin, res)
     
  
  
})

app.post('/login',(req,res)=>{ //Deal with the login request to the server
if(req.body.password==4444&&req.body.name=="admin"){
  res.send({admin:true})
}else{
dbF.loginUser(req.body,res)
}

})

app.post("/register", (req, res) => {
  dbF.registerUser(req.body,res)
  })

  app.post("/Rposition",(req,res)=>{ // Randomly Chose an empty place for the newuser in the Matrix
    console.log('data sent to position id ===>',req.body)
    // console.log('res from setting the position===>',res)
    randomSpawn(req.body.id,res,req)
    console.table(matrix)
  })

  app.post('/fechdata',(req,res)=>{
    // console.log('app.post fetchData response and playerPosition ====>', res,playerPosition)
  res.send(playerPosition)
  })

  app.post("/Sinvitation",(req,res)=>{
    dbF.invitation(req.body.from,req.body.to,res)
  })
  
  app.post('/fetchIn',(req,res)=>{
    dbF.fetchinvitations(req.body.id,res)
  })
  
  app.post('/acceptinvitation',(req,res)=>{
     dbF.acceptinvitation(req.body.to,req.body.id,res)
  })

  app.post('/rejectinvitation',(req,res)=>{
  dbF.rejectinvitation(req.body.to,req.body.id,res)
  })

  app.post("/fetchFriends",(req,res)=>{
    dbF.fetchfriends(req.body.id,res)
  })

  app.post("/message",(req,res)=>{
    dbF.sendmsg(req.body.from,req.body.to,req.body.message,res,req.body.position)
  })

  app.post('/deleteP',(req,res)=>{
    deleteP(req.body.x,req.body.y,res)
  })

  app.post("/balance",(req,res)=>{
   dbF.UpdataBalance(req.body.id,req.body.balance,res)
  })
 
  app.post( "/balanceF",(req,res)=>{
    dbF.Getbalance(req.body.id,res)
  })

app.post("/feedbacks", async (res, req) => {
  const feedback = new dbF.Feedbacks({
    feedbacks: res.body.feedback,
  });
  await feedback
    .save()
    .then((res) => {
      // console.log("feedback saved");
    })
    .catch((e) => {
      console.log(error);
    });
});

app.get("/Feeds", async (req, res) => {
  await dbF.Feedbacks.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/reports", async (req, res) => {
  dbF.sendreport(req.body.to,req.body.message,res)
});

app.post("/freports", async (req, res) => {
dbF.fetchreports(res)
});

app.post("/banaccount", async (req, res) => {
  // console.log(req.body)
  dbF.banaccount(req.body.username,req.body.reason,req.body.date,res)
  });

  app.get("/shop", async (req, res) => {
    try {
      const data = await dbF.Avatar.find()
      res.send(data)
    } catch(e) {
      console.log(e);
    }
  });
  
  app.post("/purchase", async (req, res) => {
    // console.log(req.body)
    dbF.Users.update({AccountNumber:req.body.id},{Balance:req.body.Balance}).then(result=>{
      // console.log(result)
   res.send()
    })
    // dbF.UpdataBalance(req.body.id,req.body.Balance,res)
    });
////////////////////////////   Simulation

console.table(matrix)

const deleteP=function(px,py,res){
  var currentpositionX=(px-130)/10
  var currentpositionY=(py-100)/10
  matrix[currentpositionX][currentpositionY]=0
  console.table(matrix)
  // console.log(currentpositionX,currentpositionY)
  res.send()
}

var randomSpawn = function(id,res,req){
  var x=game.random("x")
  var y=game.random("y")
  if(matrix[x][y]===0){
     matrix[x][y]=id
     playerPosition[req.body.id]=(130+(x*10))+"-"+(100+(y*10))+"="+req.body.Face+"?"+req.body.skin;
     console.log('this is the player position ====>', playerPosition )
     res.send({x:x,y:y})
     console.log('this is the new position ====>', {x:x,y:y} )

  }else{
    randomSpawn(id)
  }
}

const mouve= function (PX,PY,Id,res,req){
  var currentpositionX=(PX-130)/10
  var currentpositionY=(PY-100)/10
 if(matrix[currentpositionX][currentpositionY]!==undefined){
  if(req.body.Face==="top"){
    if(matrix[currentpositionX][currentpositionY]!=0){res.send({move:false})}
    if(matrix[currentpositionX][currentpositionY]===0){
      matrix[currentpositionX][currentpositionY]=Id
      matrix[currentpositionX+1][currentpositionY]=0
     res.send({move:true})
    }
 }else if(req.body.Face==="Down"){
  if(matrix[currentpositionX][currentpositionY]!=0){res.send({move:false})}
   if(matrix[currentpositionX][currentpositionY]===0){
     matrix[currentpositionX][currentpositionY]=Id
     matrix[currentpositionX-1][currentpositionY]=0
     res.send({move:true})
   }
 }else if(req.body.Face==="left"){
  if(matrix[currentpositionX][currentpositionY]!=0){res.send({move:false})}
   if(matrix[currentpositionX][currentpositionY]===0){
     matrix[currentpositionX][currentpositionY]=Id
     matrix[currentpositionX][currentpositionY+1]=0 
     res.send({move:true})
 }
 
}else if(req.body.Face==="right"){
  if(matrix[currentpositionX][currentpositionY]!=0){res.send({move:false})}
 if(matrix[currentpositionX][currentpositionY]===0){
   matrix[currentpositionX][currentpositionY]=Id
   matrix[currentpositionX][currentpositionY-1]=0
   res.send({move:true})
}
}
console.table(matrix)
 }
}
