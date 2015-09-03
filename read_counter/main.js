var reader = require('./lib/reader.js')

function counter(x){
	var i = 0
	function timer(){
			setTimeout(function(){
				reader.load();
				i = i + 1
				if (i != x) {
					timer();
				}
			}, 50)
	}
	timer()
}

counter(134)

