const projectData = {}
const apiKey = `ddb32c28535519ff8e479f5099a03619`

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

// GET route
app.get('/getAllEntries', (req, res) => {
    res.send(projectData)
})

// POST route
app.post('/addEntry', (req, res) => {
    let body = req.body.newData
    projectData.date = body.date
    projectData.temp = body.temp
    projectData.content = body.content

    res.status(200).json({
        data: projectData
    })
})