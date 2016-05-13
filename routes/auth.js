/**
 * Created by hong on 2016. 5. 13..
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var pool = require('../models/db');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 이메일 회원가입
router.post('/emailsignup', function(req, res, next) {
  //var chunk = '';
  //req.on('data', function(data) {
  //  chunk = JSON.parse(data);
  //});
  //req.on('end', function() {
  //  console.log('name: '+chunk.name+', phone:'+chunk.phone);
  //});
  //res.write('OK');
  //res.end();

  var user = {
    email    : req.body.email,
    password : req.body.password,
    nickname : req.body.nickname,
    gender   : req.body.gender
  };



  pool.getConnection(function(err, conn) {
    if (err) {
      next(err);
      return;
    } else {
      conn.query('INSERT INTO botto2users SET ?', user, function(err, rows) {
        if (err) {
          next(err);
          return;
        } else {
          res.status(200).send();
        }
        conn.release();
      });
    }
  });

});

// 이메일 로그인
//router.post('/emaillogin', function(req, res, next) {
//  var data = {
//    email: req.body.email,
//    password: req.body.password
//  };
//  res.render('index', { title: 'Express' });
//});

// 카카오 로그인
// router.post('/kakaologin', function(req, res, next) {});

module.exports = router;