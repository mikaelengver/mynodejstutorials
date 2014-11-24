var fs = require('fs');

if (process.argv.length < 3) {
	console.log('Supply file path.');
	return;
}

function readFileAsync(){
	fs.readFile(process.argv[2], function callBack(err, fileContent) {
		console.log(fileContent.toString().split('\n').length - 1);
	});
}

readFileAsync();

