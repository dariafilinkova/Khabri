const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);


var schema = {
  "type": "array",
  "minItems": 6,
  "maxItems": 10,
  "items": {
	  "type": "object",
	  "properties": {
	    "name": {
	      "type": "string",
	      "faker": "random.word"
		},
		"nickname": {
			"type": "string",
			"faker": "name.findName"
		  },
		"music":{
			"type":"string",
			"faker":"name.title"
		},
	    "minutes": {
	      "type": "integer",
		  "minimum":0,
		  "maximum":5
		},
		"seconds": {
			"type": "integer",
			"minimum":0,
			"maximum":59
		  },
	    "chart" : {
	      "type": "integer", 
	       "minimum": 1,
  		   "maximum": 20
	    },
		"year":
		{
			"type": "integer",
			"minimum":2000,
			"maximum":2020	
		},
		"country":{
			"type":"string",
			"faker":"address.country"
		},

	  },
	  "required": [
		"name",
		"nickname",
		"year", 
		"country",
		"minutes",
		"seconds",
	    "chart"
	   ]
	  }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
  	   console.log(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('music', 
	  	{  music:  sample });
  });

  
});

module.exports = router;
