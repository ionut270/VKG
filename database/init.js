const e = require("express");
const log4js = require("log4js");
var log = log4js.getLogger("[connect database]");
if(process.env.MODE==="DEBUG"){
    log.level = "debug";
}

const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ARGS}`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function connect(){
    return new Promise((resolve,reject)=>{
        client.connect(err => {
            if(err){ 
                log.error(err)
                reject(err);
            } else{ 
                resolve(client);
            }
        });
    })
}

// a function that returns the client
module.exports = connect;