$.hasyt = function() {

	if(typeof document['hasyt'] === 'undefined'){

		document['hasyt'] = false;
		$("<img/>").attr("src", "http://youtube.com/favicon.ico").load(function() {
			$("<img/>").attr("src", "http://youtube.com/robots.txt").load(function() {
				document['hasyt'] = true;
			});
		});
	}

	return document['hasyt'];
};