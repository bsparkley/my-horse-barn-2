var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Horse = require('../models/Horse.js');

/* GET ALL HORSES */
router.get('/', function(req, res, next) {
  Horse.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE HORSE BY ID */
router.get('/:id', function(req, res, next) {
  Horse.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE HORSE */
router.post('/', function(req, res, next) {
  Horse.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE HORSE */
router.put('/:id', function(req, res, next) {
  Horse.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE HORSE */
router.delete('/:id', function(req, res, next) {
  Horse.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;