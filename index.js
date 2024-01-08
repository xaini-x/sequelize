const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/userroute');
require("./models/index")
const app = express();
app.use(bodyParser.json());

app.use('/api', router)
 
app.listen("8080", ()=>{
    console.log("Server is running on port 8080");
}
);