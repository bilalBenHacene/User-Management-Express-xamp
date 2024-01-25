//initilize the file
npm init -y

//install express package
npm i express

//install mysql package
npm i mysql


//install ejs package
npm i ejs


//install nodemon package
npm i nodemon


//to run your project : npx nodemon app.js || add "start": "nodemon app.js" in package.json in "scripts" tag then just write : npm start in terminal



//sql query
CREATE DATABASE IF NOT EXISTS UserManagementDB;


CREATE TABLE IF NOT EXISTS user (
    ID int  NOT NULL AUTO_INCREMENT,
    firstName varchar(255),
    lastName varchar(255),
    Email varchar(255),
    phone varchar(255),
    comment text,
    status varchar(50) DEFAULT 'active',
    PRIMARY KEY (ID)
);