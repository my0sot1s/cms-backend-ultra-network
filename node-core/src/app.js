import express from 'express'
import http, { createServer } from 'http'
import bodyParser from 'body-parser'
import * as middleware from './middleware'

const app = express()


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views')); // trỏ vào thư mục view để chứa các file template

// help express can read param with ?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
//Allow CORS
app.all('*', middleware.);


app.get("*", (req, res) => {
    res.send('404 not found')
})