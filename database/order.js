const log4js = require("log4js");
var log = log4js.getLogger("[order database]");
if(process.env.MODE==="DEBUG"){
    log.level = "debug";
}