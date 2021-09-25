var Log = require('../utils/logger');
var express = require('express');
var router = express.Router();

var item = require('../database/item')
var fs = require("fs");
router.get('/', async (req, res) => {
    const log = new Log(['GET', 'ITEM'])
    try {
        var items = await item.find(req.body.options)
        res.status(200).send(items);
    } catch (e) {
        log.error(e);
        res.sendStatus(400);
    }
})

router.post('/', async (req, res) => {
    const log = new Log(['POST', 'ITEM'])
    try {
        //await item.create(req.body.item);

        console.log(req.body);

        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            fstream = fs.createWriteStream(__dirname + '/files/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {

            });
        })

        res.sendStatus(200);
    } catch (e) {
        log.error(e);
        res.sendStatus(400);
    }
})
router.delete('/', async (req, res) => {
    const log = new Log(['DELETE', 'ITEM'])
    try {
        log.out(`${JSON.stringify(req.query, null, 4)}`);
        item.deleteOne({ itemId: req.query.id }, (err)=>{
            if(err){
                throw(err);
            } else {
                log.out(`Item ${req.query.id} removed!`);
                res.sendStatus(200);
            }
        });
    } catch (e) {
        log.error(e);
        res.sendStatus(400);
    }
})
router.patch('/', async (req, res) => {
    const log = new Log(['PATCH', 'ITEM'])
    try {
        await item.findOneAndReplace({ itemId: req.body.itemId }, req.body.update)
        res.sendStatus(200);
    } catch (e) {
        log.error(e);
        res.sendStatus(400);
    }
})

module.exports = router;