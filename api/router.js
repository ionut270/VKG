var express = require('express')
var router = express.Router()


router.get('/', function (req, res) {
  res.send("DATAT");
})

router.get('/item', function(req,res){
  require("./item").get(req,res);
});
router.post('/item', function(req,res){
  require("./item").post(req,res);
});
router.delete('/item', function(req,res){
  require("./item").remove(req,res);
});

module.exports = router;