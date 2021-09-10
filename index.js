require("dotenv").config();

const express = require("express")
const app = express();
const log4js = require("log4js");
const cors = require("cors");

var log = log4js.getLogger("[Root]");
log.level = "debug";

app.use(cors()); // enables Cross Origin Acess requests
app.use(bodyParser.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

app.listen(8080, (err) => {
    if (err) log.err(err);
    else log.debug("Server up and running on 8080 !")
})

