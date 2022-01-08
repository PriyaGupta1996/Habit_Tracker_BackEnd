var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ping', (req, res) => {
  res.send("pong");
}
);

module.exports = router;
