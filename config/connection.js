var mysql = require('mysql')
module.exports = function(connection){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gobigblue97',
    database: 'burgers_db'
  })
  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack)
      return
    }
    console.log('connected as id ' + connection.threadId)
  })
}