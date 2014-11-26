var fs = require('fs')

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

module.exports = function(path, extension, next) {
	fs.readdir(path, function(err, list) {
		if (err) return next(err);

		list = list.filter(function (file) {
			return endsWith(file, '.' + extension);
		});
		next(err, list);
	});
}
