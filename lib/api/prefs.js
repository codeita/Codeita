/*
prefs.js
----------------
App and user preference management
*/

module.exports = {
	get: function(event, callback){
		callback(null, {hello:"World!"});
	}
}