var http = require('http');

if (process.argv.length < 3) {
	console.log('Supply url.');
	return;
}

var url = process.argv[2];
http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on('data', console.log);
	response.on('error', console.error);
	response.on('end', console.log);
});