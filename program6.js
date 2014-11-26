var fileListModule = require('./filelistmodule');

if (process.argv.length < 3) {
	console.log('Supply path.');
	return;
}

if (process.argv.length < 4) {
	console.log('Supply filtering.');
	return;
}

var path = process.argv[2];
var extension = process.argv[3];

fileListModule(path, extension, function (err, fileListData) {
	if (err) {
		return console.error("Error oocured: ", err);
	}
	fileListData.forEach(function (file) {
		console.log(file);
	})
});
