var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: any, res: any) {
  res.json({response: "success"})
});

module.exports = router;
