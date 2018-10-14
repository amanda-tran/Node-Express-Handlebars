let mysql = require('mysql');
let key = require('../key');

let connection = mysql.createConnection({
    host: key.clearDB.host,
    port: 3306,
    user:  key.clearDB.username,
    password:  key.clearDB.password,
    database: key.clearDB.database
});

connection.connect((err)=>{
    if (err) {
        console.log(`Error Connecting: ${err.stack}`) // what is err.stack?
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;