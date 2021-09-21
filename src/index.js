const express = require('express')
const cors = require('cors')
const connection = require('./dbConnection/db')
const User = require('./classes/User')
const Task = require('./classes/Task')
// const mysql = require('mysql')

const app = express()

//config
app.set('json spaces', 2)
const PORT = process.env.PORT || 7777

//middelware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

//get tareas, post tareas, delete tareas, edit tareas
app.get('/', (req, res) => {
  const user = new User()
  user.showDataInDb(result => res.json(result))
})

app.post('/', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  const user = new User(name, email, password)
  user.newDataToDb(result => res.json(result))
})

app.put('/', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  const user = new User(name, email, password)
  user.updateExistingDataInDB()
})

app.delete('/', (req, res) => {
  const user = new User()
  user.deleteFromDb()
})

app.get('/add', (req, res) => {
  const task = new Task()
  task.addTask(result => res.json(result))
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})