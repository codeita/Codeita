/*
fs.js
----------------
Local filesystem utilites
*/

var fs = require('fs'),
		path = require('path');

module.exports = {
	list: (event, callback) => {
		var d = (!event.req.query.path) ? process.env.HOME : event.req.query.path;
		var list = fs.readdirSync(d).map(function(it){
			var abs = path.join(d,it);
			var parsed = path.parse(abs);
			try {
				var lstat = fs.lstatSync(abs);
				parsed.isFile = lstat.isFile();
				parsed.isDirectory = lstat.isDirectory();
				parsed.isSymbolicLink = lstat.isSymbolicLink();
			}catch(e){
				console.log(`Unable to stat: ${abs}`);
				return false;
			}
			//parsed.isDirectory = stat.isDirectory();
			return parsed;
		}).filter(function(it){ return !!it; });
		//FileItem = {}
		callback(null, {files:list, abs_path:d});
	},
	read: (event, callback) => {
		var data = fs.readFileSync(event.req.query.path);
		callback(null, {body:data.toString(event.defaults.files.encoding), abs_path:event.req.query.path});
	}
}
