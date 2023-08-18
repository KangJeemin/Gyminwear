export{}
const mysql = require('mysql2')

const mysqlModule =() => {
    let db
        try{
             db = mysql.createConnection({
             user: process.env.NEXT_PUBLIC_DATABASE_USERNAME,
             password: process.env.NEXT_PUBLIC_DATABASE_PASSWAOD,
             host: 'localhost',
             port: process.env.NEXT_PUBLIC_DATABASE_PORT,
             database: process.env.NEXT_PUBLIC_DATABASE_DATABASE,
             connectionLimit: 10, // Adjust this value based on your needs
             });
        }
        catch (err){
            console.log(err)
        }
    return db
    }
module.exports=mysqlModule
    
    

