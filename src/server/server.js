import express from 'express'
import http, { createServer } from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import Model from './models/Foods'
import './models'
import controller from './controller'
import { middleware } from './middleware/index'
import schema from './graphql/schema'
import { pubsub } from './graphql/subscriptions'
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server

console.log(`Running...`)
const app = express()
let PORT = process.env.PORT || 3001
const wsServe = createServer(app)
// Note:ex at https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11
// create server ws for graphql suubscrition
// Set our static file directory to public
app.use(express.static(path.join(__dirname, 'public')));
// help express can read param with ?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
//Allow CORS
app.all('*', middleware.header);
// app.all('*', middleware.)

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'))
})

// Note: Load all controllers is a array.
// router uri: api/{router_name}
const len = controller.length;
for (var i = 0; i < len; i++) {
  app.use('/api', cors(middleware.cors), controller[i])
}

// Note: deploy map graphql to express
// connect to !/graphiql in dev mode
app.use('/graphql', ...middleware.graphql, graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionEnpoint:
  process.env.NODE_ENV === 'development'
    ? `ws://localhost:3001/subscriptions` :
    `ws://baseserver.herokuapp.com/subscriptions`
}))

// Note: Deploy subscription server
// work with websocket at: ws://localhost:3001/subscriptions of course work with dev model
// subscripts to recieve broadcast
SubscriptionServer.create({
  execute,
  subscribe,
  schema,
}, {
    server: wsServe,
    path: '/subscriptions',
  });

// Note: server using port 3001 in development
// work with socket
wsServe.listen(PORT, () => {
  console.log(`*** started at ${PORT} ***`)
  console.log(`+*******************************+`)
})