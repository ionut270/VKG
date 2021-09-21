var Log = require('../utils/logger');
var express = require('express');
var router = express.Router();

var item = require('../database/item')

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
        await item.create(req.body.item);
        res.sendStatus(200);
    } catch (e) {
        log.error(e);
        res.sendStatus(400);
    }
})
router.delete('/', async (req, res) => {
    const log = new Log(['DELETE', 'ITEM'])
    try {
        await item.deleteOne({ itemId: req.body.id });
        res.sendStatus(200);
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