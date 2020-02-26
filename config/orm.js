var connection = require("./connection.js");
const cTable = require('console.table');

var orm = {
  selectAll: function (whatToSelect, tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function (err, result) {
      if (err) throw err;
      console.table(result);
    });
  },
  // insertOne: function (tableInput, colToSearch) {
  //   var queryString = "INSERT INTO ?? (burgers, burger_name) VALUES ('??', false)";

  //   // console.log(queryString);

  //   connection.query(queryString, [tableInput, colToSearch], function (err, result) {
  //     if (err) throw err;
  //     // console.log(result);
  //     console.table(result);
  //   });
  // },

  insertOne: function (burgerName) {

    var query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
    //INSERT INTO burgers (id, burger_name, devoured) VALUES ('Hot-Mama', true);
    connection.query(query, [burgerName, 0], function (err, result) {
      if (err) throw err;
      console.log("Add complete");
      console.log(result);
    })
    
  },
  updateOne: function (burgerName, id) {
    var query = "UPDATE burgers SET burger_name = ?, devoured = false WHERE burger_id = ?;"
    connection.query(query, [burgerName, id], function (err, result) {
        if (err) throw err;
        console.log("Update complete");
        console.log(result);
    })
}
};

module.exports = orm;
