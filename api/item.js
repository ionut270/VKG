const e = require("express");
const log4js = require("log4js");
var log = log4js.getLogger("[/item]");
if(process.env.MODE==="DEBUG"){
    log.level = "debug";
}

const item = require("../database/item");

// Needs pagination of some sorts ...
async function get (req,res){
    var data = await item.get();
    res.send(data);
}

async function post(req,res){
    // check data first...
    const {insert} = req.body;
    if(checkItem(insert)){
        // for insert we require all the keys to be present ... 
        if(checkSsKeys(insert) > 1){
            res.status(400).send("More keys required !");
        } else {
            try{
                await item.insert(insert);
                res.send(200)
            } catch(e){
                log.error(e);
                res.send(400);
            }
            res.send(200);
        }
    } else {
        res.send(400);
    }
}

async function remove(req,res){
    const {remove} = req.body;
    if(checkItem(remove)){
        try{
            await item.remove(remove);
            res.send(200)
        } catch(e){
            log.error(e);
            res.send(400);
        }
    } else {
        res.send(400)
    }
}

//--------------------------------/
function checkItem(data){
    var allowedKeys = process.env.ITEM_KEYS.split(/,/);
    var ok = true;
    Object.keys(data).some(el=>{
        if(allowedKeys.indexOf(el) === -1){
            ok = false;
            return false;
        }
    })
    return ok;
}

function checkSsKeys(data){
    var allowedKeys = process.env.ITEM_KEYS.split(/,/);
    var count = 0;
    Object.keys(data).map(el=>{
        if(allowedKeys.indexOf(el) != -1){
            count ++;
        }
    })
    return allowedKeys.length - count;
}
//--------------------------------/

module.exports = { 
    get: get,
    post: post,
    remove : remove
}


