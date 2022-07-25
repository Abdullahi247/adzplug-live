const express = require('express')

const app = express()

const Database = require('./Database/Database')
Database()

app.use('/*', (req, res) => {
     res.sendFile(path.join(__dirname + '/ThankYou.html'))
})

app.listen(8080, () => {
    console.log("Live Stream Connected Successfully")
})

const node_media_server = require('./Routers/Live Stream/live_Server')

node_media_server.run()