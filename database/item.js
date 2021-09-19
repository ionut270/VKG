const log4js = require("log4js");
var log = log4js.getLogger("[item database]");
if (process.env.MODE === "DEBUG") {
    log.level = "debug";
}

function get() {
    return new Promise(async (resolve, reject) => {
        const client = await require('./init')();
        client.db("Storage").collection("items").find({}).toArray((err, docs) => {
            if (err) {
                reject(err)
            } else {
                resolve(docs);
            }
            client.close();
        })
        resolve(data);
    })
}

function insert(data) {
    return new Promise(async (resolve, reject) => {
        const client = await require('./init')();
        client.db("Storage").collection("items").insertOne(data,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
            client.close();
        })
    })
}

function remove(query) {
    return new Promise(async (resolve, reject) => {
        const client = await require('./init')();
        client.db("Storage").collection("items").removeOne(query,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
            client.close();
        })
    })
}
function update(query,data) {
    return new Promise(async (resolve, reject) => {
        const client = await require('./init')();
        client.db("Storage").collection("items").update(query, data,{upsert : true},(err) => {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
            client.close();
        })
        resolve(data);
    })
}

module.exports = {
    get: get,
    insert: insert,
    remove: remove,
    update: update
}