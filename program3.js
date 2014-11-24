var fs = require('fs');

if (process.argv.length < 3) {
	console.log('Supply file path.');
	return;
}

var file = fs.readFileSync(process.argv[2]);

console.log(file.toString().split('\n').length - 1);
