var fs = require('fs');

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

module.exports = function(path, extension, next) {
	return { 
		readDirectoryAsync : function() {
			fs.readdir(path, function callBack(err, list) {
				if (err) return next(err);
				var fileList = "";
				for (var i = 0; i < list.length; i++) {
					if (endsWith(list[i], '.' + extension)) {
						fileList += list[i] + '\r\n';
					}
				};
				next(null, fileList);
			});
		}
	}
}
