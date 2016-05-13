/**
 * Created by hong on 2016. 5. 13..
 */
var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'mocatest.clygypqv5dm2.ap-northeast-1.rds.amazonaws.com',
  port            : 3306,
  user            : 'hong',
  password        : 'joy2013!',
  database        : 'botto2'
});

module.exports = pool;
