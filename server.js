const express = require('express')

const app = express()

const Database = require('./Database/Database')
Database()

const node_media_server = require('./Routers/Live Stream/live_Server')

node_media_server.run()