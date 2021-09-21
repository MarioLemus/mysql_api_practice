// const database = require('mime-db')
const mysql = require('mysql')
require('dotenv').config()


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
})

connection.connect(err => {
  if (err) throw err
  console.log('Conecction with db stablished!')
})

module.exports = connection