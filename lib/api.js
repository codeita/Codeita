var fs = require('fs'),
		path = require('path');

var api_dir = __dirname+"/api",
		api = {},
		api_files = fs.readdirSync(api_dir).filter(function(it){ return /\.js$/.test(it); });

api_files.forEach(function(it){
	var p = path.parse(it);
	api[p.name] = require(path.join(api_dir,it));
});


module.exports = function(opts){

	//middleware function
	return function(req,res,next){	
		var o = api[req.params.namespace];
		if(o && typeof o[req.params.call]=='function'){
			o[req.params.call]({req:req, res:res, defaults:opts.defaults}, function(err, output){
				res.status(200).json(output);
			});
		}else{
			res.status(404).json({error:true, msg:"Invalid API request. Tisk, tisk..."})
		}
	}	
}