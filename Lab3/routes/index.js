var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MD18401' });
});
router.get('/home',function(req,res,next){
res.render('home',{data:'MD18401',point:10});
});


module.exports = router;
