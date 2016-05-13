var express = require('express');
var router = express.Router();

/* GET 마이페이지 조회 */
router.get('/:id', function(req, res, next) {
  var user_id = req.params.id;

  pool.getConnection(function(err, conn) {
    if (err) {
      next(err);
      return;
    } else {
      conn.query('SELECT * FROM botto2users WHERE id = ?', [user_id], function(err, rows) {
        if (err) {
          next(err);
          return;
        } else {
          var data = {
            title: "마이페이지",
            rows : rows
          };
          res.json(data);
        }
        conn.release();
      });
    }
  });
});

/* POST 개인정보 수정(이미지) */
//router.post('/:id', function(req, res, next) {
//  var user_id = req.params.id;
//
//  pool.getConnection(function(err, conn) {
//    if (err) {
//      next(err);
//      return;
//    } else {
//      conn.query('SELECT * FROM botto2users WHERE id = ?', [user_id], function(err, rows) {
//        if (err) {
//          next(err);
//          return;
//        } else {
//          var data = {
//            title: "마이페이지",
//            rows : rows
//          };
//          res.json(data);
//        }
//        conn.release();
//      });
//    }
//  });
//});

module.exports = router;

