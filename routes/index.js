var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("go");
  var t = req.query.t;
  console.log(t);
  res.render('index', { title: t,  question : "想知道2016年運勢會如何嗎？現在請憑直覺選一張牌！"});
});

module.exports = router;
