var db = require('./mysql_conn');
var mysql = db.mysql;
var conn = db.conn;

conn.connect();

var sql = "INSERT INTO books SET title=?, content=?, filename=? ";
var params = ["춘향전","변사또가..","chun.jpg"];
conn.query(sql, params, (err,rows,field) => {
    if(err) {
        console.log(err);
    } else {
        console.log(rows);
    }
})