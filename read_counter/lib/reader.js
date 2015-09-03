var fs = require('fs')
module.exports = {
	load:  function() {
		fs.readFile('./lib/data.txt', 'utf-8', function (err, data){
			if (err) throw err;
			data = data.split(',')
			data[1] = parseInt(data[1]) + 1
			console.log("Times Read " + data[1])
			fs.writeFile('./lib/data.txt', data.join(','), 'utf-8',  function (err) {
			  if (err) throw err;
			  console.log('Process Completed');
			});
		})
	}
}