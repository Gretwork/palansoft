var express = require('express')
var app = express()
var cors = require('cors')

app.use(express.json())
app.use(
  cors({
    origin: 'http://192.168.0.118:3000',
  })
)

app.get('http://192.168.0.118:3000', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})
