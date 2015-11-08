var express = require('express');
var router = express.Router();
var State = []
/* GET users listing. */

router.get('/tdetail/:id', function(req, res, next) {
    var db = req.db;
    var collection = db.get('tdetail');
    var ss = 'JFK';
    if(req.params.id === 'NV'){
        ss = 'LAS';
            collection.find({Destination: ss },{limit:10},function(e,docs){
                res.json(docs);
            });

    }
    else if(req.params.id === 'FL'){
        ss = 'FLL';

            collection.find({Destination: ss },{limit:10},function(e,docs){
                res.json(docs);
            });

    }
    else if(req.params.id === 'SC'){
        ss = 'CHS';
            collection.find({Destination: ss },{limit:10},function(e,docs){
                res.json(docs);
            });

    }
    else if(req.params.id === 'NY'){
        ss = 'JFK';
            collection.find({Destination: ss },{limit:10},function(e,docs){
                res.json(docs);
            });

    }
    else if(req.params.id === 'CA'){
        ss = 'LAX';
            collection.find({Destination: ss },{limit:10},function(e,docs){
                res.json(docs);
            });

    }
    else if(req.params.id === 'LA'){
        ss = 'MSY';
            collection.find({Destination: ss },{limit:10},function(e,docs){
                res.json(docs);
            });

    }
    else{
        collection.find({},{limit:10},function(e,docs){
            res.json(docs);
        });
    }
});

module.exports = router;
