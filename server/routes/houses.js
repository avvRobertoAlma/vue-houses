var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid-v4')

var houses;
fs.readFile(path.join(__dirname, '../', 'data', 'houses.json'), 'utf8', (err, data)=>{
    if(err){
        return console.log(err);
    }
    houses = JSON.parse(data);
    console.log(houses);
})

router.get('/', (req, res, next)=>{
    res.send(houses);
});

router.post('/', (req, res, next)=>{
    const newHouse = {
        id: uuid(),
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        image: req.body.image,
        url: req.body.url,
        price: req.body.price,
        review: req.body.review
    };
    houses.push(newHouse);
    const housesJson = JSON.stringify(houses);
    console.log(housesJson);
    fs.writeFile(path.join(__dirname, '../', 'data', 'houses.json'), housesJson, (err)=>{
        if(err) { return console.log(err)}
    console.log('saved!')
    });
    res.sendStatus(200);
})

module.exports = router;
