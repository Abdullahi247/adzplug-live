const express = require('express')
const path = require('path')


const app = express()

const Database = require('./Database/Database')
Database()

app.use('/*', (req, res) => {
     res.sendFile(path.join(__dirname + '/ThankYou.html'))
})

// app.listen(process.env.PORT || 8080, () => {
//     console.log("Live Stream Connected Successfully")
// })

const node_media_server = require('./Routers/Live Stream/live_Server')

node_media_server.run()