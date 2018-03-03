const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res) {
  	burger.selectAll(function(data) {
    	let burgerObject = {
      		burgers: data
    	};
    	res.render('index', burgerObject);
  	});
});

router.post('/burgers', function(req, res) {
  	burger.insertOne([
    	'burger_name'
  	], 
  	[
    	req.body.burger_name
  	], 
  	function(data) {
    	res.redirect('/');
  	});
});

router.put('/burgers/:id', function(req, res) {
  	let condition = 'id = ' + req.params.id;

  	burger.updateOne({
    	devoured: true
  	}, 
  	condition, function(data) {
    	res.redirect('/');
  	});
});

module.exports = router;