import { mySqlConnection } from '../';

/**
 * options là 1 object chứa
 * {"columnName":"value"}
 * options tốt hơn hết nên là key
 * @param {string} table 
 * @param {object} options 
 * @return {void}
 */

export const findOne = function (table, options, cb) {
    if (!options || Object.keys(options).length < 1) cb({ err: "No param to query" });
    mySqlConnection.query('SELECT * FROM `' + table + '` WHERE ? = ?'
        // , [Object.keys(options)[0], Object.values(options)[0]]
        // , ['user_id', 1]
        , function (err, results, fields) {
            if (err) cb(err, null);
            else cb(null, results)
        })
}
export const find = function (table, options, cb) {
    if (!options || Object.keys(options).length < 1) cb({ err: "No param to query" });
    mySqlConnection.query('SELECT * FROM `' + table + '` LIMIT 1'
        // , [Object.keys(options)[0], Object.values(options)[0]]
        // , ['user_id', 1]
        , function (err, results, fields) {
            if (err) cb(err, null);
            else cb(null, results)
        })
}
/**
 * @default<>
 */
findOne("User", { user_id: 1 }, (err, data) => {
    debugger
})