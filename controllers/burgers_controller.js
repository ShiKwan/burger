var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

router.post("/api/burgers", function (req, res){
    console.log(req.body.name);
    console.log(req.body.devoured);
    var dev = null;
    if(req.body.devoured === true){dev = 1}else{dev = 0};
    burger.create(['burger','devoured'], [req.body.name,dev], function(result){
        res.json({id: result.insertId});
    })
})

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured : req.body.devoured
    }, condition, function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;