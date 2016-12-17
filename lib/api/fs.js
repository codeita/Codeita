/*
fs.js
----------------
Local filesystem utilites
*/

var fs = require('fs'),
		path = require('path');

module.exports = {
	list: function(event, callback){
		var d = (!event.req.query.path) ? process.env.HOME : event.req.query.path;
		var list = fs.readdirSync(d);
		callback(null, {files:list, abs_path:d});
	},
	read: function(event, callback){
		var data = fs.readFileSync(event.req.query.path);
		callback(null, {body:data.toString(event.defaults.files.encoding), abs_path:event.req.query.path});
	}
}