var express = require('express');
var router = express.Router();
var conTvShow = require('../controllers/tvshow');
router.get('/',function (req, res) {
    res.send("Bienvenido a la Api");
});
router.route('/tvshows')
    .get(conTvShow.finAllTvShows)
    .post(conTvShow.addTvShow);
router.route('/tvshows/:id')
    .get(conTvShow.findById)
    .put(conTvShow.updateTvShow)
    .delete(conTvShow.deleteTvShow);
module.exports = router;