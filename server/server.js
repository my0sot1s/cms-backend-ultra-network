import express from 'express'
import http, { createServer } from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import './models'
import graphQLMiddleware, { headerMiddleware, corsMiddleware } from './utils/middlewares'
import { execute, subscribe } from 'graphql';
import session from 'express-session'
import schema from './graphql/schema'
import passport from 'passport'
import uuid from 'node-uuid'
import ejs from 'ejs'
import * as cst from './utils/constants'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'

// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server
// let PORT = process.env.PORT || 3001
//   , secret = `3223g41T/Kai0shin][Sama`
process.env.NODE_ENV = cst.PORT === cst.LOCAL_PORT
    ? cst.DEVELOPMENT
    : cst.PRODUCTION;

console.log(`Running...${process.env.NODE_ENV}`)
const app = express()
require("./utils/authenticate");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views')); // trỏ vào thư mục view để chứa các file template
// Note:ex at https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11

app.use("/dashboard", express.static(path.join(__dirname, '../public')));

app.use(require('cookie-parser')());
// Create sesstion
app.use(session({
    genid: function (req) {
        return uuid.v4();
    },
    secret: cst.SESSION_SECRET,
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
app.all('*', headerMiddleware);

// app.all('*', middleware.)

// require("./rest").default(app, api, cors);

// map controller to deploy
// ready on start
require("./controllers").default.map((value) => {
    app.use('/dashboard', cors(corsMiddleware), value)
});
// map api to deploy
// ready on start
require("./api").default.map((value) => {
    app.use('/api', cors(corsMiddleware), Object.values(value)[0])
});
// redirect to base.
app.get("/", (req, res) => {
    res.redirect("/dashboard")
})
// Note: deploy map graphql to express
// connect to !/graphiql in dev mode
app.use(
    '/graphql',
    ...graphQLMiddleware,
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
    process.env.NODE_ENV === cst.DEVELOPMENT
        ? cst.DEVELOPMENT_WS
        : cst.PRODUCTION_WSS
}))

const wsServe = createServer(app)


// Note: server using port 3001 in development
// work with socket
wsServe.listen(cst.PORT, () => {
    console.log(`*** started at http://localhost:${cst.PORT} ***`)
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
    res.status(404).render("page-error");
})

