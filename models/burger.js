const orm = require('../config/orm.js');
let burger = {
  	selectAll: function(callback) {
    	orm.selectAll('burgers', function(res) {
      		callback(res);
    	});
  	},
 	insertOne: function(columns, values, callback) {
    	orm.insertOne('burgers', columns, values, function(res) {
      		callback(res);
    	});
  	},
  	updateOne: function(columnValues, condition, callback) {
    	orm.updateOne('burgers', columnValues, condition, function(res) {
      		callback(res);
    	});
  	}
};

module.exports = burger;