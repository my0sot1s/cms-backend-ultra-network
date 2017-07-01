import express from 'express'
import http, { createServer } from 'http'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import path from 'path'
import * as models from './models'
import list from './controller'
import { middleware } from './middleware'
import schema from './graphql/schema'
import { pubsub } from './graphql/subscriptions'
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server

console.log(`Running...`)
const app = express()
let PORT = process.env.PORT || 3001

//  ex https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11


// create server ws for graphql suubscrition

const wsServe = createServer(app)

//Set our static file directory to public
app.use(express.static(path.join(__dirname, 'public')));
// help express can read param with ?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')(middleware.cors))
//Allow CORS
app.all('*', middleware.header);

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'))
})
app.get('/graphql', (req, res) => {
  res.send(`Opp can't support now!!!  ≧◉◡◉≦ `)
})

// api send with controller

const len = list.length;
for (var i = 0; i < len; i++) {
  app.use('/api', list[i])
}

app.use('/graphql', ...middleware.graphql, graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionEnpoint: process.env.NODE_ENV === 'development'
    ? `ws://localhost:3001/subscriptions`
    : `ws://https://baseserver.herokuapp.com/subscriptions`
}))
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
  console.log(`+*******************************+`)
})