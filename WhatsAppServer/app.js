var cors = require("cors");
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var fs = require('fs');

//whats app
const WhatsAppWeb = require('baileys') 

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/client/build')));
app.use(cors());

console.log("Starting Server");
//loading config.json
var config = JSON.parse(fs.readFileSync("./config.json","utf-8"));
//whatsApp set up
const client = new WhatsAppWeb() 
if(config.saveLogin == true){
  if(fs.existsSync("./auth_info.json") == false){
    client.connectSlim() // does not wait for chats & contacts
    .then (user => {
        console.log ("Connected" + user.name + " (" + user.id + ")");
        const creds = client.base64EncodedAuthInfo (); // contains all the keys you need to restore a session
        fs.writeFileSync('./auth_info.json', JSON.stringify(creds, null, '\t')); // save JSON to file
    })
    .catch (err => console.log("unexpected error: " + err))
  }
  else{
    var auth = JSON.parse(fs.readFileSync("./auth_info.json","utf-8"));
    client.connectSlim(auth) // will load JSON credentials from file
    .then (user => {
      console.log ("Connected" + user.name + " (" + user.id + ")");
    })
  }
}
else{
  client.connectSlim() // does not wait for chats & contacts
  .then (user => {
      console.log ("Connected" + user.name + " (" + user.id + ")");
  })
  .catch (err => console.log("unexpected error: " + err))
}


//routes 
app.post("/what/api/v1/send",function(req,res){
  /*body form
  {
    "msg":"Some String",
    "to":"WhatsAppId person or group",
    "key":"string to check user",
  }*/
  //load config.json
  var config = JSON.parse(fs.readFileSync("./config.json","utf-8"));
  console.log("MessageSend:",req.body);
    if(config.key == req.body.key){
      try {
        
        client.sendTextMessage(req.body.to,req.body.msg);
        var response = {"sucess":"true"};
        res.status(200).json(response);
      }
      catch(error){
        var response = {"sucess":"false"};
        res.status(400).json(response);
      }
  }
  else{
    var response = {"sucess":"false"};
    res.status(400).json(response);
  }
});

app.post("/what/api/v1/contacts",function(req,res){
  var config = JSON.parse(fs.readFileSync("./config.json","utf-8"));
  console.log("contactRequest:",req.body);
    if(config.key == req.body.key){;
      res.status(200).json({"contacts":config.contacts});
    }
    else{
      var response = {"sucess":"false"};
      res.status(400).json(response);
    }
});


app.listen(config.port);
