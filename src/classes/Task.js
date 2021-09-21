const connection = require('../dbConnection/db')



class Task {
  constructor(title, description) {
    this.title = title
    this.description = description
  }

  addTask(callback) {
    // const QUERY = "SELECT users.name AS user, tasks.title AS task_title, tasks.description AS task_description FROM users JOIN tasks ON users.tasks = tasks.id";
    // connection.query(QUERY, function (err, result) {
    //   if (err) throw err;
    //   callback(result)
    // })
    const QUERY = `INSERT INTO tasks (title, description) VALUES ("hola", "pasando iva")`
    connection.query(QUERY, (err, result) => {
      if (err) throw err
      console.log('new task addded')
    })
  }
  updateTask() {

  }
  deleteTask() {

  }
  showTask() {

  }
}

module.exports = Task