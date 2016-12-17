//"use strict"

let express = require('express'),
		util = require('util'),
		fs = require('fs');




let utils = require(__dirname+"/lib/utils.js");
let prefs = require(__dirname+"/defaults.json");

let app = express();
// var tty = require('tty.js');
// var app = tty.createServer({
//   shell: 'bash',
//   users: {
//     hello: '1234'
//   },
//   port: prefs.http.port
// });

//var DEFAULT_DIR = utils.parseEnvVars(prefs.default_directory) || "/";
//var HTTP_PORT = prefs.http.port || 3130;

//default: all requests to static


app.use(express.static(`${__dirname}/static`));

app.use('/dist',express.static(`${__dirname}/dist`));
app.use('/node',express.static(`${__dirname}/node_modules`));

//special shortcuts
//app.use("/ace",express.static(__dirname+"/dist/ace-builds/src-min-noconflict"));
//app.use("/app",express.static(__dirname+"/app"));

app.use('/api/:namespace/:call', require(`${__dirname}/lib/api.js`)({defaults:prefs}));

app.listen(prefs.http.port);
