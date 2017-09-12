import express from 'express'
import http, { createServer } from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import './models'
import controller from './controller'
import { middleware } from './middleware/index'
// import schema from './graphql/schema'
import { execute, subscribe } from 'graphql';
import session from 'express-session'
import passport from 'passport'
import uuid from 'node-uuid'


import schema from './__graphql__/schema'


import { SubscriptionServer } from 'subscriptions-transport-ws'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'

// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server
let PORT = process.env.PORT || 3001
  , secret = `3223g41T/Kai0shin][Sama`
process.env.NODE_ENV = PORT === 3001 ? 'development' : "production"
console.log(`Running...${process.env.NODE_ENV}`)
const app = express()
require("./auth");
// Note:ex at https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11
// create server ws for graphql suubscrition
// Set our static file directory to public
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/admin')));
// app.use(express.static(path.join(__dirname, '../admin')));
app.use(require('cookie-parser')());
// Create sesstion
app.use(session({
  genid: function (req) {
    return uuid.v4();
  },
  secret: secret,
  proxy: true,
  resave: true,
  saveUninitialized: true,

}));
// end session

// help express can read param with ?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
//Allow CORS
app.all('*', middleware.header);

// app.all('*', middleware.)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../admin/blank-page.html'))
// })
app.get('/test', (req, res) => {
  if (req.isAuthenticated())
    res.send("Login");
  else res.send("Chưa login mà");
})
app.route("/login")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '/public/login.html'))
  })
  .post(passport.authenticate('local'
    , {
      failureRedirect: '/login',
      successRedirect: '/'
    }));

app.get('/create-blog', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendFile(path.join(__dirname, '/public/blog.html'))
  } else {
    res.sendFile(path.join(__dirname, '/public/login.html'))
  }
})

// Note: Load all controllers is a array.
// router uri: api/{router_name}
const len = controller.length;
for (var i = 0; i < len; i++) {
  app.use('/api', cors(middleware.cors), controller[i])
}

// Note: deploy map graphql to express
// connect to !/graphiql in dev mode
app.use(
  '/graphql',
  ...middleware.graphql,
  graphqlExpress(req => {
    // https://github.com/graphql/express-graphql/blob/3fa6e68582d6d933d37fa9e841da5d2aa39261cd/src/index.js#L257
    const query = req.query.query || req.body.query;
    if (query && query.length > 2000) {
      // None of our app's queries are this long
      // Probably indicates someone trying to send an overly expensive query
      throw new Error('Query too large.');
    }
    return {
      schema
    };
  })
);
// app.use('/graphql', ...middleware.graphql, graphqlExpress({ schema: _schema }));
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint:
  process.env.NODE_ENV === 'development'
    ?
    `ws://localhost:3001/subscriptions`
    :
    `wss://baseserver.herokuapp.com/subscriptions`
}))

const wsServe = createServer(app)


// Note: server using port 3001 in development
// work with socket
wsServe.listen(PORT, () => {
  console.log(`*** started at ${PORT} ***`)
  console.log(`+*******************************+`)
  // Note: Deploy subscription server
  // work with websocket at: ws://localhost:3001/subscriptions of course work with dev model
  // subscripts to recieve broadcast
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
  }, {
      server: wsServe,
      path: '/subscriptions',
    });
})

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/page-error.html'))
})

