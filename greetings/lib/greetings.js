var fs = require('fs')
module.exports = {
  sayHello: function() {
   	fs.readFile('./lib/data.txt', "utf-8", function (err, data) {
	  if (err) throw err;
	  console.log(data.split(',').join(' '));
	});
  }
};