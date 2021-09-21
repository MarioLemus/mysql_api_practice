const mysql = require('mysql')
const { callbackify } = require('util')
const connection = require('../dbConnection/db')

class User {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }

  showDataInDb(callback) {
    const QUERY = `SELECT name, email, id FROM users`
    connection.query(QUERY, (err, result) => {
      if (err) throw err
      console.log('Show me the money')
      callback(result)
    })
  }

  newDataToDb(callbacke) {
    if (this.name && this.email && this.password) {
      const QUERY = `INSERT INTO users (name, email, password) VALUES
        ("${this.name}", "${this.email}", "${this.password}")`
      connection.query(QUERY, (err, result) => {
        if (err) throw err
        //el callback, puede poseer cualquier nombre pero, tiene que ser el mismo que el del parametro
        callbacke(result)
      })
    } else {
      console.log('Fail, can´t load a resource')
    }
  }

  updateExistingDataInDB(_id = 19) {
    this.showDataInDb(result => {
      result.filter(element => {
        if (element.id === _id) {
          newQuery()
        }
      })
    })

    const newQuery = () => {
      if ((this.name === null || undefined)
        || (this.email === null || undefined)
        || (this.password === null || undefined)) {
        console.log('input shouldnt be null')
      } else {
        const QUERY = `UPDATE users SET
          name = "${this.name}",
          email = "${this.email}", 
          password = "${this.password}" WHERE id = ${_id}`

        connection.query(QUERY, (err, result) => {
          if (err) throw err
          console.log('updated')
        })
      }
    }

  }

  deleteFromDb(_id = 19) {
    const QUERY = `DELETE FROM users WHERE id = ${_id} `
    connection.query(QUERY, (err, result) => {
      if (err) throw err
      console.log('Deleted')
    })
  }
}

module.exports = User