import mongoose from 'mongoose';
const Promise = mongoose.Promise = require('bluebird');
const cst = require("../utils/constants");
//Connect to mongo DB database
const connectModel = async () => {
    const { user, password, port, host, database } = cst.DB.dbnode;
    return await mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${database}?admin?replicaSet=ds159328`,
        { useMongoClient: true }
    )
}
connectModel()
mongoose.connection.on('error', function (err) {
    console.log("Không có kết nối mạng tới clouds db");
});
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection');
});


// Connect mysql

const { host, user, password, database, port } = cst.DB.mysql_localhost;

// tao chuỗi kết nối

// export const mySqlConnection = require("mysql").createConnection({ host, user, password, database, port });

// Thiết lập kiểm tra kết nối với mysql
// lấy ra được thread id
// mySqlConnection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + mySqlConnection.threadId);
// });
// // mySqlConnection.connect();
// /**
//  * @param {object} error lỗi trả về khi kết nối hoặc query fail
//  * @param {array} results là mảng row được trả về khi query 
//  * @param {array} fields mảng các column name trong table
//  * @
//  */
// mySqlConnection.query('SELECT * from mynode.User where user_id=?', [1], function (error, results, fields) {
//     if (error) throw error;
//     // debugger
//     console.log('The solution is: ', results[0].username);
// });

// require("./mysql/utils")
// mySqlConnection.on("error", function (e) {
//     throw new Error(e);
// })
// /**
//  * 
//  * @param {string} queryStr 
//  * @param {object} options
//  */
// export function mySqlQuery(queryStr, options) {
//     mySqlConnection.connect();

//     mySqlConnection.query(queryStr, function (error, results, fields) {
//         return new Promise(function (resolve, reject) {

//         })
//     });

//     mySqlConnection.end();
// }
