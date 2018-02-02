var orm = require('../config/orm.js')

var burger = {
    all: function(cb){
        orm.all("burgers", function(result){
            cb(res);
        })
    },
    create: function(col2, vals, cb){
        orm.create("burgers", cols, vals, function(result){
            cb(res);
        })
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        })
    }
};

module.exports = burger;
