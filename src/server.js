import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import ioSk from 'socket.io'
import mongoose from 'mongoose'
import path from 'path'
import * as models from './models'
import { socket } from './socket'
import User, { login, register } from './models/User'
import list from './controller'


const app = express()
const serve = http.Server(app)
const io = ioSk(serve)
let PORT = process.env.PORT || 3001

//Set our static file directory to public
app.use(express.static(path.join(__dirname, 'public')));
// help express can read param with ?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('cors')())
//Allow CORS
app.all('*', function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE,OPTIONS');
  res.set('Access-Control-Expose-Headers', 'Content-Length');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'))
})

// api send with controller

const len = list.length;
for (var i = 0; i < len; i++) {
  app.use('/api', list[i])
}

// idiot
app.get('/socket', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/socket.html'))
})

app.get('/fb', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/fb.html'))
})

serve.listen(PORT, () => {
  console.log('started...')
})

socket(io)

