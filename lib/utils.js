var execSync = require('child_process').execSync;

module.exports = {
	parseEnvVars: function(str){
		return execSync("echo "+str).toString('utf8').trim();
	}
}