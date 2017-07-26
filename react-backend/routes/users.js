var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	user: "Allen Estes"
  }, {
  	id: 2,
  	user: "Test Second User"
  }]);
});

module.exports = router;