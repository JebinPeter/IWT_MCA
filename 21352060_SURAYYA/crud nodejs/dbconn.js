const mysql=require('mysql');
var conn=mysql.createConnection({
    host:'localhost',
    database:'iwtdb',
    user:'root',
    password:'surai@786313'
});

conn.connect(function(error)
{
    if(error) throw error;
    else console.log("Connected");
});

module.exports=conn;
