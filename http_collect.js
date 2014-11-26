var http = require('http');
var bl = require('bl');

if (process.argv.length < 3) {
	console.log('Supply url.');
	return;
}

var url = process.argv[2];
http.get(url, function(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) { 
    	if (err) return console.error(err);
    	
    	var content = data.toString();
		console.log(content.length);
		console.log(content);
	}))

});