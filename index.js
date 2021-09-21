require("dotenv").config();
const Log = require('./utils/logger');

require('mongoose').connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ARGS}`,{dbName: "vkg"},function(err){
    const log = new Log(['MONGOOSE','CONNECT']);
    if(err){
        log.error(err);
    } else {
        log.out(`Connected to mongoDB server !`)
    }
});

const express = require("express")
const cors = require("cors");
const app = express();

app.use(cors()); // enables Cross Origin Acess requests
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

app.use('/api',require("./api/router"))

app.listen(process.env.PORT, (err) => {
    const log = new Log(['APP','LISTENER'])

    if (err) log.err(err);
    else log.out(`Server up and running on ${process.env.PORT} !`)
})

