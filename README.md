jquery-youtube-access
=====================

What it does? Verifies if the user has access to Youtube.

Important?
==========

Many times yes. This could be used to:

- Determinate what kind of player will be displayed (fallbacks) in case Youtube is not accessible;
- If the client side proxy is blocking the user's Youtube access;

Usage
=====

At the first call, the plugin will test Youtube access and store the result. Later calls (without refresh) will bring the same result.

```javascript
$(document).ready(function(){

  $.hasyt();
	
	$('a').click(function(){

		if($.hasyt()){
			// has youtube access, yay!
		}

	});
	
});
```
