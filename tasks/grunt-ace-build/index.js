var url = require('url'),
		path = require('path'),
		request = require('request'),
		exec = require('child_process').exec,
		fs = require('fs');



module.exports = function(grunt){
	
	grunt.registerMultiTask('ace_builds', 'Log stuff.', function() {

    var options = this.options({tag:"latest"});
    
		var that = this;
		var ua = {"User-Agent":"grunt-ace"};
		var done = that.async();
		

		request({url:"https://api.github.com/repos/ajaxorg/ace-builds/tags", headers:ua}, function(err,raw){
	    try {
	      var parsedData = JSON.parse(raw.body);
	      var obj = options.tag=='latest' ? parseData[0] : parsedData.find(function(it){ return it.name==options.tag});
	      if(!obj){
		      grunt.fail.fatal("Ace tag "+options.tag+" not found.");
		      done();
	      }else{
	
		      
		      var ace_version = obj.name;
		      var ace_tar = obj.tarball_url;
		      
		      console.log("Downloading Ace Editor %s -> %s", ace_version, that.data.path);
	
	
					grunt.file.mkdir(that.data.path);
					var tmp = path.join(that.data.path, "ace"+ace_version+".tar.gz");
					
					var tar = request({url:obj.tarball_url, headers:ua});
					tar.on('end',function(){
						exec("tar -xvzf "+tmp+" --strip 1 -C "+that.data.path,function(e,so,se){
							grunt.file.delete(tmp);
							done();
						});					
					});
					tar.pipe(fs.createWriteStream(tmp));
					
				}
				
	    } catch (e) {
	      console.log(e.message);
	    }
			
		});
	
	});

}