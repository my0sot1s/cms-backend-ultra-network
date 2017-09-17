const path = require("path");
/**
 * Các hằng số hệ thống.
 */

export const LOCAL_PORT = 3001;
export const PORT = process.env.PORT || LOCAL_PORT;
export const SESSION_SECRET = `3223g41T/Kai0shin][Sama`;
export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';
export const STATIC_PATH = path.join(__dirname, '../../public');
export const STATIC_VIEWS = __dirname + '../../public/views';


/**
 * Hằng số database
 */


/**
 * khóa token
 */

export const STATIC_SECRET_TOKEN = "aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzAuYW5oc2FuZy4w";
