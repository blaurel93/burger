// const cTable = require('console.table');
var connection = require("../config/connection");

var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers ORDER BY id DESC;", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function (name, cb) {
        var query = "INSERT INTO burgers (burger_name) VALUES (?);"
        connection.query(query, [name], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (condition, id, cb) {
        var query = "UPDATE burgers SET devoured = ? WHERE id = ?;"
        connection.query(query, [condition, id], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};
module.exports = orm;