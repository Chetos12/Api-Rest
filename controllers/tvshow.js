var mongoose = require('mongoose');
var TVShow = require('../models/tvshow');

//Reciev GET
exports.finAllTvShows= function (req, res) {
    TVShow.find(function (err, data) {
        if(err){
            res.send(500,err.message);
        }else{
            console.log('GET/tvshows');
            res.status(200).jsonp(data);
        }
    });
};

exports.findById = function (req, res) {
    TVShow.findById(req.params.id,function (err, data) {
        if(err){
            return res.send(500,err.message);
        }else{
            console.log('GET/tvshow/'+ req.pasrams.id);
            res.status(200).jsonp(data);
        }
    });
}

//Reciev POST

exports.addTvShow = function (req, res) {
    console.log('POST');
    console.log(req.body);

    var newTvShow = new TVShow({
        title:req.body.title,
        year:req.body.year,
        country:req.body.country,
        poster:req.body.poster,
        seasons:req.body.seasons,
        genre:req.body.genre,
        summary:req.body.summary
    });

    newTvShow.save(function (err,data) {
        if(err){
            return res.status(500).send(err.message);
        }else {
            res.status(200).jsonp(data);
        }
    });
};

exports.updateTvShow = function (req, res) {
    TVShow.findById(req.params.id,function (err,data) {
        data.title = req.body.petId;
        data.year = req.body.year;
        data.country = req.body.country;
        data.poster = req.body.poster;
        data.seasons = req.body.seasons;
        data.genre = req.body.genre;
        data.summary = req.body.summary;

        data.save(function (err) {
           if(err){
               return res.status(500).send(err.message);
           } else{
               res.status(200).jsonp(data);
           }
        });
    });
};

exports.deleteTvShow = function (req, res) {
    TVShow.findById(req.params.id,function (err, data) {
        data.remove(function (err) {
            if(err){
                return res.status(500).send(err.message);
            }else{
                res.status(200).send();
            }
        });
    });
}