$.hasyt = function(callback) {

	if(typeof document['hasyt'] === 'undefined'){

		document['hasyt'] = false;
		$("<img/>").attr("src", "//youtube.com/favicon.ico?" + new Date().getTime()).load(function() {
			
			document['hasyt'] = true;
			if(typeof callback !== 'undefined') {
				callback();
			}
			
		}).error(function(){
			if(typeof callback !== 'undefined') {
				callback();
			}
		});
	}

	return document['hasyt'];
};
