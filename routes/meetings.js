/**
 * Created by hong on 2016. 5. 13..
 */
var express = require('express');
var router = express.Router();

var pool = require('../models/db');

/* GET 미팅리스트 조회 */
router.get('/', function(req, res, next) {
  //pool.getConnection(function(err, conn) {
  //  if (err) {
  //    next(err);
  //    return;
  //  } else {
  //    //conn.query('SELECT * FROM meeting')
  //  }
  //})
  res.send('미팅!');
});

// POST 미팅 생성
router.post('/', function(req, res, next) {
  res.send('미팅!');
});

// GET 특정 미팅 조회
router.get('/:id', function(req, res, next) {
  res.send('미팅!');
});

module.exports = router;