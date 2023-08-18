    export{}
    const mysql = require("mysql2"); // Use the promise version of mysql2
    let db
    try{
         db = mysql.createConnection({
            user: 'root',
            password: 'dD1354268!', // Fix typo here
            host: 'localhost',
            port: 3306,
            database: 'gymwear',
            connectionLimit: 10, // Adjust this value based on your needs
        });
    }
    catch (err){
        console.log(err)
    }
    

    module.exports = db
