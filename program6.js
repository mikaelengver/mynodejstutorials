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
var callback = function (err, fileListData) {
	if (err) {
		//console.log(err);
		return;
	}
	console.log(fileListData);
}

var myFileListModule = fileListModule(path, extension, callback);
myFileListModule.readDirectoryAsync();
