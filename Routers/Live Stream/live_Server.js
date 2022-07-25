const NodeMediaServer = require('node-media-server')
const LiveStream = require('../../Models/LiveStream')
// const mongoose = require('mongoose')
config = require('./config').rtmp_server

nms = new NodeMediaServer(config)

nms.on('prePublish', async (id, StreamPath, args) => {
  let stream_key = getStreamKeyFromStreamPath(StreamPath)

  LiveStream.findOne({ purchaseToken: stream_key }, {}, (err, LiveToken) => {
    if (LiveToken) {
      return
    } else {
      const session = nms.getSession(id)
      session.reject()
    }
  })
})

const getStreamKeyFromStreamPath = path => {
  let parts = path.split('/')
  return parts[parts.length - 1]
}

module.exports = nms
