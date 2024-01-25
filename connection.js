import mysql from "mysql";

// Create the connection using the server,username and password.
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

connection.connect(function (err) {
    if (err) console.log("XAMPP Server is not running....!");
    else {
        console.log("Connected to XAMPP Server....!");

        //sql query to create a database named  TestDB in XAMPP
        connection.query("CREATE DATABASE IF NOT EXISTS UserManagementDB", function (err, result) {
            //Display message in our console.
            if (err) console.log("Database UserManagementDB not created");
            else console.log("Database UserManagementDB is created");
        });

        connection.query("USE UserManagementDB", function (err, result) {
            if (err) console.log("Database UserManagementDB not used");
            else console.log("Database UserManagementDB is used");
        });

        let query = `CREATE TABLE IF NOT EXISTS user (
            ID int  NOT NULL AUTO_INCREMENT,
            firstName varchar(255),
            lastName varchar(255),
            Email varchar(255),
            phone varchar(255),
            comment text,
            status varchar(50) DEFAULT 'active',
            PRIMARY KEY (ID)
      )`;
        connection.query(query, function (err, result) {
            if (err) console.log("table user not created");
            else console.log("table user is created");
        });
    }
});

export default  connection;