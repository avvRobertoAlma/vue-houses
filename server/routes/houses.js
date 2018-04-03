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

router.get('/:id', (req, res, next)=>{
    const house = houses.filter((element)=>{
        return element.id == req.params.id
    });
    console.log(house);
    res.send(house);
})

router.post('/', (req, res, next)=>{
    const newHouse = {
        id: uuid(),
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        size: req.body.size,
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

router.put('/:id', (req, res, next)=>{
    const index = houses.findIndex((obj)=> obj.id == req.params.id)
    console.log(index);

    houses[index].name = req.body.name;
    houses[index].location = req.body.location;
    houses[index].description = req.body.description;
    houses[index].image = req.body.image;
    house[index].size = req.body.size;
    houses[index].url = req.body.url;
    houses[index].price = req.body.price;
    houses[index].review = req.body.review;

    //save new houses array
    const housesJson = JSON.stringify(houses);
    console.log(housesJson);
    fs.writeFile(path.join(__dirname, '../', 'data', 'houses.json'), housesJson, (err)=>{
        if(err) { return console.log(err)}
    console.log('saved!')
    });
    res.sendStatus(200);


})

router.delete('/:id', (req, res, next)=>{
    const index = houses.findIndex((obj)=> obj.id == req.params.id)
    console.log(index);
    houses.splice(index, 1);

    const housesJson = JSON.stringify(houses);
    console.log(housesJson);
    fs.writeFile(path.join(__dirname, '../', 'data', 'houses.json'), housesJson, (err)=>{
        if(err) { return console.log(err)}
    console.log('removed!')
    });
    res.sendStatus(200);

})

module.exports = router;
