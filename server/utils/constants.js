const path = require("path");
/**
 * Các hằng số hệ thống.
 */

export const LOCAL_PORT = 3001;
export const PORT = process.env.PORT || LOCAL_PORT;
export const SESSION_SECRET = '3223g41T';
export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';
export const STATIC_PATH = path.join(__dirname, '../../public');
export const STATIC_VIEWS = __dirname + '../../public/views';

/**
 * Some config
 */
export const PRODUCTION_HOST = 'baseserver.herokuapp.com';
export const DEVELOPMENT_HOST = `localhost:${LOCAL_PORT}`;
export const DEVELOPMENT_WS = `ws://${DEVELOPMENT_HOST}/subscriptions`
export const PRODUCTION_WSS = `wss://${PRODUCTION_HOST}/subscriptions`

/**
 * Hằng số database
 */
export const DB = {
    "dbnode": {
        "host": "ds159328.mlab.com",
        "port": 59328,
        "url": "mongodb://dev:1223@ds159328.mlab.com:59328/dbnode",
        "database": "dbnode",
        "password": "1223",
        "name": "dbnode",
        "user": "dev",
        "connector": "mongodb"
    }
}

/**
 * khóa token
 */

export const STATIC_SECRET_TOKEN = "aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzAuYW5oc2FuZy4w";
