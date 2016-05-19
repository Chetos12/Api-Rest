var express = require('express');
var router = express.Router();
router.get('/',function (req, res) {
    res.send("Bienvenido a la Api");
});

module.exports = router;