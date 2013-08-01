jquery-youtube-access
=====================

Verify if the user has access to youtube.

Important?
==========

Yes, this could be used to determinate what kind of player will be displayed for example.

Usage
=====

At the first call, the plugin will test the access and store the result, at the second call will be just memory reference, so don't worry about network.

```
$(document).ready(function(){

  $.hasyt();
	
	$('a').click(function(){

		if($.hasyt()){
			// has access
		}

	});
	
});
```