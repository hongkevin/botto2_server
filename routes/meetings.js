/**
 * Created by hong on 2016. 5. 13..
 */
var express = require('express');
var router = express.Router();

var pool = require('../models/db');

/* GET 미팅리스트 조회 */
router.get('/', function(req, res, next) {
  pool.getConnection(function(err, conn) {
    if (err) {
      next(err);
      return;
    } else {
      conn.query('SELECT m.id AS meeting_id, m.spot AS spot, m.age AS age, m.number AS number, m.theday AS theday, m.introduction AS introduction, u.gender AS gender, u.google_img AS google_img, u.nickname AS nickname  FROM botto2meetings m join botto2users u on u.id = m.user_id order by m.id desc', function(err, rows) {
        if (err) {
          next(err);
          return;
        } else {
          var data = {
            title: "미팅리스트",
            rows : rows
          };
          res.json(data);
        }
        conn.release();
      });
    }
  });
});

// POST 미팅 생성
router.post('/', function(req, res, next) {
  var data = {
    user_id      : req.body.user_id,
    spot         : req.body.spot,
    number       : req.body.number,
    age          : req.body.age,
    theday       : req.body.theday,
    introduction : req.body.introduction,
  };

  // 사용자의 키값과 미팅정보를 받아서 미팅테이블에 저장
  // 미팅리스트를 조회할 때 미팅정보 값은 물론 사용자키값으로 가져온 관련정보도 뿌려줌(JOIN)

  pool.getConnection(function(err, conn) {
    if (err) {
      next(err);
      return;
    } else {
      conn.query('INSERT INTO botto2meetings SET ?', data, function(err, row) {
        if (err) {
          next(err);
          return;
        } else {
          //res.send("하이!")
          res.status(200).send();
          console.log('row: ', row);
          console.log('data: ', data);
        }
        conn.release();
      });
    }
  });
});

module.exports = router;
