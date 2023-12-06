const express = require("express");
const app = express();

require("dotenv").config();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use("/public",express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/pages/header-parser-microservice.html");
})

app.get("/api/whoami",(req,res)=>{
	res.json({
		ipaddress:req.ip,
		software:req.rawHeaders[13],
		language:req.rawHeaders[29]
	})
})

const listener = app.listen(process.env.PORT || 3000, ()=>{
  console.log('Your app is listening on port ' + listener.address().port);
})
