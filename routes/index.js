var express = require('express');
var router = express.Router();
var mysql = require('mysql2')
var config = require('../config/config');

var connection = mysql.createConnection(config['database'])

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test/', function(req, res, next) {
  console.log('loglog');
  res.json([{answer: 'OK'}]);
});

router.get('/dbtest/', function(req, res, next) {
  console.log(' Try DB Connection');
  connection.connect()

  connection.query('SELECT * FROM VOCA', function (err, rows, fields) {
    if (err) {
      console.log('DB Connection err');
      throw err
    } else {
      console.log('DB Connection Success');
      console.log("test" + rows[0].vocaListId);
      res.send(rows);
    
    }
    // console.log('The solution is: ', rows[0].solution)
    // console.log(err);

    // console.log(fields);
  })
  

  connection.end()
});



module.exports = router;
