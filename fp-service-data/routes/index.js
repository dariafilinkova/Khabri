const express = require('express');
const router = express.Router();

const util = require('util')
const chance = require('chance')
const faker = require('faker')
 

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', 
		  { company:"Belarusian State University",
		  author:"Daria",
		  year:"2020"
	  	});

  
});

module.exports = router;
