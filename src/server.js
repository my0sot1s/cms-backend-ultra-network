import express from 'express'
import http, { createServer } from 'http'
import bodyParser from 'body-parser'
// import ioSk from 'socket.io'
import mongoose from 'mongoose'
import path from 'path'
import * as models from './models'
// import { socket } from './socket'
import User, { login, register } from './models/User'
import list from './controller'
import { corsOptions, headerConfig, setPubsubMiddleware } from './middleware'
import schema from './graphql/schema'
import { pubsub } from './graphql/subscriptions'
// import graphqlHTTP from 'express-graphql'
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server
// import schema2 from './_graphql/schema'

console.log(`Running...`)
const app = express()
// const serve = http.Server(app)
// const io = ioSk(serve)
let PORT = process.env.PORT || 3001
// let WS_PORT = process.env.PORT || 3002

//  ex https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11


// create server ws for graphql suubscrition

const wsServe = createServer(app)


// subcription config for server

// const subscriptionServe = new SubscriptionServer({
//   subscriptionManager,
//   onConnect: async (connectParams) => {
//     console.log(`ws connect established ${connectParams}`)
//   },
// },
//   {
//     server: wsServe,
//     path: '/'
//   })

//Set our static file directory to public
app.use(express.static(path.join(__dirname, 'public')));
// help express can read param with ?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')())
//Allow CORS
app.all('*', headerConfig);

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'))
})

// api send with controller

const len = list.length;
for (var i = 0; i < len; i++) {
  app.use('/api', list[i])
}
// app.use('/graphql', bodyParser.json(), graphqlHTTP(() => ({
//   schema,
//   graphiql: true,
//   pretty: true
// })
// ))

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// SubscriptionServer.create(
//   {
//     schema,
//     execute,
//     subscribe,
//   },
//   {
//     server: wsServe,
//     path: '/subscriptions'
//   },
// );

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  // subscriptionEnpoint: `ws://localhost:3001/subscriptions`
  subscriptionEnpoint: `ws://https://baseserver.herokuapp.com/subscriptions`
}))


// app.get('/fb', (req, res) => {
//   res.sendfile(path.join(__dirname, 'public/fb.html'))
// })
// idiot
// app.get('/socket', (req, res) => {
//   res.sendfile(path.join(__dirname, 'public/socket.html'))
// })
wsServe.listen(PORT, () => {
  console.log(`*** started at ${PORT} ***`)
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
  }, {
      server: wsServe,
      path: '/subscriptions',
    });
  console.log(`___________________________`)
})

// socket(io)
