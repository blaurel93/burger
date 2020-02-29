var orm = require("../config/orm.js");

// Code to call the orm functions using burger specific input for the orm.
let burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res1) {
            cb(res1);
        });
    },
    createBurgah: function (Burg, cb) {
        orm.insertOne(Burg, function (res1) {
            cb(res1);
        })
    },
    updateBurgah: function (which, id, cb) {
        orm.updateOne(which, id, function (res1) {
            cb(res1);
        });
    }
}

module.exports = burger;