/**
 * Created by hong on 2016. 5. 13..
 */
var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'localhost',
  user            : 'root',
  database        : 'test'
});

module.exports = pool;