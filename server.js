const projectData = {}

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

app.use(express.static('public'))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})