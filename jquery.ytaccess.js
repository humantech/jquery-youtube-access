$.hasyt = function() {

	if(typeof document['hasyt'] === 'undefined'){

		document['hasyt'] = false;
		$("<img/>").attr("src", "//youtube.com/favicon.ico?" + new Date().getTime()).load(function() {
			document['hasyt'] = true;
		});
	}

	return document['hasyt'];
};
