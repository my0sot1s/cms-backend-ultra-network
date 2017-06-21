import express from 'express'
import http from 'http'
import ioSk from 'socket.io'
import mongoose from 'mongoose'
import path from 'path'
import * as models from './models'
import { socket } from './socket'
import User, { login, register } from './models/User'
const app = express()
const serve = http.Server(app)
const io = ioSk(serve)
let Port = process.env.PORT || 3001

//Set our static file directory to public
app.use(express.static(path.join(__dirname, 'public')));

//Allow CORS
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'))
})
app.get('/socket', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/socket.html'))
})
app.get('/login/:user/:pass', (req, res) => {
  login(req.params.user, req.params.pass, (err, r, k) => {
    if (r && !err)
      res.send(k);
    else res.send('Login failure');
  })
})
app.get('/fb', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/fb.html'))
})

serve.listen(Port, () => {
  console.log('started...')
})

socket(io)

