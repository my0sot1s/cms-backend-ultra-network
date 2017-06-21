import express from 'express'
import http from 'http'
import ioSk from 'socket.io'
import mongoose from 'mongoose'
import path from 'path'
import * as models from './models'

import User, { login, register } from './models/User'
const app = express()
const serve = http.Server(app)
const io = ioSk(serve)
serve.listen(3001)

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

let rooms = []
let usersOnlive = []

io.on('connection', (socket) => {
  socket.on('authen', data => {
    socket.id = data.userId
  })
  socket.on('join_room', function (room_name) {
    socket.join(room_name);
    if (rooms.indexOf(room_name) !== -1) {
      rooms.push(room_name)
    }
  });
  socket.on('login', ({ u, p }) => {
    login(u, p, (e, b, d) => {
      if (b && !e) {
        socket.emit('r_login', { info: d, ok: true })
      } else {
        socket.emit('r_login', { infor: null, ok: false })
      }
    })
  })
  socket.on('switch_room', (req) => {
    socket.join(req.new_room)
    console.log(`${socket.id} witch room ${req.old_room} to ${req.new_room}`)
    socket
      .broadcast
      .to(req.old_room)
      .emit('leave_room_done', `${socket.id} has leave room`)
    socket.leave(req.old_room)
    socket.join(req.new_room)
    socket
      .broadcast
      .to(req.new_room)
      .emit('join_room_done', `${socket.id} has join room`)
  })
  socket.on('leave_room', (res) => {
    socket
      .broadcast
      .to(res.room_name)
      .emit('new_message', `${res.id} has leave room`)
  })
  socket.on('send_message', function (data) {
    socket
      .broadcast
      .to(data.room_name)
      .emit('new_message', data.msg);
  });
  console.log(io.sockets.server.eio.clientsCount)
  // console.log(io.sockets.clients())
  console.log(io.sockets.adapter.rooms)
  // console.log(io.sockets.server.nsps['/'].connected)
  // console.log(io.sockets.server.sockets.clients)
})

console.log('...stated')



