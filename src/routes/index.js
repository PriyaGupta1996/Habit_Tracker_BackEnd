var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/habit', (req, res) => {
  res.json({ habit: 1, name: "calls" });
}
);

module.exports = router;