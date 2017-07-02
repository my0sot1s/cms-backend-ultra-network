import mongoose from 'mongoose'
mongoose.Promise = require('bluebird')
//Connect to mongo DB database
const connectModel = async () => {
  return await mongoose.connect("mongodb://dev:1223@ds159328.mlab.com:59328/dbnode?admin?replicaSet=ds159328",
    // { useMongoClient: true }
  )
}
connectModel()
mongoose.connection.on('error', function (err) {
  console.log(err)
});
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection');
}); 
