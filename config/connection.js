// require mongoose for connection.
const { connect, connection } = require("mongoose");

// Create and connect with socialnetworkDB.
connect("mongodb://127.0.0.1:27017/socialnetworkDB");

// export connection.
module.exports = connection;
