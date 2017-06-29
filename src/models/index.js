import mongoose from 'mongoose'
mongoose.Promise = require('bluebird')
//Connect to mongo DB database
mongoose.connect("mongodb://dev:1223@ds159328.mlab.com:59328/dbnode", { useMongoClient: true });
