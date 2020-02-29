var express = require("express");
var burgah = require("../models/burger.js");

var router = express.Router();


router.get("/", function (req, res) {
    burgah.all(function (data) {
        var grabInfo = {
            burgers: data
        };
        console.log(grabInfo);

        res.render("index", grabInfo);
    });
});

router.post("/api/burgers", function (req, res) {
    burgah.create(req.body.burger_name, function (result) {
        console.log(req.body.burger_name + " has been added to the burger list!");

        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var burgahId = "Burg id = " + req.params.id;

    console.log(burgahId);
    burger.update(true, req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;