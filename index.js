require("dotenv").config();

const log4js = require("log4js");
var log = log4js.getLogger("[Root]");
if(process.env.MODE==="DEBUG"){
    log.level = "debug";
}

const express = require("express")
const cors = require("cors");
const app = express();

app.use(cors()); // enables Cross Origin Acess requests
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

app.use('/api',require("./api/router"))

app.listen(8080, (err) => {
    if (err) log.err(err);
    else log.debug("Server up and running on 8080 !")
})

