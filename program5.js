var fs = require('fs');

if (process.argv.length < 3) {
	console.log('Supply path.');
	return;
}

if (process.argv.length < 4) {
	console.log('Supply filtering.');
	return;
}

function readDirectoryAsync(){
	fs.readdir(process.argv[2], function callBack(err, list) {
		for (var i = 0; i < list.length; i++) {
			if (endsWith(list[i], '.' + process.argv[3])) {
				console.log(list[i]);
			}
		};
	});
}	

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

readDirectoryAsync();

